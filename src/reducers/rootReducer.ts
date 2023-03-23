import { combineReducers } from "redux";
import assets from "./assetssReducer";
import companies from "./companiesReducer";
import currentCompany from "./currentCompany";
import units from "./unitsReducer";
import workOrders from "./workOrdersReducer";
import users from "./usersReducer";

const rootReducer = combineReducers({
  entities: combineReducers({
    users,
    companies,
    assets,
    units,
    workOrders,
  }),
  currentCompany,
});

export default rootReducer;
