import { Button, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import PostCard from "../../component/PostCard/PostCard";
import Add from "./Add";
import { useDispatch, useSelector } from "react-redux";
import { ProjectTypes } from "../../component/PostCard/types";
import { projectSelectAllSelector } from "../../features/Project/project.selectors";
import { fetchAllProjects } from "../../features/Project/project.thunk";
import useProjectService from "../Hooks/useProjectService";
import EditProject from "./EditProject";

enum BEM {
  Layout = "dashboard-posts",
  Form = "dashboard-posts__form",
  Content = "dashboard-posts__content",
  Cards = "dashboard-posts__content-card",
}

export default function Project() {
  const [editting, setEditting] = useState(false);
  const [currentEditId, setCurrentEditId] = useState<string>("");

  const { addProject, destroyProject } = useProjectService();

  const projects: ProjectTypes[] = useSelector(projectSelectAllSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, []);

  function handleClick(project: ProjectTypes) {
    addProject(project);
  }

  function handleEdit(id: string) {
    setEditting(true);
    setCurrentEditId(id);
  }

  return (
    <Row className={BEM.Layout} align="top">
      <Col md={8} className={BEM.Form} style={{ marginRight: "10px" }}>
        <Add title="Add a project" handleClick={handleClick} />
      </Col>

      {/* if edit, show `Edit` Component */}
      {/* if !edit, show `Col` Component */}
      {!editting ? (
        <Col md={16} className={BEM.Content}>
          {projects.map((project: ProjectTypes) => {
            return (
              <Row key={project.id} className={BEM.Cards}>
                <PostCard post={project}>
                  <Button
                    className="delete-button"
                    onClick={() => destroyProject(project.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="update-button"
                    onClick={() => handleEdit(project.id)}
                  >
                    Update
                  </Button>
                </PostCard>
              </Row>
            );
          })}
        </Col>
      ) : (
        <EditProject handleClick={setEditting} projectid={currentEditId} />
      )}
    </Row>
  );
}
