import { useMemo } from "react";
import BlogService from "../../api/BlogService/BlogService";
import { firestore } from "../../firebase";

export default function useBlogService() {
  return useMemo(() => new BlogService(firestore), [firestore]);
}
