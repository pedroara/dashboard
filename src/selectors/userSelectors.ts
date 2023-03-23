import { createSelector } from "reselect";
import { RootState, User } from "../types";
import { getCurrentCompany } from "./companySelectors";

const getUsers = (state: RootState) => state.entities.users;
const getId = (state: RootState, id: number | string | undefined) => id;
const getIds = (state: RootState, id: number[]) => id;

export const getAllUsers = createSelector(
  getUsers,
  getCurrentCompany,
  (users, company): User[] =>
    Object.values(users).filter(({ companyId }) => companyId == company?.id)
);

export const getUserById = createSelector(getAllUsers, getId, (users, userId) =>
  users.find(({ id }) => id == userId)
);

export const getUserByIds = createSelector(
  getAllUsers,
  getIds,
  (users, userIds) => {
    return !!users?.length && !!userIds?.length
      ? users.filter((user) => userIds?.includes(user.id))
      : [];
  }
);

export const getUsersByUnitId = createSelector(
  getAllUsers,
  getId,
  (users, id) => users.filter(({ unitId }) => unitId == id)
);
