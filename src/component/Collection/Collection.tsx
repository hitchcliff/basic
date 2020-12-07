import { Col, Input, Row, Typography } from "antd";
import React from "react";
import { PostCard } from "../../component";
import { PostTypes } from "../PostCard/types";

const { Search } = Input;
const { Title } = Typography;

enum BEM {
  Col = "collection-col",
  Cards = "collection-content--cards",
  Header = "collection-content--header",
  Search = "collection-search",
}

interface CollectionProps {
  data: PostTypes;
  title: string;
  handleSearch: (e: string) => void;
  route: string;
}

export default function Collection({
  data,
  title,
  handleSearch,
  route,
}: CollectionProps) {
  return (
    <Row className="default collection ">
      <Row className={BEM.Header}>
        <Col>
          <Search
            className={BEM.Search}
            placeholder="Looking for something?"
            enterButton
            onSearch={handleSearch}
          />
        </Col>
        <Col>
          <Title level={2}>{title}</Title>
        </Col>
      </Row>
      <Row className={BEM.Cards}>
        <Col className={BEM.Col}>
          <PostCard post={data} showImage route={route} />
        </Col>
      </Row>
    </Row>
  );
}
