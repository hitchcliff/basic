import { InboxOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Typography, Upload } from "antd";
import React from "react";

const { TextArea } = Input;
const { Text, Title } = Typography;

enum BEM {
  Form = "dashboard-add-post",
  Button = "dashboard-add-post__button",
}

export default function AddPost() {
  const normFile = (e: any) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Card title="Add a post">
      <Form className={BEM.Form}>
        <Form.Item required>
          <Text>Title</Text>
          <Input />
        </Form.Item>
        <Form.Item required>
          <Text>Content</Text>
          <TextArea />
        </Form.Item>
        <Form.Item
          name="dragger"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          noStyle
        >
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            Upload or Drag file here
          </Upload.Dragger>
          <Form.Item>
            <Button className={BEM.Button}>Submit</Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </Card>
  );
}
