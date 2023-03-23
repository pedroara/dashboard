import { useSelector } from "react-redux";
import {
  getAllCompanies,
  getCurrentCompany,
} from "../../selectors/companySelectors";
import { getAllUnits } from "../../selectors/unitSelectors";
import { getAllUsers } from "../../selectors/userSelectors";
import { RootState } from "../../types";
import Sidebar from "./Sidebar";

const SidebarContainer = () => {
  const users = useSelector((state: RootState) => getAllUsers(state));
  const units = useSelector((state: RootState) => getAllUnits(state));
  const company = useSelector((state: RootState) => getCurrentCompany(state));
  const companies = useSelector((state: RootState) => getAllCompanies(state));

  return (
    <Sidebar
      companies={companies}
      company={company}
      units={units}
      users={users}
    />
  );
};

export default SidebarContainer;
