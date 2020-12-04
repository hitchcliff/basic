import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../Store";
import { postAdapter } from "./post.slice";

export const postSelector = postAdapter.getSelectors(
  (state: RootState) => state.blog.posts
);

// select all posts
export const postSelectAllSelector = createSelector(
  postSelector.selectAll,
  (posts) => posts
);
