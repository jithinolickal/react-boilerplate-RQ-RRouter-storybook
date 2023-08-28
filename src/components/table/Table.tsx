import React from "react";
import { Table as AntdTable } from "antd";

interface Row {
  key: string;
  name: string;
  age: number;
  address: string;
  // tags: string[];
}

type Props = {
  dataSource: Array<Row>;
  columns: Array<Record<string, unknown>>;
};

const Table = ({ dataSource, columns }: Props) => {
  return (
    <AntdTable
      dataSource={dataSource}
      columns={columns}
      rowSelection={{ type: "checkbox" }}
      size="large"
      bordered={false}
      loading={false}
      scroll={{scrollToFirstRowOnChange: true}}
      // sticky={true}
    />
  );
};

export default Table;
