import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

enum BEM {
  Menu = "navigation-menu",
  List = "navigation-menu__lists",
}

export default function Navigation() {
  const [current, setCurrent] = useState<any>("home");
  const match = useRouteMatch("/:page");
  const history = useHistory();

  useEffect(() => {
    if (match?.params.page) {
      setCurrent(match.params.page);
    }
  }, [history]);

  function switchPage(e: any) {
    setCurrent(e.key);
    history.push(`/${e.key}`);
  }

  return (
    <Layout className={BEM.Menu}>
      <Menu className={BEM.List} onClick={switchPage} selectedKeys={[current]}>
        <Menu.Item className={`${BEM.List}--nav`} key="home">
          Home
        </Menu.Item>
        <Menu.Item className={`${BEM.List}--nav`} key="blog">
          Blog
        </Menu.Item>
        <Menu.Item className={`${BEM.List}--nav`} key="projects">
          Projects
        </Menu.Item>
        <Menu.Item className={`${BEM.List}--dashboard`} key="auth">
          Dashboard
        </Menu.Item>
      </Menu>
    </Layout>
  );
}
