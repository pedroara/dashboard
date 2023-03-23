import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { useSelector } from "react-redux";
import { getUserByIds } from "../../selectors/userSelectors";
import { RootState, User, WorkOrder } from "../../types";
import { Button, Link } from "../Library";
import Page from "../Page/Page";

const Employees = (props: { ids: number[] }) => {
  const { ids } = props;
  const users = useSelector((state: RootState) => getUserByIds(state, ids));

  return (
    <>
      {!!users?.length &&
        users.map((user: User, index: number) => (
          <>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
            {index < users.length - 1 && ", "}
          </>
        ))}
    </>
  );
};

const columns: ColumnsType<WorkOrder> = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Título",
    dataIndex: "title",
    width: "30%",
  },
  {
    title: "Ativo",
    dataIndex: "assetId",
  },
  {
    title: "Funcionários",
    dataIndex: "assignedUserIds",
    render: (value) => <Employees ids={value} />,
  },
  {
    title: "Prioridade",
    dataIndex: "priority",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "",
    dataIndex: "id",
    render: (value) => (
      <Link to={`/workOrders/${value}`}>
        <Button type="primary">Detalhes</Button>
      </Link>
    ),
  },
];

export default function WorkOrders(props: { workOrders: WorkOrder[] }) {
  const { workOrders } = props;

  return (
    <Page title="Ordens de trabalho">
      <Table columns={columns} dataSource={workOrders} pagination={false} />
    </Page>
  );
}
