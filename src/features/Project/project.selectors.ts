import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../Store";
import { projectAdapter } from "./project.slice";

export const projectSelector = projectAdapter.getSelectors(
  (state: RootState) => state.work.project
);

// select all projects
export const projectSelectAllSelector = createSelector(
  projectSelector.selectAll,
  (project) => project
);
