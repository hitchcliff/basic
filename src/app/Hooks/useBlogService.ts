import { useMemo } from "react";
import BlogService from "../../api/BlogService/BlogService";

export default function useBlogService() {
  return new BlogService();
}
