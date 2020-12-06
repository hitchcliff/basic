import React from "react";
import { Row, Col, Typography, Button, Image } from "antd";
import Face from "../../../assets/kevinnacario.webp";

const { Title, Text } = Typography;

enum BEM {
  Default = "default",
  Layout = "home-showcase",
  Image = "home-showcase__image",
}

export default function Showcase() {
  return (
    <Row
      gutter={[16, 16]}
      className="default home-showcase"
      justify="space-between"
      align="middle"
    >
      <Col md={12}>
        <Title level={1}>
          Hi, my name is Kevin and I'm a Frontend Developer.
        </Title>
        <Text>
          My name is Kevin Keans Nacario, you can call me Kevin. I’m 22 years
          old. I’m a self-taught Frontend Developer. I graduated in the year of
          2019-2020, Bachelor of Science Electronics Computer Technology major
          in Communication.
        </Text>
        <Col>
          <Button className="primary">Download CV</Button>
          <Button type="link" href="!#">
            View online
          </Button>
        </Col>
      </Col>
      <Col md={8}>
        <Image src={Face} alt="Kevin Nacario" className={BEM.Image} />
      </Col>
    </Row>
  );
}
