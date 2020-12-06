import { PostTypes } from "../../component/PostCard/types";
import Store from "../../Store";
import AddPosts from "./AddPost";
import FetchPosts from "./FetchPosts";
import DestroyPost from "./DestroyPost";
import UpdatePost from "./UpdatePost";

export default class BlogService {
  fetchPosts() {
    return FetchPosts();
  }

  addPost(post: PostTypes) {
    return AddPosts(post, Store.dispatch);
  }

  editPost(post: PostTypes | {}, id: string) {
    return UpdatePost(post, id, Store.dispatch);
  }

  destroyPost(post: PostTypes) {
    return DestroyPost(post, Store.dispatch);
  }
}
