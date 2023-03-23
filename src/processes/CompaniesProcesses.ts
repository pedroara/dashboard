import { normalize, schema } from "normalizr";
import { Dispatch } from "redux";
import { Company } from "./../types/entities/company";
import { apiGet } from "./api";

const companiesR = [
  {
    id: 1,
    name: "The Test Company",
  },
];

const companySchema = new schema.Entity<Company>("companies");
const companySchemaArray = new schema.Array(companySchema);

export const fetchCompanies = (dispatch: Dispatch) => {
  return apiGet("/companies").then((response: any) => {
    dispatch({
      type: "COMPANIES_FETCHED",
      ...normalize(response.body, companySchemaArray),
    });
  });
};
