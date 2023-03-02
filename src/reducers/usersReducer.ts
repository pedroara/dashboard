import { UsersFetchedAction, UsersState } from "../types/entities/user";

const initialState: UsersState = {};

const usersReducer = (state = initialState, action: UsersFetchedAction) => {
  switch (action.type) {
    case "USER_FETCHED":
    case "USERS_FETCHED":
      return { ...state, ...action.entities.users };
    default:
      return state;
  }
};

export default usersReducer;
