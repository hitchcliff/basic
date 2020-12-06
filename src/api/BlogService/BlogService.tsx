import { PostTypes } from "../../component/PostCard/types";
import Store from "../../Store";
import AddPosts from "./AddPost";
import FetchPosts from "./FetchPosts";
import DestroyPost from "./DestroyPost";
import EditPost from "./EditPost";

export default class BlogService {
  fetchPosts() {
    return FetchPosts();
  }

  addPost(post: PostTypes) {
    return AddPosts(post, Store.dispatch);
  }

  editPost(post: PostTypes) {
    return EditPost(post);
  }

  destroyPost(id: string) {
    return DestroyPost(id, Store.dispatch);
  }
}
