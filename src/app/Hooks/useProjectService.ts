import ProjectService from "../../api/ProjectService/ProjectService";

export default function useProjectService() {
  return new ProjectService();
}
