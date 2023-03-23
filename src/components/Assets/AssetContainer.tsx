import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAssetById } from "../../selectors/assetSelectors";
import { getUnitById } from "../../selectors/unitSelectors";
import { RootState } from "../../types";
import Asset from "./Asset";

const AssetContainer = () => {
  const { assetId } = useParams();
  const asset = useSelector((state: RootState) => getAssetById(state, assetId));
  const unit = useSelector((state: RootState) =>
    getUnitById(state, asset?.unitId)
  );

  return <Asset asset={asset} unit={unit} assetId={assetId} />;
};

export default AssetContainer;
