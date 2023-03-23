import { CompaniesState } from "./entities/company.d";

export type CurrentCompany = {
  companyId: number | undefined;
};

export interface CurrentCompanyActions {
  type: "COMPANIES_FETCHED" | "CURRENT_COMPANY_CHANGED";
  entities: { companies: CompaniesState };
  currentComapny: CurrentCompany;
  id: number | string;
}

export interface CurrentCompanyActions {
  type: "COMPANIES_FETCHED" | "CURRENT_COMPANY_CHANGED";
  currentComapny: CurrentCompany;
}
