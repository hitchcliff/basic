import { Button, Form, Input } from "antd";
import React, { ChangeEvent } from "react";

const { TextArea } = Input;

interface EditorProps {
  onFinish: (e: any) => void;
  setValue: (e: string) => void;
  submitting: boolean;
}

export default function Editor({
  onFinish,
  submitting,
  setValue,
}: EditorProps) {
  return (
    <Form
      onFinish={(e) => {
        onFinish({ message: e.message, submitting: true });
      }}
    >
      <Form.Item name="message">
        <TextArea rows={4} onChange={(e) => setValue(e.currentTarget.value)} />
      </Form.Item>
      <Form.Item>
        <Button style={{ margin: "0" }} htmlType="submit" loading={submitting}>
          Submit comment
        </Button>
      </Form.Item>
    </Form>
  );
}
