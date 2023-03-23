import {
  OrderedListOutlined,
  PieChartOutlined,
  SolutionOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown } from "antd"; //TODO: Import from Library
import { css } from "glamor";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import { Company, Unit, User } from "../../types";
import { Layout, Menu, MenuProps } from "../Library";
const { Sider } = Layout;

const companyTriggerClass = css({
  minHeight: 32,
  margin: 16,
  background: "rgba(255, 255, 255, 0.2)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
}).toString();

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  onClick?: Function | undefined
): MenuItem {
  return {
    label,
    key,
    icon,
    children,
    onClick,
  } as MenuItem;
}

const getCompanyItems = (
  companies: Company[] | undefined
): MenuProps["items"] => {
  return companies?.map((company: Company) => ({
    key: company.id,
    label: company.name,
  }));
};

export default function Sidebar(props: {
  users: User[];
  units: Unit[];
  company: Company | undefined;
  companies: Company[] | undefined;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const { users, units, company, companies } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeCurrentCompany: MenuProps["onClick"] = ({ key }) => {
    dispatch({ type: "CURRENT_COMPANY_CHANGED", id: key });
  };

  const items: MenuItem[] = [
    getItem("Dashboard", "/", <PieChartOutlined />, undefined, () =>
      navigate("/")
    ),
    getItem("Ativos", "/assets", <OrderedListOutlined />, undefined, () =>
      navigate(`/assets`, { replace: true })
    ),
    getItem(
      "Ordens de Trabalho",
      "/workOrders",
      <SolutionOutlined />,
      undefined,
      () => navigate("/workOrders")
    ),
    getItem(
      "Funcionários",
      "Funcionarios",
      <UserOutlined />,
      users?.map(
        ({ name, id }) =>
          getItem(name, `/users/${id}`, undefined, undefined, () => {
            navigate(`/users/${id}`, { replace: true });
          }),
        false
      )
    ),
    getItem(
      "Unidades",
      "Unidades",
      <TeamOutlined />,
      units?.map(
        ({ name, id }) =>
          getItem(name, `/units/${id}`, undefined, undefined, () => {
            navigate(`/units/${id}`, { replace: true });
          }),
        false
      )
    ),
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Dropdown
        menu={{
          items: getCompanyItems(companies),
          onClick: changeCurrentCompany,
        }}
        trigger={["click"]}
      >
        <a className={companyTriggerClass} onClick={(e) => e.preventDefault()}>
          {company?.name}
        </a>
      </Dropdown>
      <Menu
        theme="dark"
        mode="inline"
        items={items}
        selectedKeys={[location.pathname]}
      ></Menu>
    </Sider>
  );
}
