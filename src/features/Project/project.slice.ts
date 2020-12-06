import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ProjectTypes } from "../../component/PostCard/types";
import { fetchAllProjects } from "./project.thunk";

export const projectAdapter = createEntityAdapter<ProjectTypes>({
  selectId: (item) => item.id,
});

const initialState = {
  project: projectAdapter.getInitialState({
    loading: false,
  }),
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, { payload }: PayloadAction<ProjectTypes>) => {
      projectAdapter.addOne(state.project, payload);
    },
    destroyProject: (state, { payload }: PayloadAction<string>) => {
      projectAdapter.removeOne(state.project, payload);
    },
    updateProject: (state, { payload }: PayloadAction<ProjectTypes>) => {
      projectAdapter.updateOne(state.project, {
        id: payload.id,
        changes: payload,
      });
    },
  },
  extraReducers: {
    [fetchAllProjects.fulfilled.toString()]: (state, payload) => {
      projectAdapter.addMany(state.project, payload);
    },
    [fetchAllProjects.pending.toString()]: (state) => {
      state.project.loading = true;
    },
    [fetchAllProjects.rejected.toString()]: (state) => {
      state.project.loading = false;
    },
  },
});

export const {
  addProject,
  destroyProject,
  updateProject,
} = projectSlice.actions;
