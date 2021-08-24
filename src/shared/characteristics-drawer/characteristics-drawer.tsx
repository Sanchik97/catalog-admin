import React, { useState } from 'react'
import { Button, Drawer, message } from 'antd'
import { EditOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { CharacteristicsForm, SpaceWithDivider } from '@app/shared'
import { useMutation } from 'react-query'
import { AttributesService } from '@app/api'
import { IAttributeType, IPostAttribute } from '@app/interfaces/attributes'
import { idType } from '@app/interfaces'
import { queryClient } from '@app/index'
import {ATTRIBUTES_KEY, ATTRIBUTES_SELECT_KEY} from '@app/hooks/query/attributes'
import { AxiosResponse } from 'axios'

interface props {
  attributeType?: IAttributeType
  children: React.ReactNode
  block?:boolean
}

const CharacteristicsDrawer: React.FC<props> = ({ attributeType, children , block}) => {
  const [visible, setVisible] = useState<boolean>(false)
  const showDrawer = () => setVisible(true)
  const hideDrawer = () => setVisible(false)

  const onSuccess = (response: AxiosResponse<any>) => {
    message.success('Успешно')
    queryClient.invalidateQueries(ATTRIBUTES_KEY)
    queryClient.invalidateQueries(ATTRIBUTES_SELECT_KEY)
    hideDrawer()
  }

  const onError = () => {
    message.error('Ошибка, возможно, такая характеристика уже существует')
  }

  const { isLoading: isCreateLoading, mutateAsync: createAttribute } = useMutation(
    AttributesService.create,
    { onSuccess, onError },
  )
  const { isLoading: isUpdateLoading, mutateAsync: updateAttribute } = useMutation(
    AttributesService.update,
    { onSuccess, onError },
  )

  const submitFunction = (attribute: IPostAttribute, id?: idType) => {
    if (attributeType) {
      return updateAttribute({
        attribute,
        id: id!,
      })
    }

    return createAttribute(attribute)
  }

  return (
    <>
      <Button
        type={'primary'}
        ghost={!attributeType}
        onClick={showDrawer}
        icon={attributeType ? <EditOutlined /> : <PlusCircleOutlined />}
        block={block}
      >
        {children}
      </Button>
      <Drawer
        title={attributeType ? 'Изменить атрибут' : 'Добавить атрибут'}
        closable={true}
        onClose={hideDrawer}
        visible={visible}
        destroyOnClose={true}
        width={450}
        footer={
          <SpaceWithDivider>
            <Button
              htmlType={'submit'}
              type={'primary'}
              form={'characteristic-form'}
              disabled={isCreateLoading || isUpdateLoading}
              loading={isCreateLoading || isUpdateLoading}
            >
              Отправить
            </Button>
            <Button onClick={hideDrawer} disabled={isCreateLoading || isUpdateLoading}>
              Отменить
            </Button>
          </SpaceWithDivider>
        }
      >
        <CharacteristicsForm submitFunction={submitFunction} attributeType={attributeType} />
      </Drawer>
    </>
  )
}

export default React.memo(CharacteristicsDrawer)
