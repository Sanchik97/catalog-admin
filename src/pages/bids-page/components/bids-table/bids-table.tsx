import React from 'react'
import { IClient, IClientResponse } from '@app/interfaces/clients'
import {
  ClientChangeStatus,
  DataTable,
  DeleteModal,
  Pagination,
  SearchInput,
  SpaceWithDivider,
} from '@app/shared'
import { CLIENTS_KEY } from '@app/hooks/query/clients'
import { ColumnsType } from 'antd/es/table'
import { idType } from '@app/interfaces'
import { Tag } from 'antd'
import { ClientsService } from '@app/api'

interface props {
  data: IClientResponse
}

const BidsTable: React.FC<props> = ({ data }) => {
  const { data: clients, ...pagination } = data
  const tableTitle = () => <SearchInput fetchingQueryKey={CLIENTS_KEY} />
  const tableFooter = () => <Pagination fetchingQueryKey={CLIENTS_KEY} pagination={pagination} />

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (text: idType) => <span># {text}</span>,
    },
    {
      title: 'Имя',
      dataIndex: 'name',
    },
    {
      title: 'Номер телефона',
      dataIndex: 'phone',
    },
    {
      title: 'Дата создания',
      dataIndex: 'created_at',
      render: (text: string) => <span>{new Date(text).toLocaleDateString()}</span>,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      render: (status) => (
        <Tag color={status === 'viewed' ? 'green' : 'volcano'}>
          {status === 'viewed' ? 'Заявка обработана' : 'Новая заявка'}
        </Tag>
      ),
    },
    {
      title: 'Действия',
      key: 'actions',
      align: 'right',
      render: (client: IClient) => (
        <SpaceWithDivider>
          <ClientChangeStatus client={client} />
          <DeleteModal
            id={client.id}
            deleteFunction={ClientsService.delete}
            invalidateQueryKey={CLIENTS_KEY}
          />
        </SpaceWithDivider>
      ),
    },
  ]

  return (
    <DataTable title={tableTitle} footer={tableFooter} columns={columns} dataSource={clients} />
  )
}

export default BidsTable
