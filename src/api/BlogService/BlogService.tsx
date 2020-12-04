import React from "react";
import {
  FirebaseFirestore,
  CollectionReference,
} from "@firebase/firestore-types";
import { Dispatch } from "@reduxjs/toolkit";
import Store from "../../Store";
import { PostTypes } from "../../component/PostCard/types";

export default class BlogService {
  private db: FirebaseFirestore;
  private dispatch: Dispatch = Store.dispatch;
  public postRef: CollectionReference;

  constructor(db: FirebaseFirestore) {
    this.db = db;
    this.postRef = this.db.collection("posts");
  }

  async fetchPosts() {
    try {
      const snapshot = await this.postRef.get();
      return snapshot.docs.map((doc) => {
        const data = doc.data() as PostTypes;
        return {
          id: doc.id,
          title: data.title,
          content: data.content,
          createdAt: data.createdAt,
          image: data.image,
          user: {
            id: data.user.uid,
            name: data.user.name,
          },
        };
      });
    } catch (error) {
      console.error(error);
    }
  }
}
