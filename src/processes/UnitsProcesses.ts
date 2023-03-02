import { normalize } from "normalizr";
import { schema } from "normalizr";
// import { apiGet } from "./api";
import { Dispatch } from "redux";
import { Unit } from "../types/entities/unit";

const unitsR = [
  {
    companyId: 1,
    id: 1,
    name: "Jaguar Unit",
  },
  {
    companyId: 1,
    id: 2,
    name: "Tobias Unit",
  },
];

const unitSchema = new schema.Entity<Unit>("units");
const unitSchemaArray = new schema.Array(unitSchema);

export const fetchUnits = (dispatch: Dispatch) => {
  // return apiGet("/units");

  dispatch({ type: "UNITS_FETCHED", ...normalize(unitsR, unitSchemaArray) });

  return unitsR;
};
