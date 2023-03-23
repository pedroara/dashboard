import WorkOrders from "./WorkOrders";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import { getAllWorkOrders } from "../../selectors/workOrderSelectors";

const WorkOrdersContainer = () => {
  const workOrders = useSelector((state: RootState) => getAllWorkOrders(state));

  return <WorkOrders workOrders={workOrders} />;
};

export default WorkOrdersContainer;
