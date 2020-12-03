import React from "react";
import { Card, Col, Image, Row, Typography } from "antd";
import react from "../../../assets/react.png";
import redux from "../../../assets/redux.png";
import ts from "../../../assets/ts.png";
import jest from "../../../assets/jest.png";

const { Title } = Typography;

enum BEM {
  Images = "home-technology-images",
  Title = "home-technology__title",
}

export default function Technology() {
  return (
    <Row gutter={[16, 16]} className="home-technology">
      <Col md={24} className={BEM.Images}>
        <Image src={react} alt="react" />
        <Image src={redux} alt="redux" />
        <Image src={ts} alt="ts" />
        <Image src={jest} alt="jest" />
      </Col>
    </Row>
  );
}
