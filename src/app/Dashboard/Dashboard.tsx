import { Card, Layout, Menu, Row, Typography } from "antd";
import React from "react";

const { Header, Content, Sider } = Layout;
const { Title, Text, Paragraph } = Typography;

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
        <Title className={BEM.Heading} level={3}>
          Dashboard, welcome back Kevin!
        </Title>
        <Menu className={BEM.Menu}>
          <Menu.Item>Posts</Menu.Item>
          <Menu.Item>Projects</Menu.Item>
        </Menu>
      </Header>
      <Content className={BEM.Content}>
        <Sider className={BEM.Sider} width={300}>
          Hello
        </Sider>
        {/* <Card>
          <Title level={4}>First posts</Title>
        </Card> */}
      </Content>
    </Layout>
  );
}
