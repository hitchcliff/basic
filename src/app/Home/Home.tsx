import React from "react";
import { Button, Col, Image, Layout, Row, Typography } from "antd";
import Showcase from "./Showcase/Showcase";
import News from "./News/News";
import Projects from "./Projects/Projects";

enum BEM {
  Home = "home",
}

export default function Home() {
  return (
    <Layout className={BEM.Home}>
      <Showcase />
      <News />
      <Projects />
    </Layout>
  );
}
