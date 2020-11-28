import React from "react";
import { Statistic, Row, Col } from "antd";
import {
  LikeOutlined,
  DollarOutlined,
  FieldTimeTwoTone,
  BankTwoTone,
  DollarTwoTone,
  ClockCircleTwoTone
} from "@ant-design/icons";

const Rate = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Statistic title="Rate" value={55.3} prefix={<DollarTwoTone />} />
      </Col>
      <Col span={8}>
        <Statistic
          title="Time"
          value={24}
          prefix={<ClockCircleTwoTone />}
          suffix="H"
        />
      </Col>
      <Col span={8}>
        <Statistic title="Fess" value={2} prefix={<BankTwoTone />} />
      </Col>
    </Row>
  );
};

export default Rate;
