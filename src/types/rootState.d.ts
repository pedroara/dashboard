import {
  CompaniesState,
  AssetsState,
  UnitsState,
  UsersState,
  WorkOrdersState,
} from "../types";

export interface RootState {
  entities: {
    companies: CompaniesState;
    assets: AssetsState;
    units: UnitsState;
    users: UsersState;
    workOrders: WorkOrdersState;
  };
}
