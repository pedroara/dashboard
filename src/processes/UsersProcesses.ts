import { normalize, schema } from "normalizr";
import { Dispatch } from "redux";
import { User } from "../types/entities/user";
import { apiGet } from "./api";

const usersR = [
  {
    companyId: 1,
    email: "testerOne@tractian.com",
    id: 1,
    name: "John Doe",
    unitId: 1,
  },
  {
    companyId: 1,
    email: "testerTwo@tractian.com",
    id: 2,
    name: "Jane Doe",
    unitId: 1,
  },
  {
    companyId: 1,
    email: "testerThree@tractian.com",
    id: 3,
    name: "Bob Smith",
    unitId: 1,
  },
  {
    companyId: 1,
    email: "testerFour@tractian.com",
    id: 4,
    name: "Sarah Johnson",
    unitId: 1,
  },
  {
    companyId: 1,
    email: "testerFive@tractian.com",
    id: 5,
    name: "Tim Brown",
    unitId: 2,
  },
];

const userSchema = new schema.Entity<User>("users");
const userSchemaArray = new schema.Array(userSchema);

export const fetchUsers = (dispatch: Dispatch) => {
  return apiGet("/users").then((response: any) => {
    dispatch({
      type: "USERS_FETCHED",
      ...normalize(response.body, userSchemaArray),
    });
  });
};
