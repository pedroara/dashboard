import { createSelector } from "reselect";
import { RootState } from "../types";
import { Unit } from "./../types/entities/unit.d";
import { getCurrentCompany } from "./companySelectors";

const getUnits = (state: RootState) => state.entities.units;
const getId = (state: RootState, id: number | string | undefined) => id;

export const getAllUnits = createSelector(
  getUnits,
  getCurrentCompany,
  (units, company): Unit[] =>
    Object.values(units).filter(({ companyId }) => companyId == company?.id)
);

export const getUnitById = createSelector(getAllUnits, getId, (units, id) =>
  units.find(({ id: unitId }) => unitId == id)
);
