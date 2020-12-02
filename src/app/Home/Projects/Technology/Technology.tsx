import React from "react";
import { Card, Col, Image, Row, Typography } from "antd";
import react from "../../../../assets/react.png";
import redux from "../../../../assets/redux.png";
import ts from "../../../../assets/ts.png";
import jest from "../../../../assets/jest.png";

const { Title, Text } = Typography;

export default function Technology() {
  return (
    <Row gutter={[16, 16]} className="default home-technology">
      <Col md={9}>
        <Image src={react} alt="react" />
        <Image src={redux} alt="redux" />
        <Image src={ts} alt="ts" />
        <Image src={jest} alt="jest" />
      </Col>
      <Col md={9}>
        <Card>
          <Title level={2}>
            These are ones of the technologies that I used daily.
          </Title>
        </Card>
      </Col>
      <Col md={6}>These are ones of the technologies that I used daily.</Col>
    </Row>
  );
}
