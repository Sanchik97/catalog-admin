import React from 'react'
import { useSettings } from '@app/hooks/query/settings'
import { Skeleton } from 'antd'
import { ErrorBoundary, PageInfo, SettingsForm } from '@app/shared'

interface props {}

const SettingsPage: React.FC<props> = () => {
  const { data, isLoading, isError } = useSettings()
  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  return (
    <PageInfo title={'Настройки'} subTitle={'Изменение информации о компании'}>
      <SettingsForm fields={data!.fields} />
    </PageInfo>
  )
}

export default SettingsPage
