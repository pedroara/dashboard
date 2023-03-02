export interface Company {
  id: number;
  name: string;
}

export interface CompaniesState {
  [id: number]: Company;
}

export interface CompaniesFetchedAction {
  type: "COMPANY_FETCHED" | "COMPANIES_FETCHED";
  entities: {
    companies: CompaniesState;
  };
}
