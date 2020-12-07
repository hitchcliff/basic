import { ProjectTypes } from "../../component/PostCard/types";
import { projectRef } from "../../firebase";

export default async function FetchProjects() {
  try {
    const snapshot = await projectRef.get();
    const docs = snapshot.docs.map((doc: any) => {
      const data = doc.data() as ProjectTypes;
      return {
        id: doc.id,
        title: data.title,
        content: data.content,
        createdAt: data.createdAt,
        image: data.image,
        demo: data.demo,
        user: {
          uid: data.user.uid,
          name: data.user.name,
        },
      };
    });

    return docs;
  } catch (error) {
    console.log("fetching projects", error);
  }
}
