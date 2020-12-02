import React from "react";
import { Col, Divider, Image, Row, Typography } from "antd";
import Image1 from "../../../logo.svg";
import Technology from "./Technology/Technology";

const { Title, Paragraph, Text } = Typography;

enum BEM {
  Meta = "home-projects-meta",
}

export default function Projects() {
  return (
    <Row gutter={[16, 16]} className="default home-projects">
      <Title level={5}>Featured works</Title>
      <Col span={24}>
        <Row>
          <Col md={5}>
            <Image src={Image1} />
          </Col>
          <Col md={19}>
            <Title level={3}>Awesome person</Title>
            <Text className={BEM.Meta}>Nov, 27 2020</Text>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              officia dolores cumque aut sapiente nisi molestias expedita at
              adipisci eos.
            </Paragraph>
          </Col>
          <Divider />
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col md={5}>
            <Image src={Image1} />
          </Col>
          <Col md={19}>
            <Title level={3}>Awesome person</Title>
            <Text className={BEM.Meta}>Nov, 27 2020</Text>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              officia dolores cumque aut sapiente nisi molestias expedita at
              adipisci eos.
            </Paragraph>
          </Col>
          <Divider />
        </Row>
      </Col>
      <Col span={24}>
        <Row>
          <Col md={5}>
            <Image src={Image1} />
          </Col>
          <Col md={19}>
            <Title level={3}>Awesome person</Title>
            <Text className={BEM.Meta}>Nov, 27 2020</Text>
            <Paragraph>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              officia dolores cumque aut sapiente nisi molestias expedita at
              adipisci eos.
            </Paragraph>
          </Col>
          <Divider />
        </Row>
      </Col>
      <Technology />
    </Row>
  );
}
