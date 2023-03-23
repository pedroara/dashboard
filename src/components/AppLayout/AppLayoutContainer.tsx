import { useEffect, useState } from "react";
import AppLayout from "./AppLayout";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../processes/UsersProcesses";
import { fetchCompanies } from "../../processes/CompaniesProcesses";
import { fetchAssets } from "../../processes/AssetsProcesses";
import { fetchUnits } from "../../processes/UnitsProcesses";
import { fetchWorkOrders } from "../../processes/WorkOrdersProcesses";

const AppLayoutContainer = (props: any) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetchCompanies(dispatch),
      fetchAssets(dispatch),
      fetchUnits(dispatch),
      fetchUsers(dispatch),
      fetchWorkOrders(dispatch),
    ]).finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  return <AppLayout {...props} loading={loading} />;
};

export default AppLayoutContainer;
