import { Asset, User, WorkOrder as WorkOrderType } from "../../types";
import { Descriptions, Link } from "../Library";
import Page from "../Page/Page";

export default function WorkOrder(props: {
  workOrder: WorkOrderType | undefined;
  workOrderId: number | string | undefined;
  asset: Asset | undefined;
  users: User[];
}) {
  const { workOrder, asset, users } = props;
  return (
    <Page title="Ordem de Trabalho">
      <Descriptions
        title={workOrder?.title}
        layout="vertical"
        bordered
        size="small"
      >
        <Descriptions.Item label="Status">
          {workOrder?.status}
        </Descriptions.Item>
        <Descriptions.Item label="Prioridade">
          {workOrder?.priority}
        </Descriptions.Item>
        <Descriptions.Item label="Ativo">
          <Link to={`/assets/${asset?.id}`}>{asset?.name}</Link>
        </Descriptions.Item>
        <Descriptions.Item label="Funcionários">
          {users.map(({ id, name }, index) => (
            <>
              <Link to={`/users/${id}`}>{name}</Link>
              {index < users.length - 1 && ", "}
            </>
          ))}
        </Descriptions.Item>
        <Descriptions.Item label="Descrição">
          {workOrder?.description}
        </Descriptions.Item>
        <Descriptions.Item label="Checklist">
          <ul>
            {workOrder?.checklist.map((item) => (
              <li>
                {item.task} {item.completed ? "(CONCLUÍDO)" : "(NÃO CONCLUÍDO)"}
              </li>
            ))}
          </ul>
        </Descriptions.Item>
      </Descriptions>
    </Page>
  );
}
