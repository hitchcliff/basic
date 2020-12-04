import { Layout } from "antd";
import React from "react";
import "./App.scss";
import Footer from "./app/Footer/Footer";
import {
  Home,
  Navigation,
  SinglePost,
  SingleProject,
  Dashboard,
} from "./app/index";

const { Content } = Layout;

function App() {
  return (
    <>
      <Navigation />
      {/* <SinglePost /> */}
      <SingleProject />
      {/* <Home /> */}
      {/* <Dashboard /> */}
      <Footer />
    </>
  );
}

export default App;
