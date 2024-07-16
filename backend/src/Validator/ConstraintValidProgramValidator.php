<?php

declare(strict_types=1);

namespace App\Validator;

use App\Document\Event;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

final class ConstraintValidProgramValidator extends ConstraintValidator
{
	public function __construct()
	{
	}

	public function validate($value, Constraint $constraint)
	{
		if (!$constraint instanceof ConstraintValidProgram) {
			throw new UnexpectedTypeException($constraint, ConstraintValidProgram::class);
		}

		if (!$value instanceof Event) {
			throw new UnexpectedValueException($value, Event::class);
		}
		// TODO: Ensure no overlapping speech times.
		// At any given moment during the event, only one speech should be occurring.
		// If overlaps are detected, add the following violation to the context 
		// to display an appropriate error message to the API consumer.

		$speeches = $value->getProgram();

		if (count($speeches) <= 1) {
			return; // No overlap possible with 0 or 1 speech
		}

		for ($i = 0; $i < count($speeches) - 1; $i++) {
			$currentSpeech = $speeches[$i];
			$nextSpeech = $speeches[$i + 1];

			if ($this->isOverlapping($currentSpeech, $nextSpeech)) {
				$this->context
					->buildViolation($constraint->overlappingSpeechesMessage)
					->addViolation();
				return; // Stop further validation on first overlap detection
			}
		}
	}

	private function isOverlapping($speech1, $speech2)
	{
		$start1 = $speech1->getStartTime();
		$end1 = $speech1->getEndTime();
		$start2 = $speech2->getStartTime();
		$end2 = $speech2->getEndTime();

		return $start1 < $end2 && $start2 < $end1;
	}
}

