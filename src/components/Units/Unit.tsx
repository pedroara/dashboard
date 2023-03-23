import { Unit as UnitType, User } from "../../types";
import { Descriptions, Link } from "../Library";
import Page from "../Page/Page";

export default function Unit(props: {
  unit: UnitType | undefined;
  unitId: number | string | undefined;
  users: User[];
}) {
  const { unit, unitId, users } = props;

  return (
    <Page title="Unidade">
      <Descriptions title={unit?.name} layout="vertical" bordered size="small">
        <Descriptions.Item label="Id">{unitId}</Descriptions.Item>
        <Descriptions.Item label="Funcionários">
          {users.map(({ id, name }, index) => (
            <>
              <Link to={`/users/${id}`}>{name}</Link>
              {index < users.length - 1 && ", "}
            </>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Page>
  );
}
