import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUnitById } from "../../selectors/unitSelectors";
import { getUserById } from "../../selectors/userSelectors";
import { RootState } from "../../types";
import User from "./User";

const UserContainer = () => {
  const { userId } = useParams();
  const user = useSelector((state: RootState) => getUserById(state, userId));
  const unit = useSelector((state: RootState) =>
    getUnitById(state, user?.unitId)
  );
  return <User user={user} unit={unit} userId={userId} />;
};

export default UserContainer;
