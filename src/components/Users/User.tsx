import { Unit, User as UserType } from "../../types";
import { Descriptions, Link } from "../Library";
import Page from "../Page/Page";

export default function User(props: {
  user: UserType | undefined;
  userId: number | string | undefined;
  unit: Unit | undefined;
}) {
  const { user, userId, unit } = props;

  return (
    <Page title="Funcionário">
      <Descriptions title={user?.name} layout="vertical" bordered size="small">
        <Descriptions.Item label="Id">{userId}</Descriptions.Item>
        <Descriptions.Item label="Email">{user?.email}</Descriptions.Item>
        <Descriptions.Item label="Unidade">
          <Link to={`/units/${unit?.id}`}>{unit?.name}</Link>
        </Descriptions.Item>
      </Descriptions>
    </Page>
  );
}
