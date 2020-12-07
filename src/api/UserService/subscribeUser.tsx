import { useEffect } from "react";
import { signIn } from "../../features/User/user.slice";
import { auth } from "../../firebase";
import Store from "../../Store";

export default function subscribeUser() {
  return auth.onAuthStateChanged((user: any) => {
    if (user) {
      Store.dispatch(
        signIn({ uid: user.uid, email: user.email, logged: true })
      );
    }
  });
}
