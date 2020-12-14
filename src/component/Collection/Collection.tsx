import { Col, Row, Typography } from "antd";
import React from "react";
import { PostCard } from "../../component";
import { PostTypes, ProjectTypes } from "../PostCard/types";

const { Title } = Typography;

enum BEM {
  Col = "collection-col",
  Cards = "collection-content--cards",
  Header = "collection-content--header",
  Search = "collection-search",
}

interface CollectionProps {
  data: any | PostTypes[] | ProjectTypes[];
  title: string;
  route: string;
}

export default function Collection({ data, title, route }: CollectionProps) {
  return (
    <Row className="default collection ">
      <Row className={BEM.Header}>
        <Col>
          <Title level={2}>{title}</Title>
        </Col>
      </Row>
      <div className={BEM.Cards}>
        {data.map((item: any) => {
          return (
            <div key={item.id} className={BEM.Col}>
              <PostCard
                post={item}
                showImage
                route={route}
                showViewButton
                limit
              />
            </div>
          );
        })}
      </div>
    </Row>
  );
}
