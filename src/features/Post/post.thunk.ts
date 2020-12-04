import { createAsyncThunk } from "@reduxjs/toolkit";
import useBlogService from "../../app/Hooks/useBlogService";

export const fetchAllPosts = createAsyncThunk(
  "post/fetchAllposts",
  async (_) => {
    const blogService = useBlogService();
    console.log(blogService);
    return blogService.fetchPosts();
  }
);
