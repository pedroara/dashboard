import {
  WorkOrdersFetchedAction,
  WorkOrdersState,
} from "../types/entities/workorder.d";

const initialState: WorkOrdersState = {};

const WorkOrdersReducer = (
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

export default WorkOrdersReducer;
