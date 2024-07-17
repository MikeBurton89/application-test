import { List, Typography } from "antd";
import React from "react";
import { SpeechInterface } from "../../../../../../types/DataModelTypes/SpeechInterface";
import Utility from "../../../../../../lib/Utility";

const DetailsItem = (item: SpeechInterface) => {
  const formatTime = Utility.formatTime;
  return (
    <List.Item>
      <List.Item.Meta
        title={item.topic || "Topic not provided"}
        description={
          <Typography.Text>
            {item.speaker || "Unknown speaker"} |{" "}
            {item.startTime !== undefined
              ? formatTime(item.startTime)
              : "Start time not provided"}{" "}
            -{" "}
            {item.endTime !== undefined
              ? formatTime(item.endTime)
              : "End time not provided"}
          </Typography.Text>
        }
      />
    </List.Item>
  );
};

export default DetailsItem;
