import { ProjectTypes } from "../../component/PostCard/types";
import Store from "../../Store";
import FetchProjects from "./FetchProjects";
import AddProject from "./AddProject";
import UpdateProject from "./UpdateProject";
import DestroyProject from "./DestroyProject";

export default class ProjectService {
  fetchProjects() {
    return FetchProjects();
  }

  addProject(project: ProjectTypes) {
    return AddProject(project, Store.dispatch);
  }

  destroyProject(id: string) {
    return DestroyProject(id, Store.dispatch);
  }

  editProject(project: ProjectTypes | {}, id: string) {
    console.log(project);
    return UpdateProject(project, id, Store.dispatch);
  }
}
