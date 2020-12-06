import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { PostTypes } from "../../component/PostCard/types";
import { fetchAllPosts } from "./post.thunk";

export const postAdapter = createEntityAdapter<PostTypes>({
  selectId: (item) => item.id,
});

const initialState = {
  posts: postAdapter.getInitialState({
    loading: false,
  }),
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<PostTypes>) => {
      postAdapter.addOne(state.posts, payload);
    },
    removePost: (state, { payload }: PayloadAction<string>) => {
      postAdapter.removeOne(state.posts, payload);
    },
    updatePost: (state, { payload }: PayloadAction<PostTypes>) => {
      postAdapter.updateOne(state.posts, {
        id: payload.id,
        changes: payload,
      });
    },
  },
  extraReducers: {
    [fetchAllPosts.fulfilled.toString()]: (state, payload) => {
      postAdapter.addMany(state.posts, payload);
      state.posts.loading = false;
    },
    [fetchAllPosts.pending.toString()]: (state) => {
      state.posts.loading = true;
    },
    [fetchAllPosts.rejected.toString()]: (state) => {
      state.posts.loading = false;
    },
  },
});

export const { addPost, removePost, updatePost } = postSlice.actions;
