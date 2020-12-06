import { Button, Card, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { ImageUpload } from "../../component";
import { PostTypes } from "../../component/PostCard/types";

const { TextArea } = Input;
const { Text } = Typography;

enum BEM {
  Form = "dashboard-add-post",
  Button = "dashboard-add-post__button",
}

interface AppPostProps {
  title: string;
  handleClick: (e: any) => void;
}

const defaultPost = {
  id: Date.now().toString(),
  title: "title",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto deserunt error perferendis cum illo? Repellat laudantium ex minusnemo quibusdam.",
  createdAt: new Date().toDateString(),
  image: "https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78",
  user: {
    name: "Kevin Nacario",
    uid: "1231231",
  },
};

export default function AddPost({ title, handleClick }: AppPostProps) {
  const [newPost, setNewPost] = useState<PostTypes>({
    ...defaultPost,
  });

  return (
    <Card title={title}>
      <Form className={BEM.Form}>
        <Form.Item required>
          <Text>Title</Text>
          <Input
            onChange={(e: any) =>
              setNewPost({
                ...newPost,
                title: e.currentTarget.value,
              })
            }
          />
        </Form.Item>
        <Form.Item required>
          <Text>Content</Text>
          <TextArea
            onChange={(e: any) =>
              setNewPost({
                ...newPost,
                content: e.currentTarget.value,
              })
            }
          />
        </Form.Item>
        <Form.Item>
          <ImageUpload
            handleChange={(file) => setNewPost({ ...newPost, image: file })}
          />
        </Form.Item>
        <Form.Item>
          <Button className={BEM.Button} onClick={() => handleClick(newPost)}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
