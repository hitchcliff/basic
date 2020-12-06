import React from "react";
import { Button, Form, Input, Layout, message, Typography } from "antd";
import { auth } from "../../firebase";

enum BEM {
  Form = "auth__form",
}

export default function Auth() {
  async function handleSubmit(values: { email: string; password: string }) {
    try {
      await auth.signInWithEmailAndPassword(values.email, values.password);
      message.success("Welcome back admin!");

      setTimeout(() => {
        window.location.pathname = "/dashboard/posts";
      }, 1000);
    } catch (error) {
      message.error("Invalid Credentials");
    }
  }

  async function handleGuest() {
    await auth.signInWithEmailAndPassword("guest@email.com", "123456");
    message.warning("Welcome guest!");

    setTimeout(() => {
      return (window.location.pathname = "/dashboard/posts");
    }, 1000);
  }

  return (
    <Layout className="default auth">
      <Form className={BEM.Form} onFinish={handleSubmit}>
        <Typography.Text>Email</Typography.Text>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input your email.",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Typography.Text>Password</Typography.Text>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password." }]}
        >
          <Input.Password name="password" />
        </Form.Item>
        <Form.Item>
          <Button
            className="auth__form-button"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            Login
          </Button>
          <Button onClick={handleGuest}>Sign in as Guest</Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}
