import React from 'react'
import { Form, Input } from 'antd'
import { locales } from '@app/locales'
import { IAttributeType, IPostAttribute } from '@app/interfaces/attributes'
import { idType } from '@app/interfaces'

interface props {
  attributeType?: IAttributeType
  submitFunction: (attribute: IPostAttribute, id?: idType) => void
}

const CharacteristicsForm: React.FC<props> = ({ attributeType, submitFunction }) => {
  const onFinish = (values: any) => submitFunction(values, attributeType?.id)

  return (
    <Form
      id={'characteristic-form'}
      onFinish={onFinish}
      layout={'vertical'}
      initialValues={{
        title_ru: attributeType?.i18n.find(({ locale }) => locale === 'ru')?.title,
        title_uz: attributeType?.i18n.find(({ locale }) => locale === 'uz')?.title,
      }}
    >
      {locales.map((locale) => (
        <Form.Item
          key={locale}
          name={`title_${locale}`}
          label={`Наименование атрибута ${locale.toUpperCase()}`}
          rules={[{ required: true }]}
        >
          <Input placeholder={'Введите наименование'} />
        </Form.Item>
      ))}
    </Form>
  )
}

export default CharacteristicsForm
