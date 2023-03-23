import { CurrentCompany } from "../types";
import { CurrentCompanyActions } from "./../types";

const initialState: CurrentCompany = {
  companyId: undefined,
};

const currentCompanyReducer = (
  state = initialState,
  action: CurrentCompanyActions
) => {
  switch (action.type) {
    case "COMPANIES_FETCHED":
      let initialCompany = Object.values(action.entities.companies)[0];

      return {
        ...state,
        companyId: initialCompany?.id,
      };
    case "CURRENT_COMPANY_CHANGED":
      return { companyId: action.id };
    default:
      return state;
  }
};

export default currentCompanyReducer;
