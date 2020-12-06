import { Dispatch } from "@reduxjs/toolkit";
import { PostTypes } from "../../component/PostCard/types";
import { removePost } from "../../features/Post/post.slice";
import { postRef, storage } from "../../firebase";

export default async function DestroyPost(post: PostTypes, dispatch: Dispatch) {
  try {
    //deleting the doc
    await postRef.doc(post.id).delete();

    if (post.image) {
      await storage.refFromURL(post.image).delete();
    }

    dispatch(removePost(post.id));
  } catch (error) {
    console.log("deleting a post ", error);
  }
}
