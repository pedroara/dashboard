import { useSelector } from "react-redux";
import { getAllAssets } from "../../selectors/assetSelectors";
import { RootState } from "../../types";
import Assets from "./Assets";

const AssetsContainer = () => {
  const assets = useSelector((state: RootState) => getAllAssets(state));

  return <Assets assets={assets} />;
};

export default AssetsContainer;
