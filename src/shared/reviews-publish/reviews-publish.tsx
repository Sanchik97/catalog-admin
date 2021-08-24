import React from 'react'
import { Button, message } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { useMutation } from 'react-query'
import { ReviewsService } from '@app/api'
import { idType } from '@app/interfaces'
import { queryClient } from '@app/index'
import { REVIEWS_KEY } from '@app/hooks/query/reviews'

interface props {
  id: idType
  status: number
}

const ReviewsPublish: React.FC<props> = ({ id, status }) => {
  const { mutateAsync, isLoading } = useMutation(ReviewsService.update, {
    onSuccess: () => {
      message.success('Отзыв успешно опубликован')
      queryClient.invalidateQueries(REVIEWS_KEY)
    },
    onError: () => {
      message.error('Ошибка! Что-то пошло не так')
    },
  })

  const submitFunction = (values: any) => mutateAsync({ status: 1, id })

  return (
    <Button
      htmlType={'submit'}
      type={'primary'}
      icon={<CheckCircleOutlined />}
      loading={isLoading}
      disabled={isLoading || !!status}
      onClick={submitFunction}
    >
      {status ? 'Отзыв опубликован' : 'Опубликовать'}
    </Button>
  )
}

export default ReviewsPublish
