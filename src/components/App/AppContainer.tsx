import { useEffect } from "react";
import App from "./App";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../processes/UsersProcesses";
import { AppProps } from "../../types/components/app";
import { fetchCompanies } from "../../processes/CompaniesProcesses";
import { fetchAssets } from "../../processes/AssetsProcesses";
import { fetchUnits } from "../../processes/UnitsProcesses";
import { fetchWorkOrders } from "../../processes/WorkOrdersProcesses";

const AppContainer = (props: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCompanies(dispatch);
    fetchAssets(dispatch);
    fetchUnits(dispatch);
    fetchUsers(dispatch);
    fetchWorkOrders(dispatch);
  }, [dispatch]);

  return <App {...props} />;
};

export default AppContainer;
