import React from 'react'
import {
  CategoryLink,
  DataTable,
  DeleteModal,
  EditLink,
  ImageWithFallback,
  Pagination, SearchInput,
  SpaceWithDivider,
} from '@app/shared'
import { ColumnsType } from 'antd/es/table'
import { ICategory, ICategoryResponse } from '@app/interfaces/categories'
import { CATEGORIES_KEY } from '@app/hooks/query/categories'
import { IImage } from '@app/interfaces'
import moment from 'moment'
import { CategoriesService } from '@app/api'

interface props {
  categoryResponse: ICategoryResponse
}

const CategoriesTable: React.FC<props> = ({ categoryResponse }) => {
  const { data, ...pagination } = categoryResponse
  const tableTitle = () => <SearchInput fetchingQueryKey={CATEGORIES_KEY}/>
  const tableFooter = () => <Pagination fetchingQueryKey={CATEGORIES_KEY} pagination={pagination} />

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Наименование',
      key: 'title',
      render: ({ title, id }: ICategory) => <CategoryLink title={title} id={id} />,
    },
    {
      title: 'Изображение',
      dataIndex: 'image',
      render: (image: IImage) => <ImageWithFallback src={image.link} height={50} />,
    },
    {
      title: 'Дата создания',
      dataIndex: 'created_at',
      render: (created_at: string) => <span>{moment(created_at).format('DD-MM-YYYY')}</span>,
    },
    {
      title: 'Действия',
      key: 'actions',
      align: 'right',
      render: ({ id }: ICategory) => (
        <SpaceWithDivider>
          <EditLink id={id} route={'categories'} />
          <DeleteModal
            id={id}
            invalidateQueryKey={CATEGORIES_KEY}
            deleteFunction={CategoriesService.delete}
          />
        </SpaceWithDivider>
      ),
    },
  ]

  return <DataTable title={tableTitle} footer={tableFooter} columns={columns} dataSource={data} />
}

export default CategoriesTable
