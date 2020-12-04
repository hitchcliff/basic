import { postSlice } from "./Post/post.slice";

export const rootReducer = {
  blog: postSlice.reducer,
};
