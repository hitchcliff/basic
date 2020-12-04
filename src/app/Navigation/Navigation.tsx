import { Layout, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

enum BEM {
  Menu = "navigation-menu",
  List = "navigation-menu__lists",
}

export default function Navigation() {
  const [current, setCurrent] = useState<any>("");
  const history = useHistory();

  useEffect(() => {
    if (current === "dashboard") {
      window.location.pathname = "/dashboard";
    } else {
      history.push(`/${current}`);
    }
  }, [current]);

  return (
    <Layout className={BEM.Menu}>
      <Menu
        className={BEM.List}
        onClick={(e) => setCurrent(e.key)}
        selectedKeys={[current]}
      >
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
