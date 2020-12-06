import { Dispatch } from "@reduxjs/toolkit";
import { removePost } from "../../features/Post/post.slice";
import { postRef } from "../../firebase";

export default async function DestroyPost(id: string, dispatch: Dispatch) {
  try {
    await postRef.doc(id).delete();
    dispatch(removePost(id));
  } catch (error) {
    console.log("deleting a post ", error);
  }
}
