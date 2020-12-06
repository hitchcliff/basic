import { postSlice } from "./Post/post.slice";
import { projectSlice } from "./Project/project.slice";

export const rootReducer = {
  blog: postSlice.reducer,
  work: projectSlice.reducer,
};
