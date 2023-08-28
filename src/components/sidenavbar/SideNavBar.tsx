import { Menu } from "antd";
import {
  HomeOutlined,
  ReconciliationOutlined,
  MonitorOutlined,
  FundViewOutlined,
} from "@ant-design/icons";
import type { MenuProps } from 'antd';

import "./SideNavBar.css";

type Props = {};

const items: MenuProps['items']  = [
  {
    label: "Favorites",
    key: "favorites",
    children: [
      { label: "Business Mapping", key: "businessMapping" },
      { label: "Cost Optimization", key: "costOptimization" },
    ],
    type: "group",
  },
  { type: "divider" },
  {
    label: "Homepage",
    key: "homepage",
    icon: <HomeOutlined />,
    // children: [{ label: "child1", key: "ch id 1" }],
  },
  {
    label: "Business Mapping",
    key: "businessMapping",
    icon: <ReconciliationOutlined />,
    children: [
      { label: "Azure", key: "azure" },
      { label: "Cloudability", key: "cloudability" },
    ],
  },
  {
    label: "Cost Optimization",
    key: "costOptimization",
    icon: <MonitorOutlined />,
    children: [
      { label: "co1", key: "co1" },
      { label: "co2", key: "co2" },
    ],
  },
  {
    label: "IT Cost",
    key: "itCost",
    icon: <FundViewOutlined />,
    children: [
      { label: "itco1", key: "itco1" },
      { label: "itco2", key: "itco2" },
    ],
  },
];

const SideNavBar = (props: Props) => {
  return (
    <div style={{ width: 256 }}>
      <Menu
        //   onClick={onClick}
        //   defaultSelectedKeys={['1']}
        //   defaultOpenKeys={['sub1']}

        mode="inline"
        items={items}
        inlineCollapsed={false}
      />
    </div>
  );
};

export default SideNavBar;
