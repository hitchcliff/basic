import { Layout } from "antd";
import React from "react";
import "./App.scss";
import Footer from "./app/Footer/Footer";
import { Home, Navigation, Single, Dashboard } from "./app/index";

const { Content } = Layout;

function App() {
  return (
    <>
      <Navigation />
      <Single />
      {/* <Home /> */}
      {/* <Dashboard /> */}
      <Footer />
    </>
  );
}

export default App;
