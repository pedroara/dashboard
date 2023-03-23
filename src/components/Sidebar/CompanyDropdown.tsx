import { css } from "glamor";
import { Company } from "../../types";

const triggerClass = css({
  minHeight: 32,
  margin: 16,
  background: "rgba(255, 255, 255, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
}).toString();

export default function CompanyDropdown(props: { company: Company }) {
  const { company } = props;

  return <div className={triggerClass}>{company?.name}</div>;
}
