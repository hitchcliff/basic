import { Dispatch } from "@reduxjs/toolkit";
import { PostTypes } from "../../component/PostCard/types";
import { addPost } from "../../features/Post/post.slice";
import { postRef, storage } from "../../firebase";
import { DocumentData } from "@firebase/firestore-types";
import { useSelector } from "react-redux";
import { userSelectAllSelector } from "../../features/User/user.selector";

export default async function AddPosts(post: PostTypes, dispatch: Dispatch) {
  try {
    const image = await storage
      .ref()
      .child("post images")
      .child(post.user.uid)
      .child(post.image.name)
      .put(post.image);

    // image url
    const imageURL: File = await image.ref.getDownloadURL();

    const newPost = {
      ...post,
      image: imageURL,
    } as PostTypes;

    const docRef = await postRef.add(newPost);
    const snapshot = (await docRef.get()) as DocumentData;
    const data = snapshot.data() as PostTypes;

    dispatch(
      addPost({
        id: snapshot.id,
        title: data.title,
        content: data.content,
        createdAt: data.createdAt,
        image: imageURL,
        user: {
          uid: data.user.uid,
          name: data.user.name,
        },
      })
    );
  } catch (error) {
    console.error("adding a post ", error);
  }
}
