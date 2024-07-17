"use client";

import { List  } from "antd";
import { EventInterface } from "../../../../../types/DataModelTypes/EventInterface";
import DetailsItem from "./ProgramComponents/DetailsItem";

// TODO:
// Implement the Program component.
// The component should receive the program data as a prop and list the details of each speech.
// The program data is an array of objects conforming to the SpeechInterface (see frontend/src/types/DataModelTypes/SpeechInterface.ts).
// Use the Ant Design List component (https://ant.design/components/list) to display the list of speeches.
// Each list item should display the topic, speaker, and the start and end times of the speech (formatted as HH:mm).
// Define reusable functions in the frontend/src/lib/Utility.ts file.
// Define sub-components in a sub-directory of the current directory.
interface IProgramProps {
  event: EventInterface;
}

export default function Program({ event }: IProgramProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={event?.program}
      renderItem={(item) => <DetailsItem {...item} />}
    />
  );
}
