import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import AddPost from "./AddPost";

const { Title, Text, Paragraph } = Typography;

export default function Posts() {
  return (
    <Row gutter={20} justify="start" align="top">
      <Col md={7} style={{ marginRight: "20px" }}>
        <AddPost />
      </Col>
      <Col md={15}>
        <Row>
          <Col md={8}>
            <Card>
              <Title level={4}>First posts</Title>
              <Text>Feb. 6, 1998</Text>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                quidem itaque libero tempore vero exercitationem alias
                consequuntur quaerat nemo est.
              </Paragraph>
              <Button className="delete-button">Delete</Button>
              <Button className="update-button">Update</Button>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
