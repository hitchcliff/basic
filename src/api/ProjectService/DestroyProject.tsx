import { Dispatch } from "@reduxjs/toolkit";
import { ProjectTypes } from "../../component/PostCard/types";
import { destroyProject } from "../../features/Project/project.slice";
import { projectRef, storage } from "../../firebase";

export default async function DestroyProject(
  project: ProjectTypes,
  dispatch: Dispatch
) {
  try {
    await projectRef.doc(project.id).delete();

    if (project.image) {
      await storage.refFromURL(project.image).delete();
    }

    dispatch(destroyProject(project.id));
  } catch (error) {
    console.log("deleting a project", error);
  }
}
