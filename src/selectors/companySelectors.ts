import { Company } from "./../types/entities/company.d";
import { RootState } from "../types";
import { createSelector } from "reselect";

const getCompanies = (state: RootState) => state.entities.companies;
const getId = (state: RootState, id: number | string | undefined) => id;
const getCurrentCompanyId = (state: RootState) =>
  state.currentCompany.companyId;

export const getAllCompanies = createSelector(
  getCompanies,
  (companies): Company[] => Object.values(companies)
);

export const getCompanyById = createSelector(
  getAllCompanies,
  getId,
  (companies, id) => companies?.find(({ id: companyId }) => companyId == id)
);

export const getCurrentCompany = createSelector(
  getCompanies,
  getCurrentCompanyId,
  (companies, id) => (id ? companies[id] : undefined)
);
