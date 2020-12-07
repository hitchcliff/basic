import React from "react";
import { useSelector } from "react-redux";
import { Direction } from "../../App.types";
import { Single } from "../../component";
import {
  projectSelectAllSelector,
  projectSelector,
} from "../../features/Project/project.selectors";
import { RootState } from "../../Store";
import { useRouteMatch } from "react-router-dom";

export default function SingleProject() {
  const match = useRouteMatch(`/${Direction.SingleProject}`);
  const projectid = match.params.projectid;
  const project: any = useSelector((state: RootState) =>
    projectSelector.selectById(state, projectid)
  );

  const projects = useSelector(projectSelectAllSelector);

  return <Single data={project} recent={projects} />;
}
