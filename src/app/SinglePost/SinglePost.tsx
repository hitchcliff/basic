import React from "react";
import { Single } from "../../component";
import { useRouteMatch } from "react-router-dom";
import { Direction } from "../../App.types";
import { RootState } from "../../Store";
import {
  postSelectAllSelector,
  postSelector,
} from "../../features/Post/post.selector";
import { useSelector } from "react-redux";

export default function SinglePost() {
  const match = useRouteMatch(`/${Direction.SinglePost}`);
  const postid = match.params.postid;
  const post: any = useSelector((state: RootState) =>
    postSelector.selectById(state, postid)
  );

  const posts = useSelector(postSelectAllSelector);

  return <Single data={post} recent={posts} />;
}
