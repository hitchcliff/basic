import { CalendarOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Typography } from "antd";
import React from "react";
import { PostTypes } from "./types";
import { useHistory } from "react-router-dom";

const { Text, Paragraph, Title } = Typography;

enum BEM {
  Card = "post-card",
  Title = "post-card__title",
  Col = "post-card--hasImage__col",
  Paragraph = "post-card__paragraph",
}

interface PostCardProps {
  post: PostTypes;
  route: string;
  children?: any;
  showImage?: boolean;
  hoverable?: boolean;
  limit?: boolean;
  showViewButton?: boolean;
}

export default function PostCard({
  post,
  children,
  showImage,
  hoverable,
  route,
  limit,
  showViewButton,
}: PostCardProps) {
  const history = useHistory();

  return (
    <Card
      className={showImage ? "post-card post-card--hasImage " : BEM.Card}
      hoverable={hoverable}
      title={
        <Title level={4} className={BEM.Title}>
          {post.title}
        </Title>
      }
    >
      {showImage && <Image src={post.image} alt={post.title} />}

      <div className={showImage ? BEM.Col : ""}>
        <Text>
          <CalendarOutlined /> {post.createdAt}
        </Text>

        <Col>
          <Paragraph className={limit ? BEM.Paragraph : ""}>
            {post.content}
          </Paragraph>

          {showViewButton && (
            <Button onClick={() => history.push(`${route}/${post.id}`)}>
              View post
            </Button>
          )}
        </Col>
      </div>
      {children}
    </Card>
  );
}
