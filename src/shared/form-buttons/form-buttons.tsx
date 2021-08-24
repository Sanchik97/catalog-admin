import React from 'react'
import { Button, Form } from 'antd'
import { SpaceWithDivider } from '@app/shared'

interface props {
  isLoading: boolean
}

const FormButtons: React.FC<props> = ({ isLoading }) => {
  return (
    <Form.Item>
      <SpaceWithDivider>
        <Button type={'primary'} htmlType={'submit'} disabled={isLoading} loading={isLoading}>
          Отправить
        </Button>
        <Button type={'default'} htmlType={'reset'} disabled={isLoading}>
          Сбросить
        </Button>
      </SpaceWithDivider>
    </Form.Item>
  )
}

export default FormButtons
