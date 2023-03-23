import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUnitById } from "../../selectors/unitSelectors";
import { getUsersByUnitId } from "../../selectors/userSelectors";
import { RootState } from "../../types";
import Unit from "./Unit";

const UnitContainer = () => {
  const { unitId } = useParams();
  const unit = useSelector((state: RootState) => getUnitById(state, unitId));
  const users = useSelector((state: RootState) =>
    getUsersByUnitId(state, unitId)
  );

  return <Unit unit={unit} users={users} unitId={unitId} />;
};

export default UnitContainer;
