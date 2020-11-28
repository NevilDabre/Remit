import React from "react";
import { Typography, Space } from "antd";
const { Text, Link } = Typography;

const Rate = () => {
  return (
    <Space direction="vertical">
      <Text>Exchange rate</Text>
      <Text>Transfer time</Text>
      <Text>Our fee</Text>
    </Space>
  );
};

export default Rate;
