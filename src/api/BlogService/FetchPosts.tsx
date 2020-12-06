import { PostTypes } from "../../component/PostCard/types";
import { postRef } from "../../firebase";

export default async function FetchPosts() {
  try {
    const snapshot = await postRef.get();
    const docs = snapshot.docs.map((doc: any) => {
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

    return docs;
  } catch (error) {
    console.log("fetching posts ", error);
  }
}
