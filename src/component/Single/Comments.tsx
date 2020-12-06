import { Avatar, Col, Comment, List, Typography } from "antd";
import React, { useState } from "react";
import CommentsList from "./CommentsList";
import Editor from "./Editor";
import { CommentTypes } from "./types";

const { Title } = Typography;

enum BEM {
  Comments = "single-comments",
}

interface CommentsProp {
  children?: any;
}

export default function Comments({ children }: CommentsProp) {
  const [value, setValue] = useState<string>("hello world");
  const [onFinish, setOnFinish] = useState<CommentTypes>({
    message: "Hello test comment",
    submitting: false,
    comments: [
      {
        author: "Han Solo",
        avatar:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        content: <p>{value}</p>,
        datetime: Date.now(),
      },
    ],
  });

  return (
    <Col span={24} style={{ margin: "80px 0" }}>
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
      >
        {children}
      </Comment>

      {onFinish.comments.length && (
        <List
          dataSource={onFinish.comments}
          renderItem={(props) => <CommentsList comments={props} />}
          itemLayout="horizontal"
        />
      )}
    </Col>
  );
}
