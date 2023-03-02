import { RootState } from "../types";
import { createSelector } from "reselect";

const getUnits = (state: RootState) => state.entities.units;

export const getAllUnits = createSelector(getUnits, (units) =>
  Object.values(units)
);
