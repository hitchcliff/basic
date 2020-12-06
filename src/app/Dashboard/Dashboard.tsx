import { Layout, Menu, Tabs } from "antd";
import React, { useEffect, useState } from "react";
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

enum MenuTab {
  Posts = "posts",
  Projects = "projects",
}

export default function Dashboard() {
  const [activeKey, setActiveKey] = useState<string>(MenuTab.Posts);

  useEffect(() => {}, []);

  return (
    <Layout className={BEM.Layout}>
      <Header className={BEM.Header}>
        <Tabs defaultActiveKey={activeKey} onChange={setActiveKey}>
          <Tabs.TabPane tab="Posts" key="posts" />
          <Tabs.TabPane tab="Projects" key="projects" />
        </Tabs>
        <Menu className={BEM.Menu}>
          <Menu.Item
            className="goto-home-button"
            onClick={() => (window.location.pathname = "/")}
          >
            Go back to home
          </Menu.Item>
          <Menu.Item className="logout-button">Logout</Menu.Item>
        </Menu>
      </Header>
      <Content className={BEM.Content}>
        {activeKey === MenuTab.Posts && <Posts />}
        {activeKey === MenuTab.Projects && <Project />}
      </Content>
    </Layout>
  );
}
