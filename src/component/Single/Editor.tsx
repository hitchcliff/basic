import { Button, Form, Input } from "antd";
import React from "react";

const { TextArea } = Input;

interface EditorProps {
  onFinish: (e: any) => void;
  submitting: boolean;
}

export default function Editor({ onFinish, submitting }: EditorProps) {
  return (
    <Form
      onFinish={(e) => {
        onFinish({ message: e.message, submitting: true });
      }}
    >
      <Form.Item name="message">
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting}>
          Submit comment
        </Button>
      </Form.Item>
    </Form>
  );
}
