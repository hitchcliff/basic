import React from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { HeartOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

enum BEM {
  Layout = "home-news",
  Heading = "home-news-title",
  Posts = "home-news__posts",
  Card = "home-news-card",
  Title = "home-news-card__title",
}

export default function News() {
  return (
    <Row className="default home-news">
      <Title level={5} className={BEM.Heading}>
        My recent posts
      </Title>
      <Row className={BEM.Posts}>
        <Col span={8}>
          <Card
            className={BEM.Card}
            hoverable
            title={
              <Title level={4} className={BEM.Title}>
                Title
                <Col className={`${BEM.Title}-col`}>
                  <HeartOutlined />
                  <Button href="!#">View post</Button>
                </Col>
              </Title>
            }
          >
            <Text>Feb. 6, 1998</Text>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              deserunt error perferendis cum illo? Repellat laudantium ex minus
              nemo quibusdam.
            </Paragraph>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            className="home-news-card"
            hoverable
            title={
              <Title level={4} className="home-news-card__title">
                Title<Button href="!#">View post</Button>
              </Title>
            }
          >
            <Text>Feb. 6, 1998</Text>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              deserunt error perferendis cum illo? Repellat laudantium ex minus
              nemo quibusdam.
            </Paragraph>
          </Card>
        </Col>

        <Col span={8}>
          <Card
            className="home-news-card"
            hoverable
            title={
              <Title level={4} className="home-news-card__title">
                Title<Button href="!#">View post</Button>
              </Title>
            }
          >
            <Text>Feb. 6, 1998</Text>
            <Paragraph>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
              deserunt error perferendis cum illo? Repellat laudantium ex minus
              nemo quibusdam.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Row>
  );
}
