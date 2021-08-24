import React from 'react'
import { useProduct } from '@app/hooks/query/products'
import { useHistory, useParams } from 'react-router-dom'
import { message, Skeleton } from 'antd'
import { ErrorBoundary, PageInfo, ProductForm } from '@app/shared'
import { useMutation } from 'react-query'
import { ProductsService } from '@app/api'
import { idType } from '@app/interfaces'

interface props {}

const EditProductPage: React.FC<props> = () => {
  const { goBack } = useHistory()
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, isError } = useProduct(id)
  const { isLoading: isEditLoading, mutateAsync } = useMutation(ProductsService.update, {
    onSuccess: () => {
      message.success('Товар успешно изменен')
      goBack()
    },
    onError: () => {
      message.error('Ошибка! Попробуйте, пожалуйста, снова')
    },
  })

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  const submitFunction = (product: any, id?: idType) => mutateAsync({ product, id: id! })

  return (
    <PageInfo title={'Редактировать товар'}>
      <ProductForm submitFunction={submitFunction} isLoading={isEditLoading} product={data} />
    </PageInfo>
  )
}

export default EditProductPage
