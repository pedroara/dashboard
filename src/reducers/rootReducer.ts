import { combineReducers } from "redux";
import assetsReducer from "./assetssReducer";
import companiesReducer from "./companiesReducer";
import unitsReducer from "./unitsReducer";
import usersReducer from "./usersReducer";
import WorkOrdersReducer from "./workordersReducer";

const rootReducer = combineReducers({
  entities: combineReducers({
    users: usersReducer,
    companies: companiesReducer,
    assets: assetsReducer,
    units: unitsReducer,
    workOrders: WorkOrdersReducer,
  }),
});

export default rootReducer;
