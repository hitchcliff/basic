import { Layout } from "antd";
import React from "react";
import "./App.scss";
import Dashboard from "./app/Dashboard/Dashboard";
import Footer from "./app/Footer/Footer";
import { Home } from "./app/index";
import Navigation from "./app/Navigation/Navigation";

const { Content } = Layout;

function App() {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Home /> */}
      <Dashboard />
      {/* <Footer /> */}
    </>
  );
}

export default App;
