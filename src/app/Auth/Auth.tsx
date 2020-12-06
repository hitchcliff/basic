import React from "react";
import { Button, Form, Input, Layout, message, Typography } from "antd";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import userUserService from "../Hooks/useUserService";

enum BEM {
  Form = "auth__form",
}

export default function Auth() {
  const { signInUser, signInGuess } = userUserService();

  function handleSubmit(values: { email: string; password: string }) {
    signInUser(values.email, values.password);
  }

  function handleGuest() {
    signInGuess();
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
