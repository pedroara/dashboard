import { normalize, schema } from "normalizr";
import { Dispatch } from "redux";
import { Unit } from "../types/entities/unit";
import { apiGet } from "./api";

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
  return apiGet("/units").then((response: any) => {
    dispatch({
      type: "UNITS_FETCHED",
      ...normalize(response.body, unitSchemaArray),
    });
  });
};
