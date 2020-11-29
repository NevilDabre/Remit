import React from "react";
import { Collapse, Rate, Space, Typography } from "antd";
const { Title } = Typography;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const Description = () => {
  return (
    <Collapse ghost expandIconPosition={"right"}>
      <Panel
        header={
          <Space align="center">
            <span style={{ fontSize: "large" }} className="ant-rate-text">
              <a href="https://remitbee.com">Remitbee</a>
            </span>
            <Rate />
          </Space>
        }
        key="1"
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default Description;
