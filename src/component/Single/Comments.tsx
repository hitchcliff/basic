import { Avatar, Col, Comment, List, Row, Typography } from "antd";
import React, { ChangeEvent, useState } from "react";
import Editor from "./Editor";

const { Title } = Typography;

enum BEM {
  Comments = "single-comments",
}

export default function Comments() {
  const [value, setValue] = useState<ChangeEvent<HTMLTextAreaElement>>();
  const [onFinish, setOnFinish] = useState({
    message: "",
    submitting: false,
    comments: [
      {
        author: "Han Solo",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: <p>{value}</p>,
        datetime: Date.now().toLocaleString(),
      },
    ],
  });

  console.log(value);
  return (
    <Col span={24}>
      <Title level={4}>Post a comment</Title>
      <Comment
        className={BEM.Comments}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor
            onFinish={setOnFinish}
            submitting={onFinish.submitting}
            setValue={setValue}
          />
        }
      />
      {/* <List
        dataSource={state}
        renderItem={(props) => <Comment {...props} />}
        itemLayout="horizontal"
      /> */}
    </Col>
  );
}
