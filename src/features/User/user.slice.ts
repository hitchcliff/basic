import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
export interface User {
  uid: string;
  email: string;
  logged?: boolean;
  isGuess?: boolean;
}

export const userAdapter = createEntityAdapter<User>({
  selectId: (state) => state.uid,
});

const initialState = {
  logged: false,
  isGuess: true,
  user: userAdapter.getInitialState(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, { payload }: PayloadAction<User>) => {
      userAdapter.addOne(state.user, payload);
    },
    signOut: (state) => {
      userAdapter.removeAll(state.user);
      state.logged = false;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;
