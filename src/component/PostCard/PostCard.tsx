import { CalendarOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Typography } from "antd";
import React from "react";
import { PostTypes } from "./types";
import { useHistory } from "react-router-dom";

const { Text, Paragraph, Title } = Typography;

enum BEM {
  Card = "post-card",
  Title = "post-card__title",
  Col = "post-card__title-col",
}

interface PostCardProps {
  post: PostTypes;
  route: string;
  children?: any;
  showImage?: boolean;
  hoverable?: boolean;
}

export default function PostCard({
  post,
  children,
  showImage,
  hoverable,
  route,
}: PostCardProps) {
  const history = useHistory();

  return (
    <Card
      className={showImage ? "post-card post-card--hasImage " : BEM.Card}
      hoverable={hoverable}
      title={
        <Title level={4} className={BEM.Title}>
          {post.title}
          <Col className={BEM.Col}>
            <Button onClick={() => history.push(`${route}/${post.id}`)}>
              View post
            </Button>
          </Col>
        </Title>
      }
    >
      {showImage && <Image src={post.image} alt={post.title} />}

      <Text>
        <CalendarOutlined /> {post.createdAt}
      </Text>
      <Paragraph>{post.content}</Paragraph>
      {children}
    </Card>
  );
}
