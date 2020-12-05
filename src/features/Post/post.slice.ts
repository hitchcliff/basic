import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { PostTypes } from "../../component/PostCard/types";

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
    addPosts: (state, { payload }: PayloadAction<PostTypes[]>) => {
      postAdapter.addMany(state.posts, payload);
    },
  },
});

export const { addPost, addPosts } = postSlice.actions;
