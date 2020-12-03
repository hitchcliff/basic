import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";
import PostCard from "../../../component/PostCard/PostCard";

const { Title, Paragraph, Text } = Typography;

enum BEM {
  Layout = "home-news",
  Heading = "home-news-title",
  Posts = "home-news__posts",
  Card = "home-news-card",
  Title = "home-news-card__title",
}

export const sampleData = [
  {
    title: "title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto deserunt error perferendis cum illo? Repellat laudantium ex minusnemo quibusdam.",
    link: "!#",
    meta: "Feb. 6, 1998",
  },
  {
    title: "title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto deserunt error perferendis cum illo? Repellat laudantium ex minusnemo quibusdam.",
    link: "!#",
    meta: "Feb. 6, 1998",
  },
  {
    title: "title",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto deserunt error perferendis cum illo? Repellat laudantium ex minusnemo quibusdam.",
    link: "!#",
    meta: "Feb. 6, 1998",
  },
];

export default function News() {
  return (
    <Row className="default home-news">
      <Title level={5} className={BEM.Heading}>
        My recent posts
      </Title>
      <Row className={BEM.Posts}>
        <Col span={8}>
          <PostCard post={sampleData[0]} />
        </Col>

        <Col span={8}>
          <PostCard post={sampleData[2]} />
        </Col>

        <Col span={8}>
          <PostCard post={sampleData[1]} />
        </Col>
      </Row>
    </Row>
  );
}
