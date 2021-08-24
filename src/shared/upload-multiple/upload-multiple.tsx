import React, { useState } from 'react'
import { FormInstance, message, Typography, Upload } from 'antd'
import { AUTH_TOKEN } from '@app/constants/auth'
import { UploadOutlined } from '@ant-design/icons'
import { UploadFile } from 'antd/es/upload/interface'
import { useMutation } from 'react-query'
import { ImagesService } from '@app/api'
import { idType, IImage } from '@app/interfaces'
import styles from './upload-multiple.module.scss'

interface props {
  form: FormInstance<{ sliders: idType[] }>
  images?: IImage[]
}

const UploadMultiple: React.FC<props> = ({ form, images }) => {
  const [fileList, setFileList] = useState<UploadFile[]>(
    images
      ? images.map(({ id, filename, link }) => ({
          uid: id.toString(),
          name: filename,
          url: link,
          response: {
            id,
          },
        }))
      : [],
  )
  const { mutateAsync } = useMutation(ImagesService.delete, {
    onSuccess: () => {
      message.success('Изображение успешно удалено')
    },
    onError: () => {
      message.error('Ошибка! Попробуйте, пожалуйста, снова')
    },
  })

  const handleChange = ({ file, fileList }: any) => {
    if (file.status === 'done') {
      const formSliders = form.getFieldValue('sliders')
      form.setFieldsValue({
        sliders: formSliders ? [...formSliders, file.response.id] : [file.response.id],
      })
    }

    setFileList(fileList)
  }

  const handleRemove = async (file: UploadFile) => {
    if (file && file.response.id) {
      await mutateAsync(file.response.id)
      const filteredFileList = fileList.filter(({ uid }) => uid !== file.uid)

      setFileList(filteredFileList)
      form.setFieldsValue({
        sliders: filteredFileList.map((file: UploadFile) => file.response.id as idType),
      })
    }
  }

  return (
    <div className={styles.wrapper}>
      <Upload.Dragger
        name="image"
        listType={'picture'}
        action={process.env.REACT_APP_API_URL + '/api/images'}
        headers={{
          Authorization: 'Bearer ' + localStorage.getItem(AUTH_TOKEN),
        }}
        defaultFileList={fileList}
        onChange={handleChange}
        onRemove={handleRemove}
        multiple={true}
      >
        <div className={styles.body}>
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Нажмите или перенесите изображения сюда.</p>
          <Typography.Text type={'danger'} strong>
            Вы можете выбрать только файл с расширением: png, jpg или jpeg. Максимальный допустимый
            размер файла составляет 2 мегабайта.
          </Typography.Text>
        </div>
      </Upload.Dragger>
    </div>
  )
}

export default UploadMultiple
