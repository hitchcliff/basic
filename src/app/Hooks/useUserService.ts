import UserService from "../../api/UserService/UserService";

export default function useUserService() {
  return new UserService();
}
