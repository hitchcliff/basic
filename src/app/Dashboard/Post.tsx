import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import PostCard from "../../component/PostCard/PostCard";
import Add from "./Add";
import useBlogService from "../Hooks/useBlogService";
import { postSelectAllSelector } from "../../features/Post/post.selector";
import { PostTypes } from "../../component/PostCard/types";
import { fetchAllPosts } from "../../features/Post/post.thunk";
import { useDispatch, useSelector } from "react-redux";

enum BEM {
  Layout = "dashboard-posts",
  Form = "dashboard-posts__form",
  Content = "dashboard-posts__content",
  Cards = "dashboard-posts__content-card",
}

export default function Posts() {
  const { addPost, destroyPost } = useBlogService();
  const posts: PostTypes[] = useSelector(postSelectAllSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  function handleClick(post: PostTypes) {
    addPost(post);
  }

  return (
    <Row className={BEM.Layout} align="top" justify="space-between">
      <Col md={8} className={BEM.Form} style={{ marginRight: "10px" }}>
        <Add title="Add a post" handleClick={handleClick} />
      </Col>
      <Col md={16} className={BEM.Content}>
        {posts.map((post: PostTypes) => {
          return (
            <Row key={post.id} className={BEM.Cards}>
              <PostCard post={post}>
                <Button
                  className="delete-button"
                  onClick={() => destroyPost(post.id)}
                >
                  Delete
                </Button>
                <Button className="update-button">Update</Button>
              </PostCard>
            </Row>
          );
        })}
      </Col>
    </Row>
  );
}
