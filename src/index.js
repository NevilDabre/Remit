import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { List, Avatar, Space, Row, Col, Rate } from "antd";
import {
  MessageOutlined,
  LikeOutlined,
  StarOutlined,
  AndroidFilled,
  AppleFilled,
  BankTwoTone
} from "@ant-design/icons";

import RateComponent from "./Components/Rate";
import Description from "./Components/Description";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://www.remitbee.com/",
    title: `Remitbee`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    // description:
    //   "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

ReactDOM.render(
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <Row>
        <Col lg={{ span: 12, offset: 6 }}>
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={AndroidFilled}
                text="4.5"
                key="android-store-icon"
              />,
              <IconText icon={AppleFilled} text="4.6" key="apple-store-icon" />,
              <IconText
                icon={MessageOutlined}
                text="0"
                key="list-vertical-message"
              />
            ]}
            extra={
              <img
                width={200}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={
                <>
                  {/* // <Space>
                //   <a href={item.href}>{item.title}</a>
                //   <Rate />
                // </Space> */}
                  <Description />
                </>
              }
              description={item.description}
            />
            {/* {item.content} */}
            <RateComponent />
          </List.Item>
        </Col>
      </Row>
    )}
  />,
  document.getElementById("container")
);

// <Row>
// <Col span={12} offset={6}>
//   col-12 col-offset-6
// </Col>
// </Row>
