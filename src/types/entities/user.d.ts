export interface User {
  id: number;
  name: string;
  companyId: number;
  email: string;
  unitId: number;
}

export interface UsersState {
  [id: number]: User;
}

export interface UsersFetchedAction {
  type: "USER_FETCHED" | "USERS_FETCHED";
  entities: {
    users: UsersState;
  };
}
