import React from 'react'
import { Form, FormInstance } from 'antd'
import { UploadSingle } from '@app/shared'

interface props {
  label: string
  imageUrl?: string
  formInstance: FormInstance<any>
}

const FormUploadImage: React.FC<props> = ({ label, imageUrl, formInstance }) => {
  return (
    <Form.Item name={'image_id'} label={label} rules={[{ required: true }]}>
      <UploadSingle imageUrl={imageUrl} form={formInstance} />
    </Form.Item>
  )
}

export default FormUploadImage
