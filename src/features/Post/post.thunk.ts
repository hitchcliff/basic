import { createAsyncThunk } from "@reduxjs/toolkit";
import useBlogService from "../../app/Hooks/useBlogService";

export const fetchAllPosts = createAsyncThunk(
  "posts/fetchAllPosts",
  async () => {
    const blogService = useBlogService();
    return blogService.fetchPosts();
  }
);
