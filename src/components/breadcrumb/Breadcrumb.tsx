import React from 'react'
import { Breadcrumb as AntdBreadcrumb } from 'antd';

type Props = {
  items: Array<Record<string, unknown>>
}

const Breadcrumb = ({items}: Props) => {
  return (
    <AntdBreadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: <a>'An Application'</a>,
      },
    ]}
  />
  )
}

export default Breadcrumb