import { Dispatch } from "@reduxjs/toolkit";
import { destroyProject } from "../../features/Project/project.slice";
import { projectRef } from "../../firebase";

export default async function DestroyProject(id: string, dispatch: Dispatch) {
  try {
    await projectRef.doc(id).delete();
    dispatch(destroyProject(id));
  } catch (error) {
    console.log("deleting a project", error);
  }
}
