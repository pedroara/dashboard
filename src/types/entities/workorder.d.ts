export interface CheckListItem {
  completed: boolean;
  task: string;
}

export interface WorkOrder {
  id: number;
  checklist: CheckListItem[];
  assignedUserIds: number[];
  assetId: number;
  status: string; //TODO: Add only allowed values
  description: string;
  priority: string;
  title: string;
}

export interface WorkOrdersState {
  [id: number]: WorkOrder;
}

export interface WorkOrdersFetchedAction {
  type: "WORKORDER_FETCHED" | "WORKORDERS_FETCHED";
  entities: {
    workOrders: WorkOrdersState;
  };
}
