import { message } from "antd";
import { signIn, signOut } from "../../features/User/user.slice";
import { auth } from "../../firebase";
import Store from "../../Store";

export default class UserService {
  async signInUser(email: string, pass: string) {
    try {
      await auth.signInWithEmailAndPassword(email, pass);

      auth.onAuthStateChanged((user: any) => {
        Store.dispatch(
          signIn({
            uid: user.uid,
            email: user.email,
            isGuess: false,
          })
        );
        message.success("Welcome back, Kevin!");
      });
    } catch (error) {
      message.error("Invalid credentials");
      console.error("signing in ", error);
    }
  }

  async signOutUser() {
    try {
      await auth.signOut();
      auth.onAuthStateChanged(() => {
        Store.dispatch(signOut());

        message.success("Logged out");
      });
    } catch (error) {
      message.error("Please try again later.");
      console.error("signing out ", error);
    }
  }

  async signInGuess() {
    try {
      await auth.signInWithEmailAndPassword("guest@email.com", "123456");

      auth.onAuthStateChanged((user: any) => {
        Store.dispatch(signIn({ uid: user.uid, email: user.email }));

        message.success("Welcome, guest!");
      });
    } catch (error) {
      message.info("Invalid credentials");
      console.error("signin guess ", error);
    }
  }
}
