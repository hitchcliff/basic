import { Row, Spin } from "antd";
import React, { CSSProperties } from "react";

const style: CSSProperties = {
  minHeight: "100vh",
};

export default function Loading() {
  return (
    <Row style={style} align="middle" justify="center">
      <Spin delay={300} />
    </Row>
  );
}
