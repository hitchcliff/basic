import { Dispatch } from "@reduxjs/toolkit";
import { ProjectTypes } from "../../component/PostCard/types";
import { updateProject } from "../../features/Project/project.slice";
import { projectRef, storage } from "../../firebase";

export default async function UpdateProject(
  project: ProjectTypes | {},
  id: string,
  dispatch: Dispatch
) {
  try {
    const edittedProject = project as ProjectTypes;
    let newProject; // contains the editted project

    if (typeof edittedProject.image !== "string") {
      const image = await storage
        .ref()
        .child("project images")
        .child(edittedProject.user.uid)
        .child(edittedProject.image.name)
        .put(edittedProject.image);

      const imageURL: File = await image.ref.getDownloadURL();

      newProject = {
        ...edittedProject,
        image: imageURL,
      } as ProjectTypes;
    } else {
      newProject = {
        ...edittedProject,
      } as ProjectTypes;
    }

    await projectRef.doc(id).update(newProject);

    dispatch(updateProject(newProject));
  } catch (error) {
    console.error("updating project", error);
  }
}
