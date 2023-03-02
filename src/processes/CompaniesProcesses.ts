import { normalize } from "normalizr";
import { schema } from "normalizr";
// import { apiGet } from "./api";
import { Dispatch } from "redux";
import { Company } from "./../types/entities/company";

const companiesR = [
  {
    id: 1,
    name: "The Test Company",
  },
];

const companySchema = new schema.Entity<Company>("companies");
const companySchemaArray = new schema.Array(companySchema);

export const fetchCompanies = (dispatch: Dispatch) => {
  // return apiGet("/companies");
  dispatch({
    type: "COMPANIES_FETCHED",
    ...normalize(companiesR, companySchemaArray),
  });

  return companiesR;
};
