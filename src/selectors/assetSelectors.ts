import { RootState } from "../types";
import { createSelector } from "reselect";

const getAssets = (state: RootState) => state.entities.assets;

export const getAllAssets = createSelector(getAssets, (assets) =>
  Object.values(assets)
);
