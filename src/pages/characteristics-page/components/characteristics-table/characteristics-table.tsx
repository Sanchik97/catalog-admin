import React from 'react'
import { IAttributeResponse, IAttributeType, IAttributeTypeIntl } from '@app/interfaces/attributes'
import {
  CharacteristicsDrawer,
  DataTable,
  DeleteModal,
  Pagination,
  SearchInput,
  SpaceWithDivider,
} from '@app/shared'
import { ATTRIBUTES_KEY } from '@app/hooks/query/attributes'
import { ColumnsType } from 'antd/es/table'
import { idType } from '@app/interfaces'
import { AttributesService } from '@app/api'

interface props {
  data: IAttributeResponse
}

const CharacteristicsTable: React.FC<props> = ({ data }) => {
  const { data: attributes, ...pagination } = data
  const tableTitle = () => <SearchInput fetchingQueryKey={ATTRIBUTES_KEY} />
  const tableFooter = () => <Pagination fetchingQueryKey={ATTRIBUTES_KEY} pagination={pagination} />

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id: idType) => <span># {id}</span>,
    },
    {
      title: 'Наименование',
      dataIndex: 'title',
    },
    {
      title: 'Наименование UZ',
      dataIndex: 'i18n',
      render: (intl: IAttributeTypeIntl[]) => (
        <span>{intl.find(({ locale }) => locale === 'uz')?.title}</span>
      ),
    },
    {
      title: 'Дата создания',
      dataIndex: 'created_at',
      render: (text: string) => <>{new Date(text).toLocaleDateString()}</>,
    },
    {
      title: 'Действия',
      key: 'actions',
      align: 'right',
      render: (attributeType: IAttributeType) => (
        <SpaceWithDivider>
          <CharacteristicsDrawer attributeType={attributeType}>Изменить</CharacteristicsDrawer>
          <DeleteModal
            id={attributeType.id}
            invalidateQueryKey={ATTRIBUTES_KEY}
            deleteFunction={AttributesService.delete}
          />
        </SpaceWithDivider>
      ),
    },
  ]

  return (
    <DataTable title={tableTitle} footer={tableFooter} columns={columns} dataSource={attributes} />
  )
}

export default CharacteristicsTable
