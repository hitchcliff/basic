import { HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Typography } from "antd";
import React from "react";

const { Text, Paragraph, Title } = Typography;

enum BEM {
  Card = "post-card",
  Title = "post-card__title",
  Col = "post-card__title-col",
}

interface PostCardProps {
  post: { title: string; link: string; meta: string; content: string };
  children?: any;
}

export default function PostCard({ post, children }: PostCardProps) {
  return (
    <Card
      className={BEM.Card}
      hoverable
      title={
        <Title level={4} className={BEM.Title}>
          {post.title}
          <Col className={BEM.Col}>
            <HeartOutlined />
            <Button href={post.link}>View post</Button>
          </Col>
        </Title>
      }
    >
      <Text>{post.meta}</Text>
      <Paragraph>{post.content}</Paragraph>
      {children}
    </Card>
  );
}
