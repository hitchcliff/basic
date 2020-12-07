import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Direction } from "../../App.types";
import Collection from "../../component/Collection/Collection";
import { projectSelectAllSelector } from "../../features/Project/project.selectors";
import { fetchAllProjects } from "../../features/Project/project.thunk";

export default function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector(projectSelectAllSelector);

  useEffect(() => {
    dispatch(fetchAllProjects());
  }, [dispatch]);

  return (
    <Collection data={projects} title="Projects" route={Direction.Projects} />
  );
}
