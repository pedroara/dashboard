import { createSelector } from "reselect";
import { RootState } from "../types";
import { getCurrentCompany } from "./companySelectors";

const getAssets = (state: RootState) => state.entities.assets;
const getId = (state: RootState, id: number | string | undefined) => id;

export const getAllAssets = createSelector(
  getAssets,
  getCurrentCompany,
  (assets, company) =>
    Object.values(assets).filter(({ companyId }) => companyId == company?.id)
);

export const getAssetById = createSelector(getAllAssets, getId, (assets, id) =>
  assets.find(({ id: assetId }) => assetId == id)
);
