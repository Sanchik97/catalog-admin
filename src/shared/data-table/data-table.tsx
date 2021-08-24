import React from 'react'
import { Table } from 'antd'
import { ColumnsType } from 'antd/es/table'

interface props {
  title: () => React.ReactNode
  footer: () => React.ReactNode
  columns: ColumnsType<any>
  dataSource: any[]
}

const DataTable: React.FC<props> = ({ title, footer, columns, dataSource }) => {
  return (
    <Table
      scroll={{ x: true }}
      columns={columns}
      dataSource={dataSource}
      rowKey={'id'}
      title={title}
      footer={footer}
      pagination={false}
      bordered
      rowClassName={(record) => {
        if(record.status && record.status === 'new') {
          return 'new-bid'
        }
        return ''
      }}
    />
  )
}

export default DataTable
