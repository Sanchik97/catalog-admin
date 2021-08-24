import React from 'react'
import { IClient } from '@app/interfaces/clients'
import { Button, message } from 'antd'
import { useMutation } from 'react-query'
import { ClientsService } from '@app/api'
import { CheckCircleOutlined } from '@ant-design/icons'
import { queryClient } from '@app/index'
import { CLIENTS_KEY } from '@app/hooks/query/clients'

interface props {
  client: IClient
}

const ClientChangeStatus: React.FC<props> = ({ client }) => {
  const { isLoading, mutateAsync } = useMutation(ClientsService.update, {
    onSuccess: () => {
      message.success('Статус изменен')
      queryClient.invalidateQueries(CLIENTS_KEY)
    },
    onError: () => {
      message.error('Ошибка! Что-то пошло не так')
    },
  })

  const submitFunction = () => mutateAsync({ ...client, status: 'viewed' })

  return (
    <Button
      type={'primary'}
      htmlType={'submit'}
      disabled={isLoading}
      loading={isLoading}
      onClick={submitFunction}
      icon={<CheckCircleOutlined />}
    >
      Изменить статус
    </Button>
  )
}

export default ClientChangeStatus
