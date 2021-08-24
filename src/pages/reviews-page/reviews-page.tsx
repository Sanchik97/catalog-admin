import React from 'react'
import { useReviews } from '@app/hooks/query/reviews'
import { Skeleton } from 'antd'
import { ErrorBoundary, PageInfo } from '@app/shared'
import { ReviewsTable } from '@app/pages/reviews-page/components'

interface props {}

const ReviewsPage: React.FC<props> = () => {
  const { data, isLoading, isError } = useReviews()

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  return (
    <PageInfo title={'Отзывы'} subTitle={'Список всех отзывов'}>
      <ReviewsTable data={data!} />
    </PageInfo>
  )
}

export default ReviewsPage
