import React from 'react'
import { AddLink, ErrorBoundary, PageInfo } from '@app/shared'
import { CategoriesTable } from '@app/pages/categories-page/components'
import { useCategories } from '@app/hooks/query/categories'
import { Skeleton } from 'antd'

interface props {}

const CategoriesPage: React.FC<props> = () => {
  const { data, isLoading, isError } = useCategories()

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  return (
    <PageInfo
      title={'Категории'}
      subTitle={'Список всех категорий'}
      extra={[<AddLink key={'1'} route={'addCategory'} />]}
    >
      <CategoriesTable categoryResponse={data!} />
    </PageInfo>
  )
}

export default CategoriesPage
