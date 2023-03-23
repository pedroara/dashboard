import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Asset } from "../../types";
import { Button, Link } from "../Library";
import Page from "../Page/Page";

const columns: ColumnsType<Asset> = [
  {
    title: "Id",
    dataIndex: "id",
  },
  {
    title: "Imagem",
    dataIndex: "image",
    render: (value) => <img src={value} width="200px" />,
  },
  {
    title: "Nome",
    dataIndex: "name",
    width: "30%",
  },
  {
    title: "Saúde",
    dataIndex: "healthscore",
  },
  {
    title: "Modelo",
    dataIndex: "model",
  },
  {
    title: "Unidade",
    dataIndex: "unitId",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "",
    dataIndex: "id",
    render: (value) => (
      <Link to={`/assets/${value}`}>
        <Button type="primary">Detalhes</Button>
      </Link>
    ),
  },
];

export default function Assets(props: { assets: Asset[] }) {
  const { assets } = props;

  return (
    <Page title="Ativos">
      <Table columns={columns} dataSource={assets} pagination={false} />
    </Page>
  );
}
