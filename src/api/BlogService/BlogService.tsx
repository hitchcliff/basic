import { PostTypes } from "../../component/PostCard/types";
import AddPosts from "./AddPost";
import FetchPosts from "./FetchPosts";
import DestroyPost from "./DestroyPost";
import { Dispatch } from "@reduxjs/toolkit";
import Store from "../../Store";

export default class BlogService {
  private dispatch: Dispatch;

  constructor() {
    this.dispatch = Store.dispatch;
  }

  fetchPosts() {
    return FetchPosts();
  }

  addPost(posts: PostTypes) {
    return AddPosts(posts, this.dispatch);
  }

  destroyPost(id: string) {
    return DestroyPost(id, Store.dispatch);
  }
}
