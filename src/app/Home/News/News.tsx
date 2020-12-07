import React, { useEffect } from "react";
import { Col, Row, Typography } from "antd";
import PostCard from "../../../component/PostCard/PostCard";
import { PostTypes } from "../../../component/PostCard/types";
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

export const sampleData: PostTypes[] = [
  {
    id: "1",
    title: "title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto deserunt error perferendis cum illo? Repellat laudantium ex minusnemo quibusdam.",
    createdAt: "Feb. 6, 1998",
    image: "https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78",
    user: {
      name: "Kevin Nacario",
      uid: "1231231",
    },
  },
  {
    id: "2",
    title: "title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto deserunt error perferendis cum illo? Repellat laudantium ex minusnemo quibusdam.",
    createdAt: "Feb. 6, 1998",
    image: "https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78",
    user: {
      name: "Kevin Nacario",
      uid: "1231231",
    },
  },
  {
    id: "3",
    title: "title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto deserunt error perferendis cum illo? Repellat laudantium ex minusnemo quibusdam.",
    createdAt: "Feb. 6, 1998",
    image: "https://miro.medium.com/max/10000/0*wZAcNrIWFFjuJA78",
    user: {
      name: "Kevin Nacario",
      uid: "1231231",
    },
  },
];

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
  }, []);

  console.log(posts);

  return (
    <Row className="default home-news">
      <Title level={5} className={BEM.Heading}>
        My recent posts
      </Title>
      <Row className={BEM.Posts}>
        {posts.map((post) => {
          return (
            <Col key={post.id} span={8}>
              <PostCard post={post} route={Direction.Blog} limit />
            </Col>
          );
        })}
      </Row>
    </Row>
  );
}
