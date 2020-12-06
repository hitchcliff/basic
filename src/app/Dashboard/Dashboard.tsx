import React, { Suspense, useEffect, useState } from "react";
import { Layout, Menu, Tabs } from "antd";
import { useRouteMatch, useHistory } from "react-router-dom";
import Loading from "../../component/Loading/Loading";
import Posts from "./Post";
import Project from "./Project";
import { Direction } from "../../App.types";

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
  const match = useRouteMatch(Direction.Dashboard + "/:page");
  const history = useHistory();

  useEffect(() => {
    setActiveKey(match?.params.page);
  }, [match]);

  function changeTab(nextActiveKey: string) {
    setActiveKey(nextActiveKey);
    history.push(`${Direction.Dashboard}/${nextActiveKey}`);
  }

  return (
    <Layout className={BEM.Layout}>
      <Header className={BEM.Header}>
        <Tabs activeKey={activeKey} onChange={changeTab}>
          <Tabs.TabPane tab="Posts" key={MenuTab.Posts} />
          <Tabs.TabPane tab="Projects" key={MenuTab.Projects} />
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
      <Suspense fallback={<Loading />}>
        <Content className={BEM.Content}>
          {activeKey === MenuTab.Posts && <Posts />}
          {activeKey === MenuTab.Projects && <Project />}
        </Content>
      </Suspense>
    </Layout>
  );
}
