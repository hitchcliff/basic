import { Layout, Menu, Button, Divider } from "antd";
import React from "react";
import Posts from "./Post";
import Project from "./Project";

const { Header, Content } = Layout;

enum BEM {
  Layout = "dashboard",
  Content = "dashboard-content",
  Header = "dashboard-header",
  Sider = "dashboard-sider",
  Menu = "dashboard-header__menu",
  Heading = "dashboard-header__heading",
}

export default function Dashboard() {
  return (
    <Layout className={BEM.Layout}>
      <Header className={BEM.Header}>
        <Button
          className="goto-home-button"
          onClick={() => (window.location.pathname = "/")}
        >
          Go back to home
        </Button>
        <Menu className={BEM.Menu}>
          <Menu.Item className="logout-button">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content className={BEM.Content}>
        <Posts />
        <Divider />
        <Project />
      </Content>
    </Layout>
  );
}
