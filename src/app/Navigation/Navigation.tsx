import { Layout, Menu, Row } from "antd";
import React, { useState } from "react";

enum BEM {
  Menu = "navigation-menu",
  List = "navigation-menu__lists",
}

export default function Navigation() {
  const [current, setCurrent] = useState<any>();

  return (
    <Layout className={BEM.Menu}>
      <Menu className={BEM.List} onClick={setCurrent} selectedKeys={[current]}>
        <Menu.Item className={`${BEM.List}--nav`} key="home">
          Home
        </Menu.Item>
        <Menu.Item className={`${BEM.List}--nav`} key="blog">
          Blog
        </Menu.Item>
        <Menu.Item className={`${BEM.List}--nav`} key="projects">
          Projects
        </Menu.Item>
        <Menu.Item className={`${BEM.List}--dashboard`} key="dashboard">
          Dashboard
        </Menu.Item>
      </Menu>
    </Layout>
  );
}
