import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../Store";
import { userAdapter } from "./user.slice";

export const userSelector = userAdapter.getSelectors(
  (state: RootState) => state.people.user
);

// select user
export const userSelectAllSelector = createSelector(
  userSelector.selectAll,
  (user) => user
);
