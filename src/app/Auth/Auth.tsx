import React from "react";
import { Button, Form, Input, Layout, Typography } from "antd";
import { Redirect, useLocation } from "react-router-dom";
import userUserService from "../Hooks/useUserService";
import { useSelector } from "react-redux";
import { userSelectAllSelector } from "../../features/User/user.selector";

enum BEM {
  Form = "auth__form",
}

export default function Auth() {
  const { signInUser, signInGuess } = userUserService();
  const user = useSelector(userSelectAllSelector);
  const { state } = useLocation();

  function handleSubmit(values: { email: string; password: string }) {
    signInUser(values.email, values.password);
  }

  function handleGuest() {
    signInGuess();
  }

  if (user.length) {
    return <Redirect to={state?.from || "/dashboard"} />;
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
