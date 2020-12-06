import Password from "antd/lib/input/Password";
import { signIn, signOut } from "../../features/User/user.slice";
import { auth } from "../../firebase";
import Store from "../../Store";

export default class UserService {
  async signInUser(email: string, pass: string) {
    try {
      await auth.signInWithEmailAndPassword(email, pass);

      auth.onAuthStateChanged((user: any) => {
        Store.dispatch(
          signIn({ uid: user.uid, email: user.email, isGuess: false })
        );

        window.location.pathname = "/dashboard";
      });
    } catch (error) {
      console.error("signing in ", error);
    }
  }

  async signOutUser() {
    try {
      await auth.signOut();
      auth.onAuthStateChanged(() => {
        Store.dispatch(signOut());
        window.location.pathname = "/";
      });
    } catch (error) {
      console.error("signing out ", error);
    }
  }

  async signInGuess() {
    try {
      await auth.signInWithEmailAndPassword("guest@email.com", "123456");
      auth.onAuthStateChanged((user: any) => {
        Store.dispatch(signIn({ uid: user.uid, email: user.email }));
      });
    } catch (error) {
      console.error("signin guess ", error);
    }
  }
}
