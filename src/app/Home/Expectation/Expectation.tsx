import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  LineChartOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import Technology from "../Technology/Technology";

const { Title, Paragraph } = Typography;

enum BEM {
  Icon = "home-expectation-icon",
  Column = "home-expectation__col",
}

export default function Expectation() {
  return (
    <Row className="default home-expectation">
      <Col className={BEM.Column} span={24}>
        <Title level={2}>What you'll expect from me</Title>
        <Technology />
      </Col>
      <Row gutter={[16, 16]}>
        <Col md={8}>
          <Card hoverable>
            <ScheduleOutlined className={BEM.Icon} />
            <Title level={4}>Work and Learning</Title>
            <Paragraph>
              Learning new technologies will be handled on my own time, working
              is a separate issue.
            </Paragraph>
          </Card>
        </Col>
        <Col md={8}>
          <Card hoverable>
            <ThunderboltOutlined className={BEM.Icon} />
            <Title level={4}>Fast turnover</Title>
            <Paragraph>
              I will ensure the quality, and speed are top notch. No more, no
              less.
            </Paragraph>
          </Card>
        </Col>
        <Col md={8}>
          <Card hoverable>
            <LineChartOutlined className={BEM.Icon} />
            <Title level={4}>Focus on one</Title>
            <Paragraph>
              One job rules them all. I'll focus on one job, one position, that
              provides more security.
            </Paragraph>
          </Card>
        </Col>
      </Row>
    </Row>
  );
}
