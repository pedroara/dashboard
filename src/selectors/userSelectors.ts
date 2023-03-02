import { RootState } from "../types";
import { createSelector } from "reselect";

const getUsers = (state: RootState) => state.entities.users;

export const getAllUsers = createSelector(getUsers, (users) =>
  Object.values(users)
);
