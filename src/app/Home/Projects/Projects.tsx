import React, { useEffect } from "react";
import { Button, Col, Divider, Image, Row, Typography } from "antd";
import { fetchAllProjects } from "../../../features/Project/project.thunk";
import { useDispatch, useSelector } from "react-redux";
import { projectSelectAllSelector } from "../../../features/Project/project.selectors";
import { ProjectTypes } from "../../../component/PostCard/types";
import { useHistory } from "react-router-dom";
import { Direction } from "../../../App.types";

const { Title, Paragraph, Text } = Typography;

enum BEM {
  Meta = "home-projects-meta",
  Content = "home-projects-row",
}

export default function Projects() {
  const dispatch = useDispatch();
  const projects: ProjectTypes[] = useSelector(projectSelectAllSelector);
  const history = useHistory();

  useEffect(() => {
    const req = setTimeout(() => {
      dispatch(fetchAllProjects());
    });
    return () => {
      clearTimeout(req);
    };
  }, [dispatch]);

  function handleClick(id: string) {
    history.push(`${Direction.Projects}/${id}`);
  }

  return (
    <Row gutter={[16, 16]} className="default home-projects">
      {projects.map((project) => {
        console.log(project.demo);
        return (
          <Col span={24}>
            <Row className={BEM.Content}>
              <Col span={24}>
                <Image src={project.image} />
              </Col>
              <Col md={24}>
                <Title level={3}>{project.title}</Title>
                <Text className={BEM.Meta}>{project.createdAt}</Text>
                <Paragraph>{project.content}</Paragraph>
                <div>
                  <Button
                    className="details-button"
                    onClick={() => handleClick(project.id)}
                  >
                    More details
                  </Button>
                  <Button className="demo-button" href={project.demo}>
                    Demo
                  </Button>
                </div>
              </Col>
              <Divider />
            </Row>
          </Col>
        );
      })}
    </Row>
  );
}
