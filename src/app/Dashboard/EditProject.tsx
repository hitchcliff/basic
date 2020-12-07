import { Button, Form, Input, message, Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ImageUpload } from "../../component";
import { ProjectTypes } from "../../component/PostCard/types";
import { projectSelector } from "../../features/Project/project.selectors";
import { userSelectAllSelector } from "../../features/User/user.selector";
import { RootState } from "../../Store";
import useProjectService from "../Hooks/useProjectService";

const { Text } = Typography;

enum BEM {
  Form = "dashboard-post-edit",
}

interface EditProps {
  handleClick: (e: any) => void;
  projectid: string;
}

export default function EditProject({ handleClick, projectid }: EditProps) {
  const { editProject } = useProjectService();
  const [upload, setUpload] = useState<boolean>(false);
  const user = useSelector(userSelectAllSelector);

  const fetchProjectById:
    | ProjectTypes
    | undefined = useSelector((state: RootState) =>
    projectSelector.selectById(state, projectid)
  );
  const [updateProject, setUpdateProject] = useState<ProjectTypes | {}>({
    ...fetchProjectById,
  });
  const newProject = updateProject as ProjectTypes;

  function handleImageUpload(file: File) {
    setUpdateProject({
      ...updateProject,
      image: file,
    });
  }

  function handleSave() {
    if (user[0].uid === "ZFIqdze4pAMbzMGEaJzuSh1Q3vt1" && user[0].logged) {
      editProject(updateProject, projectid);
      handleClick(false);
    } else {
      handleClick(false);
      message.warning("Cannot save a project.");
    }
  }

  return (
    <Form className={BEM.Form} layout="horizontal">
      <Form.Item>
        <Text>Title</Text>
        <Input
          value={newProject.title}
          onChange={(e) =>
            setUpdateProject({ ...updateProject, title: e.currentTarget.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Text>Content</Text>
        <Input.TextArea
          value={newProject.content}
          onChange={(e) =>
            setUpdateProject({
              ...updateProject,
              content: e.currentTarget.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Text style={{ marginRight: "10px" }}>Upload Image</Text>
        {upload ? (
          <ImageUpload handleChange={handleImageUpload} />
        ) : (
          <Button onClick={() => setUpload(true)}>Upload</Button>
        )}
      </Form.Item>
      <Form.Item>
        <Button
          className="update-button"
          style={{ marginRight: "10px" }}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button className="delete-button" onClick={() => handleClick(false)}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
}
