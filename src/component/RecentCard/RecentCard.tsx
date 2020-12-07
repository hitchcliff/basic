import { Card, Col, Image, Row, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

enum BEM {
  Layout = "recent-post",
  Recent = "recent-post__recent",
  Heading = "recent-post__heading",
  Title = "recent-post-card__title",
  Text = "recent-post-card__text",
  Image = "recent-post-card__image",
}

interface RecentCardProps {
  recent: { image: string; title: string; paragraph: string };
}

export default function RecentCard({ recent }: RecentCardProps) {
  return (
    <Card className={BEM.Layout}>
      <Row className={BEM.Recent}>
        <Col>
          <Image className={BEM.Image} src={recent.image} />
        </Col>
        <Col>
          <Title className={BEM.Title} level={4}>
            {recent.title}
          </Title>
          <Paragraph>{recent.paragraph}</Paragraph>
        </Col>
      </Row>
    </Card>
  );
}
