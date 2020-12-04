import { CalendarOutlined, HeartOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Typography } from "antd";
import React from "react";
import { PostTypes } from "./types";

const { Text, Paragraph, Title } = Typography;

enum BEM {
  Card = "post-card",
  Title = "post-card__title",
  Col = "post-card__title-col",
}

interface PostCardProps {
  post: PostTypes;
  children?: any;
  showImage?: boolean;
}

export default function PostCard({ post, children, showImage }: PostCardProps) {
  return (
    <Card
      className={showImage ? "post-card post-card--hasImage " : BEM.Card}
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
      {showImage && <Image src={post.image} alt={post.title} />}
      <Text>
        <CalendarOutlined /> {post.meta}
      </Text>
      <Paragraph>{post.content}</Paragraph>
      {children}
    </Card>
  );
}
