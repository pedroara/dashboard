import { AssetsFetchedAction, AssetsState } from "../types/entities/asset";

const initialState: AssetsState = {};

const assetsReducer = (state = initialState, action: AssetsFetchedAction) => {
  switch (action.type) {
    case "ASSET_FETCHED":
    case "ASSETS_FETCHED":
      return { ...state, ...action.entities.assets };
    default:
      return state;
  }
};

export default assetsReducer;
