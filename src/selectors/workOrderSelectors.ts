import { createSelector } from "reselect";
import { RootState, WorkOrder } from "../types";
import { getAllAssets } from "./assetSelectors";
import { getCurrentCompany } from "./companySelectors";

const getWorkOrders = (state: RootState) => state.entities.workOrders;
const getId = (state: RootState, id: number | string | undefined) => id;

export const getAllWorkOrders = createSelector(
  getWorkOrders,
  getCurrentCompany,
  getAllAssets,
  (workOrder, company, assets): WorkOrder[] => {
    const checkIfAssetIsFromCurrentCompany = (workOrder: WorkOrder) =>
      !!assets.find(
        (asset) =>
          workOrder.assetId == asset.id && asset.companyId == company?.id
      );

    return Object.values(workOrder).filter((workOrder) =>
      checkIfAssetIsFromCurrentCompany(workOrder)
    );
  }
);

export const getWorkOrderById = createSelector(
  getAllWorkOrders,
  getId,
  (workOrders, id) =>
    workOrders.find(({ id: workOrderId }) => workOrderId == id)
);
