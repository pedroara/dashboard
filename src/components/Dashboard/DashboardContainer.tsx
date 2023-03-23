import { useSelector } from "react-redux";
import {
  getAssetsHealthscoreChartData,
  getAssetsStatusChartData,
} from "../../selectors/dashboardSelectors";
import { getAllUsers } from "../../selectors/userSelectors";
import { RootState } from "../../types";
import Dashboard from "./Dashboard";

const DashboardContainer = () => {
  const users = useSelector((state: RootState) => getAllUsers(state));
  const assetsStatusChartData = useSelector((state: RootState) =>
    getAssetsStatusChartData(state)
  );
  const assetsHealthscoreChartData = useSelector((state: RootState) =>
    getAssetsHealthscoreChartData(state)
  );

  return (
    <Dashboard
      users={users}
      assetsStatusChartData={assetsStatusChartData}
      assetsHealthscoreChartData={assetsHealthscoreChartData}
    />
  );
};

export default DashboardContainer;
