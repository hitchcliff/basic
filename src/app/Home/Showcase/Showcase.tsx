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
          Hi, my name is Kevin, I'm a Self-taught Frontend, and Jr. Fullstack
          Dev.
        </Title>
        <Text>
          I can build fullstack applications with Laravel, Firebase, and NodeJS
          as well. I use React as my main JS framework and was able to use
          different technology along the way.
        </Text>
        <Col>
          <Button className="primary">
            <a href="https://drive.google.com/u/1/uc?id=1SXz7rQwzIXjYl2S9624F67W15vb3BKCt&export=download">
              Download CV
            </a>
          </Button>
          <Button
            type="link"
            href="https://drive.google.com/file/d/1SXz7rQwzIXjYl2S9624F67W15vb3BKCt/view?usp=sharing"
          >
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
