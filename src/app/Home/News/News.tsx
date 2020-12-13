import React, { useEffect } from "react";
import { Col, Row, Typography } from "antd";
import PostCard from "../../../component/PostCard/PostCard";
import { Direction } from "../../../App.types";
import { fetchAllPosts } from "../../../features/Post/post.thunk";
import { useDispatch, useSelector } from "react-redux";
import { postSelectAllSelector } from "../../../features/Post/post.selector";

const { Title } = Typography;

enum BEM {
  Layout = "home-news",
  Heading = "home-news-title",
  Posts = "home-news__posts",
  Card = "home-news-card",
  Title = "home-news-card__title",
}

export default function News() {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectAllSelector);

  useEffect(() => {
    const req = setTimeout(() => {
      dispatch(fetchAllPosts());
    });

    return () => {
      clearTimeout(req);
    };
  }, [dispatch]);

  return (
    <Row className="default home-news">
      <Title level={5} className={BEM.Heading}>
        My recent posts
      </Title>
      <Row className={BEM.Posts}>
        {posts.map((post) => {
          return (
            <Col key={post.id}>
              <PostCard
                post={post}
                route={Direction.Blog}
                limit
                showViewButton
              />
            </Col>
          );
        })}
      </Row>
    </Row>
  );
}
