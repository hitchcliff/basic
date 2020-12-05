import {
  FirebaseFirestore,
  CollectionReference,
} from "@firebase/firestore-types";
import { Dispatch } from "@reduxjs/toolkit";
import Store from "../../Store";
import { PostTypes } from "../../component/PostCard/types";
import { addPost, addPosts } from "../../features/Post/post.slice";
import { storage } from "../../firebase";

export default class BlogService {
  private db: FirebaseFirestore;
  public postRef: CollectionReference;
  private dispatch: Dispatch = Store.dispatch;
  private storage: any = storage;

  constructor(db: FirebaseFirestore) {
    this.db = db;
    this.postRef = this.db.collection("posts");
  }

  async fetchPosts() {
    const snapshot = await this.postRef.get();
    const docs = snapshot.docs.map((doc) => {
      const data = doc.data() as PostTypes;
      return {
        id: doc.id,
        title: data.title,
        content: data.content,
        createdAt: data.createdAt,
        image: data.image,
        user: {
          uid: data.user.uid,
          name: data.user.name,
        },
      };
    });

    this.dispatch(addPosts(docs));
  }

  async addPost(post: PostTypes) {
    const docRef = await this.postRef.add(post);
    const snapshot = await docRef.get();
    const data = snapshot.data() as PostTypes;

    //adding image to storage bucket and returning the actual ref
    // const imageRef = await this.storage
    //   .ref()
    //   .child("images")
    //   .child("test uid of user")
    //   .child(post.image.originFileObj.name)
    //   .put(post.image.originFileObj);
    // const imageURL = imageRef.ref.getDownloadURL;
    // console.log(imageURL);
    console.log(post.image);

    // this.dispatch(
    //   addPost({
    //     id: snapshot.id,
    //     title: data.title,
    //     content: data.content,
    //     createdAt: data.createdAt,
    //     image: imageURL,
    //     user: {
    //       uid: data.user.uid,
    //       name: data.user.name,
    //     },
    //   })
    // );
  }
}
