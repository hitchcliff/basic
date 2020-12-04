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
  },
  extraReducers: {},
});

console.log(fetchAllPosts());

export const { addPost } = postSlice.actions;
