import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Direction } from "../../App.types";
import Collection from "../../component/Collection/Collection";
import { postSelectAllSelector } from "../../features/Post/post.selector";
import { fetchAllPosts } from "../../features/Post/post.thunk";

export default function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector(postSelectAllSelector);

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch]);

  return <Collection data={posts} title="Blog" route={Direction.Blog} />;
}
