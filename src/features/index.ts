import { postSlice } from "./Post/post.slice";
import { projectSlice } from "./Project/project.slice";
import { userSlice } from "./User/user.slice";

export const rootReducer = {
  blog: postSlice.reducer,
  work: projectSlice.reducer,
  people: userSlice.reducer,
};
