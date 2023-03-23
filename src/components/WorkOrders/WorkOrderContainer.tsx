import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAssetById } from "../../selectors/assetSelectors";
import { getUserByIds } from "../../selectors/userSelectors";
import { getWorkOrderById } from "../../selectors/workOrderSelectors";
import { RootState } from "../../types";
import WorkOrder from "./WorkOrder";

const WorkOrderContainer = () => {
  const { workOrderId } = useParams();
  const workOrder = useSelector((state: RootState) =>
    getWorkOrderById(state, workOrderId)
  );
  const asset = useSelector((state: RootState) =>
    getAssetById(state, workOrder?.assetId)
  );
  const users = useSelector((state: RootState) =>
    workOrder?.assignedUserIds
      ? getUserByIds(state, workOrder?.assignedUserIds)
      : []
  );

  return (
    <WorkOrder
      workOrder={workOrder}
      asset={asset}
      users={users}
      workOrderId={workOrderId}
    />
  );
};

export default WorkOrderContainer;
