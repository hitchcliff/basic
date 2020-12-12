import React from "react";
import { Col, Divider, Image, Row, Typography } from "antd";
import { CalendarOutlined, EditOutlined } from "@ant-design/icons";
import { PostTypes, ProjectTypes } from "../PostCard/types";

const { Title, Text, Paragraph } = Typography;

enum BEM {
  Layout = "single",
  Related = "single-related",
  Image = "single-image",
  Meta = "single-meta",
  Comments = "single-comments",
  Heading = "single__heading",
  Text = "single__text",
  Icon = "single--meta__icon",
}

interface SingleProps {
  data: PostTypes | ProjectTypes;
  recent: PostTypes[] | ProjectTypes[] | any;
}

export default function Single({ data, recent }: SingleProps) {
  return (
    <Row className="default single" gutter={[16, 16]} justify="space-between">
      <Col style={{ display: "flex", flexDirection: "column" }} span={24}>
        <Image className={BEM.Image} src={data.image} />
        <Row className={BEM.Meta}>
          <Title className={BEM.Heading}>{data.title}</Title>
          <Text className={BEM.Text}>
            <CalendarOutlined /> {data.createdAt}
            <EditOutlined /> <b>{data.user.name}</b>
          </Text>
        </Row>
        <Divider />
        <Paragraph style={{ whiteSpace: "pre-line" }}>{data.content}</Paragraph>
      </Col>
      {/* <Comments>Yeep</Comments> */}
    </Row>
  );
}
