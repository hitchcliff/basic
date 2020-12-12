import React from "react";
import { Layout } from "antd";
import Showcase from "./Showcase/Showcase";
import News from "./News/News";
import Projects from "./Projects/Projects";
import Expectation from "./Expectation/Expectation";

enum BEM {
  Home = "home",
}

export default function Home() {
  return (
    <Layout className={BEM.Home}>
      <Showcase />
      <Projects />
      <Expectation />
      <News />
    </Layout>
  );
}
