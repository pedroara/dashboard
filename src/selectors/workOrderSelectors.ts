import { RootState } from "../types";
import { createSelector } from "reselect";

const getWorkOrders = (state: RootState) => state.entities.workOrders;

export const getAllUsers = createSelector(getWorkOrders, (workOrder) =>
  Object.values(workOrder)
);
