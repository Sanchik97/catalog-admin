import React from 'react'
import { Form, Input, Typography } from 'antd'
import { localeType } from '@app/locales'

interface props {
  locale: localeType
}

const FormAdditionalInputs: React.FC<props> = ({ locale }) => {
  return (
    <>
      <Typography.Title level={4}>Дополнительные поля</Typography.Title>
      <Form.Item name={[`page_${locale}`, 'title']} label={`SEO Заголовок ${locale.toUpperCase()}`} rules={[{required: true}]}>
        <Input placeholder={'Введите SEO Заголовок'} />
      </Form.Item>
      <Form.Item
        name={[`page_${locale}`, 'description']}
        label={`SEO Описание ${locale.toUpperCase()}`}
        rules={[{required: true}]}
      >
        <Input placeholder={'Введите SEO Описание'} />
      </Form.Item>
      <Form.Item
        name={[`page_${locale}`, 'keywords']}
        label={`SEO Ключевые слова ${locale.toUpperCase()}`}
        rules={[{required: true}]}
      >
        <Input placeholder={'Введите SEO Ключевые слова'} />
      </Form.Item>
    </>
  )
}

export default FormAdditionalInputs
