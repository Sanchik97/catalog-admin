import React, { useState } from 'react'
import { FormInstance, Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'
import { AUTH_TOKEN } from '@app/constants/auth'
import {beforeUpload} from "@app/utils/beforeUpload"

interface props {
  form: FormInstance<any>
  imageUrl?: string
}

const UploadSingle: React.FC<props> = ({ form, imageUrl: url }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [imageUrl, setImageUrl] = useState<string | undefined>(url)

  const uploadButton = (
    <div>
      {isLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Загрузить</div>
    </div>
  )

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setIsLoading(true)
      return
    }
    if (info.file.status === 'done') {
      setImageUrl(info.file.response.link)
      form.setFieldsValue({
        image_id: info.file.response.id,
      })
    }
  }

  return (
    <Upload
      name="image"
      showUploadList={false}
      listType="picture-card"
      className="avatar-uploader"
      action={process.env.REACT_APP_API_URL + '/api/images'}
      headers={{
        Authorization: 'Bearer ' + localStorage.getItem(AUTH_TOKEN),
      }}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      disabled={isLoading}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  )
}

export default UploadSingle
