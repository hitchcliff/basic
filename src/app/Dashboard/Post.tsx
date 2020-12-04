import { Button, Col, Row } from "antd";
import React, { useEffect, useMemo } from "react";
import PostCard from "../../component/PostCard/PostCard";
import Add from "./Add";
import { useDispatch } from "react-redux";
import { sampleData } from "../Home/News/News";
import { fetchAllPosts } from "../../features/Post/post.thunk";
import useBlogService from "../Hooks/useBlogService";

enum BEM {
  Layout = "dashboard-posts",
  Content = "dashboard-posts__card",
  Row = "dashboard-posts__row",
}

export default function Posts() {
  const dispatch = useDispatch();
  const blogService = useBlogService();

  useEffect(() => {
    dispatch(fetchAllPosts);
  }, [dispatch]);

  function handleClick(e: any) {
    console.log(e);
  }

  return (
    <Row className={BEM.Layout} justify="start" align="top">
      <Col md={5} style={{ marginRight: "20px" }}>
        <Add title="Add a post" handleClick={handleClick} />
      </Col>
      <Col md={16}>
        <Row className={BEM.Row}>
          <Col md={8} className={BEM.Content}>
            <PostCard post={sampleData[0]}>
              <Button className="delete-button">Delete</Button>
              <Button className="update-button">Update</Button>
            </PostCard>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
