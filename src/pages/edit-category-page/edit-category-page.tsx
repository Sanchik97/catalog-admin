import React from 'react'
import { useCategory } from '@app/hooks/query/categories'
import { useHistory, useParams } from 'react-router-dom'
import { message, Skeleton } from 'antd'
import { CategoryForm, ErrorBoundary, PageInfo } from '@app/shared'
import { useMutation } from 'react-query'
import { CategoriesService } from '@app/api'
import { ICategory } from '@app/interfaces/categories'
import { idType } from '@app/interfaces'

interface props {}

const EditCategoryPage: React.FC<props> = () => {
  const { goBack } = useHistory()
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useCategory(id, {
    refetchOnMount: false,
  })
  const { isLoading: isEditLoading, mutateAsync } = useMutation(CategoriesService.update, {
    onSuccess: () => {
      message.success('Категория успешно изменена')
      goBack()
    },
    onError: () => {
      message.error('Ошибка! Попробуйте, пожалуйста, позже')
    },
  })

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  const submitFunction = (category: ICategory, id?: idType) => mutateAsync({ category, id: id! })

  return (
    <PageInfo title={'Редактировать категорию'}>
      <CategoryForm submitFunction={submitFunction} isLoading={isEditLoading} category={data} />
    </PageInfo>
  )
}

export default EditCategoryPage
