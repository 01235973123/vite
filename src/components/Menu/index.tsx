import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./index.scss";

const MenuToggle = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setTimeout(()=>{
        setVisible(true);
    }, 200)
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="menu">
        <div className="menu-item active">Trang chủ</div>
        <div className="menu-item">Dịch vụ</div>
        <div className="menu-item">Tuyển dụng</div>
        <div className="menu-item">Về chúng tôi</div>
        <div className="menu-item">Đăng nhập</div>
      </div>
      <div className="mobile">
        <div className="menu-toggle" onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">Trang chủ</Menu.Item>
            <Menu.Item key="2">Dịch vụ</Menu.Item>
            <Menu.Item key="3">Tuyển dụng</Menu.Item>
            <Menu.Item key="4">Về chúng tôi</Menu.Item>
            <Menu.Item key="5">Đăng nhập</Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </>
  );
};

export default MenuToggle;
