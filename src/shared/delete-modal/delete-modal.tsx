import React, { useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, message, Modal } from 'antd'
import { idType } from '@app/interfaces'
import { AxiosPromise } from 'axios'
import { useMutation } from 'react-query'
import { queryClient } from '@app/index'

interface props {
  id: idType
  deleteFunction: (id: idType) => AxiosPromise
  invalidateQueryKey: string
}

const DeleteModal: React.FC<props> = ({ invalidateQueryKey, deleteFunction, id }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  const { isLoading, mutateAsync } = useMutation(deleteFunction, {
    onSuccess: async () => {
      message.success('Запись успешно удалена')
      await queryClient.invalidateQueries(invalidateQueryKey)
      hideModal()
    },
    onError: () => {
      message.error('Ошибка! Что-то пошло не так')
    },
  })

  const handleDelete = () => mutateAsync(id)

  return (
    <>
      <Button danger type={'primary'} icon={<DeleteOutlined />} onClick={showModal}>
        Удалить
      </Button>
      <Modal
        title="Title"
        visible={visible}
        onOk={handleDelete}
        confirmLoading={isLoading}
        onCancel={hideModal}
        okText={'Да'}
        okButtonProps={{danger: true}}
      >
        Вы уверены, что хотите удалить данную запись?
      </Modal>
    </>
  )
}

export default React.memo(DeleteModal)
