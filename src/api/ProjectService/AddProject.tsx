import { Dispatch } from "@reduxjs/toolkit";
import { ProjectTypes } from "../../component/PostCard/types";
import { projectRef, storage } from "../../firebase";
import { DocumentData } from "@firebase/firestore-types";
import { addProject } from "../../features/Project/project.slice";

export default async function AddProject(
  project: ProjectTypes,
  dispatch: Dispatch
) {
  try {
    const image = await storage
      .ref()
      .child("featured images")
      .child(project.user.uid)
      .child(project.image.name)
      .put(project.image);

    const imageURL: File = await image.ref.getDownloadURL();

    const newProject = {
      ...project,
      image: imageURL,
    } as ProjectTypes;

    const docRef = await projectRef.add(newProject);
    const snapshot = (await docRef.get()) as DocumentData;
    const data = snapshot.data() as ProjectTypes;

    dispatch(
      addProject({
        id: snapshot.id,
        title: data.title,
        content: data.content,
        createdAt: data.createdAt,
        image: imageURL,
        demo: data.demo,
        user: {
          uid: data.user.uid,
          name: data.user.name,
        },
      })
    );
  } catch (error) {
    console.error("adding a project", error);
  }
}
