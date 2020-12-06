import { createAsyncThunk } from "@reduxjs/toolkit";
import useProjectService from "../../app/Hooks/useProjectService";

export const fetchAllProjects = createAsyncThunk(
  "projects/fetchAllprojects",
  async () => {
    const projectService = useProjectService();
    return projectService.fetchProjects();
  }
);
