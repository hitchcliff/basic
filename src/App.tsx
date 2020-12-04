import { Layout } from "antd";
import React from "react";
import "./App.scss";
import {
  Navigation,
  Home,
  SinglePost,
  SingleProject,
  Dashboard,
  Blog,
  Projects,
  Footer,
} from "./app/index";

const { Content } = Layout;

function App() {
  return (
    <>
      <Navigation />
      <Projects />
      {/* <Blog /> */}
      {/* <SinglePost /> */}
      {/* <SingleProject /> */}
      {/* <Home /> */}
      {/* <Dashboard /> */}
      <Footer />
    </>
  );
}

export default App;
