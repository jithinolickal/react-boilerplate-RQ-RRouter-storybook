import { Row, Layout, Menu } from "antd";
import type { MenuProps } from "antd";
import { useState } from "react";
import SideNavBar from "src/components/sidenavbar/SideNavBar";
import "src/pages/Layout.css";
import {
  HomeOutlined,
  ReconciliationOutlined,
  MonitorOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
import Protected from "src/routes/Protected";
import { NavLink, useLocation } from "react-router-dom";

type Props = {};

const { Sider } = Layout;

const items: MenuProps["items"] = [
  {
    label: (
      <NavLink end to="/">
        Home Page
      </NavLink>
    ),
    key: "/",
    icon: <HomeOutlined />,
    // children: [{ label: "child1", key: "ch id 1" }],
  },
  {
    label: "charge",
    key: "charge",
    icon: <ReconciliationOutlined />,
    children: [
      {
        label: (
          <NavLink end to="/charge/reports">
            Reports
          </NavLink>
        ),
        key: "/charge/reports",
      },
      {
        label: (
          <NavLink end to="/charge/mapping">
            Mapping
          </NavLink>
        ),
        key: "/charge/mapping",
      },
      {
        label: (
          <NavLink end to="/charge/forecast">
            Forecast
          </NavLink>
        ),
        key: "/charge/forecast",
      },
    ],
  },
  {
    label: "Cost Optimization",
    key: "costOptimization",
    icon: <MonitorOutlined />,
  },
  {
    label: "IT Cost",
    key: "itCost",
    icon: <FundViewOutlined />,
  },
];

const handleMenuItemClicked = (params: any) => {
  console.log(params);
};

const AppLayout = () => {
  const location = useLocation();
  console.log("location", location);

  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="layout-container">
        <Sider
          theme="light"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Row>User Profile</Row>
          <Row>Favourites</Row>
          <SideNavBar
            defaultSelectedKeys={[location.pathname]} // Item keys and path name should be same
            items={items}
            // onClick={handleMenuItemClicked}
          />
        </Sider>
        <Layout className="header-content">
          <Row>Layout header - breadcrumb</Row>

          {/* This is the page content container for all pages */}
          <Protected />
        </Layout>
      </Layout>
    </>
  );
};

export default AppLayout;
