import React from 'react'
import { IReview, IReviewResponse } from '@app/interfaces/reviews'
import {
  DataTable,
  DeleteModal,
  Pagination,
  ReviewsPublish,
  ReviewsText,
  SearchInput,
  SpaceWithDivider,
} from '@app/shared'
import { REVIEWS_KEY } from '@app/hooks/query/reviews'
import { ColumnsType } from 'antd/es/table'
import { idType } from '@app/interfaces'
import { ReviewsService } from '@app/api'

interface props {
  data: IReviewResponse
}

const ReviewsTable: React.FC<props> = ({ data }) => {
  const { data: reviews, ...pagination } = data
  const tableTitle = () => <SearchInput fetchingQueryKey={REVIEWS_KEY} />
  const tableFooter = () => <Pagination fetchingQueryKey={REVIEWS_KEY} pagination={pagination} />

  const columns: ColumnsType = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id: idType) => <span># {id}</span>,
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
      title: 'Текст',
      dataIndex: 'text',
      render: (text: string) => <ReviewsText text={text} />,
    },
    {
      title: 'Дата создания',
      dataIndex: 'created_at'
    },
    {
      title: 'Действия',
      key: 'actions',
      align: 'right',
      render: ({ id, active }: IReview) => (
        <SpaceWithDivider>
          <ReviewsPublish id={id} status={active} />
          <DeleteModal
            id={id}
            deleteFunction={ReviewsService.delete}
            invalidateQueryKey={REVIEWS_KEY}
          />
        </SpaceWithDivider>
      ),
    },
  ]

  return (
    <DataTable title={tableTitle} footer={tableFooter} dataSource={reviews} columns={columns} />
  )
}

export default ReviewsTable
