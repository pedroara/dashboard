import Dashboard from "./Dashboard";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../selectors/userSelectors";
import { RootState } from "../../types";

const DashboardContainer = () => {
  const users = useSelector((state: RootState) => getAllUsers(state));

  return <Dashboard users={users} />;
};

export default DashboardContainer;
