import React from "react";
import { Button, Form, Input, Layout, Typography } from "antd";

export default function Auth() {
  function handleSubmit(values: any) {
    console.log(values);
  }

  function handleGuest() {
    return (window.location.pathname = "/dashboard/posts");
  }

  console.log("auth");

  return (
    <Layout className="default auth">
      <Form onFinish={handleSubmit}>
        <Form.Item
          rules={[{ required: true, message: "Please input your username." }]}
        >
          <Typography.Text>Username</Typography.Text>
          <Input name="username" />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your password." }]}
        >
          <Typography.Text>Password</Typography.Text>
          <Input.Password name="password" />
        </Form.Item>
        <Form.Item>
          <Button className="primary-button" htmlType="submit">
            Login
          </Button>
          <Button onClick={handleGuest}>Sign in as Guest</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
