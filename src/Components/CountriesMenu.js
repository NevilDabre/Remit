import React from "react";
import { Menu, Dropdown, Button, message, Space, Tooltip } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const countriesData = require("../../data-source/countries.json");

function handleButtonClick(e) {
  message.info("Click on left button.");
  console.log("click left button", e);
}

function handleMenuClick(e) {
  message.info("Click on menu item.");
  console.log("click", e);
}

// countriesData
const menu = (
  <Menu onClick={handleMenuClick}>
    {countriesData.map((country) => {
      return (
        <Menu.Item key={country.id}>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            <img
              className="ant-menu-item"
              src={`data:image/jpeg;base64,${country.flag}`}
            />
            <span>{country.name}</span>
          </div>
        </Menu.Item>
      );
    })}
  </Menu>
);

const CountriesMenu = () => {
  return (
    <Space wrap>
      <Dropdown.Button
        overlay={menu}
        placement="bottomCenter"
        icon={<UserOutlined />}
      >
        Dropdown
      </Dropdown.Button>
    </Space>
  );
};

export default CountriesMenu;
