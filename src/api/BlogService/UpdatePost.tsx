import { Dispatch } from "@reduxjs/toolkit";
import { PostTypes } from "../../component/PostCard/types";
import { updatePost } from "../../features/Post/post.slice";
import { postRef, storage } from "../../firebase";

export default async function UpdatePost(
  post: PostTypes | {},
  id: string,
  dispatch: Dispatch
) {
  try {
    const edittedPost = post as PostTypes;
    let newPost; // contains the edited post

    // check if there is new uploaded image
    if (typeof edittedPost.image !== "string") {
      console.log("not string");

      const image = await storage
        .ref()
        .child("post images")
        .child(edittedPost.user.uid)
        .child(edittedPost.image.name)
        .put(edittedPost.image);

      const imageURL: File = await image.ref.getDownloadURL();

      newPost = {
        ...edittedPost,
        image: imageURL,
      };
    } else {
      console.log("string");

      newPost = {
        ...edittedPost,
      } as PostTypes;
    }

    await postRef.doc(id).update(newPost);

    dispatch(updatePost(newPost));
  } catch (error) {
    console.error("updating post ", error);
  }
}
