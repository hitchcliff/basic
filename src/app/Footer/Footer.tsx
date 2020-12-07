import {
  FacebookOutlined,
  GithubOutlined,
  GooglePlusOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Col, Row, Typography } from "antd";
import { Content } from "antd/lib/layout/layout";
import React from "react";

const { Title, Text } = Typography;

enum BEM {
  Footer = "footer",
  Text = "footer--text",
  Title = "footer--title",
  Header = "footer--header",
  Icons = "footer__icons",
}

export default function Footer() {
  return (
    <Row className={BEM.Footer}>
      <Col md={8}>
        <Title className={BEM.Footer + "__title"} level={5}>
          ENJOY YOUR DAY.
        </Title>
        <Text className={BEM.Footer + "__text"}>
          Thank you so much for your time! &copy; Kevin Nacario 2020
        </Text>
      </Col>
      <Col md={16}>
        <Title className={BEM.Header} level={2}>
          I'm determined, inspired to build new things, and surpass my limits.
          Contact me, I can hit the ground running.
        </Title>
        <Row>
          <Col md={12}>
            <Title className={BEM.Title} level={5}>
              Send me an email
            </Title>
            <Text className={BEM.Text}>hitchcliff123@gmail.com</Text> <br />
            <Text className={BEM.Text}>+63 926 833 9430</Text>
          </Col>
          <Col md={12}>
            <Content>
              <a href="https://www.facebook.com/notkev1n/">
                <FacebookOutlined className={BEM.Icons} />
              </a>
              <a href="https://github.com/hitchcliff">
                <GithubOutlined className={BEM.Icons} />
              </a>
              <a href="https://www.linkedin.com/in/kevin-nacario-57485718a/">
                <LinkedinOutlined className={BEM.Icons} />
              </a>
              <a href="https://twitter.com/ilimitado7">
                <TwitterOutlined className={BEM.Icons} />
              </a>
            </Content>
            <Title className={BEM.Title} level={5}>
              Get in touch, I'll reply within 24 hours.
            </Title>
          </Col>
        </Row>
        <Title className={BEM.Title + "--quote"} level={5}>
          “Let I take you, into a deeper experience, make a moment a lasting
          conveyable memory. Let me help build your tribe.” ― Deep Immersion
        </Title>
      </Col>
    </Row>
  );
}
