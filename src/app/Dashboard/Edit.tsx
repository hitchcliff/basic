import { Button, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ImageUpload } from "../../component";
import { PostTypes } from "../../component/PostCard/types";
import { postSelector } from "../../features/Post/post.selector";
import { RootState } from "../../Store";

const { Text } = Typography;

enum BEM {
  Form = "dashboard-post-edit",
}

interface EditProps {
  handleClick: (e: any) => void;
  postid: string;
}

export default function Edit({ handleClick, postid }: EditProps) {
  const [upload, setUpload] = useState<boolean>(false);
  const fetchPostById: PostTypes | undefined = useSelector((state: RootState) =>
    postSelector.selectById(state, postid)
  );
  const [updatePost, setUpdatePost] = useState<PostTypes | {}>({
    ...fetchPostById,
  });
  const newPost = updatePost as PostTypes;

  function handleImageUpload(file: File) {
    setUpdatePost({
      ...newPost,
      image: file,
    });
  }

  console.log(updatePost);

  return (
    <Form className={BEM.Form} layout="horizontal">
      <Form.Item>
        <Text>Title</Text>
        <Input
          value={newPost.title}
          onChange={(e) =>
            setUpdatePost({ ...updatePost, title: e.currentTarget.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Text>Content</Text>
        <Input.TextArea
          value={newPost.content}
          onChange={(e) =>
            setUpdatePost({ ...updatePost, content: e.currentTarget.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Text style={{ marginRight: "10px" }}>Upload Image</Text>
        {upload ? (
          <ImageUpload handleChange={handleImageUpload} />
        ) : (
          <Button onClick={() => setUpload(true)}>Upload</Button>
        )}
      </Form.Item>
      <Form.Item>
        <Button className="update-button" style={{ marginRight: "10px" }}>
          Save
        </Button>
        <Button className="delete-button" onClick={() => handleClick(false)}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
}
