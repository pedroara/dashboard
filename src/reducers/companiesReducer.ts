import {
  CompaniesState,
  CompaniesFetchedAction,
} from "../types/entities/company.d";

const initialState: CompaniesState = {};

const companiesReducer = (
  state = initialState,
  action: CompaniesFetchedAction
) => {
  switch (action.type) {
    case "COMPANY_FETCHED":
    case "COMPANIES_FETCHED":
      return { ...state, ...action.entities.companies };
    default:
      return state;
  }
};

export default companiesReducer;
