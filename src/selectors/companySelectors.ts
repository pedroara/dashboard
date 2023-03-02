import { RootState } from "../types";
import { createSelector } from "reselect";

const getCompanies = (state: RootState) => state.entities.companies;

export const getAllCompanies = createSelector(getCompanies, (companies) =>
  Object.values(companies)
);
