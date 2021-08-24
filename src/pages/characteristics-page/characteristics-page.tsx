import React from 'react'
import { CharacteristicsDrawer, ErrorBoundary, PageInfo } from '@app/shared'
import { CharacteristicsTable } from '@app/pages/characteristics-page/components'
import { useAttributes } from '@app/hooks/query/attributes'
import { Skeleton } from 'antd'

interface props {}

const CharacteristicsPage: React.FC<props> = () => {
  const { data, isLoading, isError } = useAttributes()

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  return (
    <PageInfo
      title={'Характеристики'}
      subTitle={'Список характеристик товаров'}
      extra={[<CharacteristicsDrawer key={'1'}>Добавить</CharacteristicsDrawer>]}
    >
      <CharacteristicsTable data={data!} />
    </PageInfo>
  )
}

export default CharacteristicsPage
