import { useEffect, useState } from "react";
import { useGetBqDummy } from "src/api/bqDummy";
import Table from "src/components/table/Table";

type Props = {};

const getColumns = (data) => {
  const tableColumns = [];
  if (data.length > 0) {
    console.log("dataaaa");
    // console.log(    Object.keys(data[0]))
    for (const key in data[0]) {
      console.log(key);
      tableColumns.push({
        title: key,
        dataIndex: key,
        key: key,
        ellipsis: true,
        width: 180,
      });
    }
  }
  return tableColumns;
};

const Hop1 = (props: Props) => {
  const { data, isLoading, isError } = useGetBqDummy();
  const [columns, setColumns] = useState<any>();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]); // Row selection

  useEffect(() => {
    if (data?.length > 0) {
      setColumns(getColumns(data));
    }
  }, [data]);

  console.log("Data", data);

  const onSelectChange = (newSelectedRowKeys) => {
    // console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  //   if (isLoading) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        // size="small"
        // scroll={{
        //     x: "100%",
        //   }}
        loading={isLoading}
        sticky
        rowSelection={{
          type: "checkbox",
        //   selectedRowKeys,
        //   onChange: onSelectChange,
        }}
        size="large"
        bordered={false}
        scroll={{ scrollToFirstRowOnChange: true, x: "100%" }}
      />
    </div>
  );
};

export default Hop1;
