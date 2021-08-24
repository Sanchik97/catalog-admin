import React from 'react'
import { useClients } from '@app/hooks/query/clients'
import { Skeleton } from 'antd'
import { ErrorBoundary, PageInfo } from '@app/shared'
import { BidsTable } from '@app/pages/bids-page/components'

interface props {}

const BidsPage: React.FC<props> = () => {
  const { data, isLoading, isError } = useClients()

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  return (
    <PageInfo title={'Заявки'} subTitle={'Список всех заявок'}>
      <BidsTable data={data!} />
    </PageInfo>
  )
}

export default BidsPage
