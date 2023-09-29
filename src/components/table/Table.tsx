import { Table as AntdTable } from "antd";
import type { TableProps } from "antd/es/table";

import "./Table.css";
import { RefTable } from "antd/es/table/interface";

interface Row {
  key: string;
  name: string;
  age: number;
  address: string;
  // tags: string[];
}

const Table = ({ ...props }: TableProps<any>) => {
  return <AntdTable {...props} />;
};

export default Table;
