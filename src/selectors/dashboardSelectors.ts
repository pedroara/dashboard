import { createSelector } from "reselect";
import { getAllAssets } from "./assetSelectors";

export const getAssetsStatusChartData = createSelector(
  getAllAssets,
  (assets) => {
    if (!assets.length) return [];
    const getProportion = (selectedStatus: string) =>
      assets.filter(({ status }) => status == selectedStatus).length /
      assets.length;

    return [
      ["Em operação", getProportion("inDowntime")],
      ["Em alerta", getProportion("inAlert")],
      ["Em parada", getProportion("inOperation")],
    ];
  }
);

export const getAssetsHealthscoreChartData = createSelector(
  getAllAssets,
  (assets) => {
    if (!assets.length) return [];
    const totalHealthscore =
      assets.reduce((acc, { healthscore }) => acc + healthscore, 0) /
      assets.length;

    return [
      ["Saúde", totalHealthscore],
      ["Alerta", 100 - totalHealthscore],
    ];
  }
);
