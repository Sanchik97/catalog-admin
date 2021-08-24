import React from 'react'
import { PageInfo, ProductForm } from '@app/shared'
import {useMutation} from "react-query"
import {ProductsService} from "@app/api"
import {message} from "antd"
import {idType} from "@app/interfaces"
import {useHistory} from "react-router-dom"

interface props {}

const AddProductPage: React.FC<props> = () => {
  const {goBack} = useHistory()
  const {mutateAsync, isLoading} = useMutation(ProductsService.create, {
    onSuccess: () => {
      message.success('Товар успешно добавлен')
      goBack()
    },
    onError: () => {
      message.error('Ошибка! Возможно, такой товар уже существует')
    }
  })

  const submitFunction = (product: any, id?: idType) => mutateAsync(product)

  return (
    <PageInfo title={'Добавить продукт'}>
      <ProductForm isLoading={isLoading} submitFunction={submitFunction} />
    </PageInfo>
  )
}

export default AddProductPage
