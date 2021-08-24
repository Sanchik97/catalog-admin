import React from 'react'
import { CategoryForm, PageInfo } from '@app/shared'
import { useMutation } from 'react-query'
import { CategoriesService } from '@app/api'
import { message } from 'antd'
import { ICategory } from '@app/interfaces/categories'
import { idType } from '@app/interfaces'
import { useHistory } from 'react-router-dom'

interface props {}

const AddCategoryPage: React.FC<props> = () => {
  const {goBack} = useHistory()
  const { mutateAsync, isLoading } = useMutation(CategoriesService.create, {
    onSuccess: () => {
      message.success('Категория успешно создана')
      goBack()
    },
    onError: () => {
      message.error('Ошибка! Попробуйте, пожалуйста, позже')
    },
  })

  const submitFunction = (category: ICategory, id?: idType) => mutateAsync(category)

  return (
    <PageInfo title={'Добавить категорию'}>
      <CategoryForm submitFunction={submitFunction} isLoading={isLoading} />
    </PageInfo>
  )
}

export default AddCategoryPage
