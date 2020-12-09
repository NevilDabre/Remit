import React from "react";
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

import CountriesMenu from "./CountriesMenu";
const { Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

// const DropdownMenu = () => {
//   return (

//   );
// };

const Header = () => {
  return (
    <PageHeader
      title="Live Rates"
      className="site-page-header"
      // subTitle="This is a subtitle"
      // tags={<Tag color="blue">Running</Tag>}
      extra={[<CountriesMenu />]}
      avatar={{
        src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4"
      }}
    ></PageHeader>
  );
};

export default Header;
