import React, { useState } from "react";
import {
  Avatar,
  Carousel,
  Col,
  Comment,
  Divider,
  Image,
  Row,
  Typography,
} from "antd";
import { RecentCard } from "..";
import {
  CalendarOutlined,
  EditOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { SingleTypes } from "./types";
import Editor from "./Editor";

const { Title, Text, Paragraph } = Typography;

enum BEM {
  Layout = "single",
  Related = "single-related",
  Image = "single-image",
  Meta = "single-meta",
  Heading = "single__heading",
  Text = "single__text",
  Icon = "single--meta__icon",
}

interface SingleProps {
  data: SingleTypes;
}

export default function Single({ data }: SingleProps) {
  const [onFinish, setOnFinish] = useState({
    message: "",
    submitting: false,
  });

  return (
    <Row className="default single" gutter={[16, 16]} justify="space-between">
      <Col style={{ display: "flex", flexDirection: "column" }} span={24}>
        <Image className={BEM.Image} src={data.image} />
        <Row className={BEM.Meta}>
          <Title className={BEM.Heading}>{data.title}</Title>
          <Text className={BEM.Text}>
            <CalendarOutlined /> {data.meta}
            <EditOutlined /> <b>{data.author}</b>
            <HeartOutlined className={BEM.Icon} />
          </Text>
        </Row>
        <Divider />
        <Paragraph>{data.content}</Paragraph>
      </Col>

      <Comment
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <Editor onFinish={setOnFinish} submitting={onFinish.submitting} />
        }
      />

      <Col span={24}>
        <Title level={4}>Recent posts</Title>
        <Row className={BEM.Related}>
          {data.recent.map((post, idx) => (
            <RecentCard key={idx} recent={post} />
          ))}
        </Row>
      </Col>
    </Row>
  );
}
