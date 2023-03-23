import { WorkOrdersFetchedAction, WorkOrdersState } from "../types";

const initialState: WorkOrdersState = {};

const workOrdersReducer = (
  state = initialState,
  action: WorkOrdersFetchedAction
) => {
  switch (action.type) {
    case "WORKORDER_FETCHED":
    case "WORKORDERS_FETCHED":
      return { ...state, ...action.entities.workOrders };
    default:
      return state;
  }
};

export default workOrdersReducer;
