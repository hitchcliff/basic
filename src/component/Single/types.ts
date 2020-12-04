import { ReactElement } from "react";

export interface SingleTypes {
  title: string;
  meta: string;
  author: string;
  content: string;
  image: string;
  recent: RecentTypes[];
}

export interface RecentTypes {
  title: string;
  image: string;
  paragraph: string;
}

export interface CommentTypes {
  message: string;
  submitting: boolean;
  comments: Comments[];
}

export interface Comments {
  author: string;
  avatar: string;
  content: ReactElement;
  datetime: Date | string | number;
}
