import React from "react";
import { Comment } from "antd";
import { Comments } from "./types";

interface CommentsListProps {
  comments: Comments;
}
export default function CommentsList({ comments }: CommentsListProps) {
  return <Comment {...comments} />;
}
