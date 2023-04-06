import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { To, useNavigate } from "react-router-dom";
import "./index.scss";

const MenuToggle = (props: any) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const redirect = (path: To) => {
    navigate(path);
    onClose();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const scroll = (id: any) => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    onClose();
  };

  return (
    <>
      <div className="menu">
        <div
          onClick={() => redirect("/")}
          className={`menu-item ${props.menuActive === 1 && "active"}`}
        >
          Trang chủ
        </div>
        <div
          className={`menu-item ${props.menuActive === 6 && "active"}`}
          onClick={() => scroll("#common")}
        >
          Về chúng tôi
        </div>
        <div
          className={`menu-item ${props.menuActive === 2 && "active"}`}
          onClick={() => scroll("#service")}
        >
          Dịch vụ
        </div>
        <div
          className={`menu-item ${props.menuActive === 3 && "active"}`}
          onClick={() => scroll("#news")}
        >
          Tin tức
        </div>
        <div
          className={`menu-item ${props.menuActive === 4 && "active"}`}
          onClick={() => scroll("#about-us")}
        >
          Đối tác
        </div>
        <div
          className={`menu-item ${props.menuActive === 5 && "active"}`}
          onClick={() => scroll("#client")}
        >
          Khách hàng
        </div>
      </div>
      <div className="mobile">
        <div className="menu-toggle" onClick={showDrawer}>
          <MenuOutlined />
        </div>
        <Drawer placement="right" onClose={onClose} visible={visible}>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[String(props.menuActive)]}
          >
            <Menu.Item onClick={() => redirect("/")} key="1">
              Trang chủ
            </Menu.Item>
            <Menu.Item key="6" onClick={() => scroll("#common")}>
              Về chúng tôi
            </Menu.Item>
            <Menu.Item key="2" onClick={() => scroll("#service")}>
              Dịch vụ
            </Menu.Item>
            <Menu.Item key="3" onClick={() => scroll("#news")}>
              Tin tức
            </Menu.Item>
            <Menu.Item key="4" onClick={() => scroll("#about-us")}>
              Đối tác
            </Menu.Item>
            <Menu.Item key="5" onClick={() => scroll("#client")}>
              Khách hàng
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </>
  );
};

export default MenuToggle;
