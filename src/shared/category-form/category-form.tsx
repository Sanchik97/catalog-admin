import React from 'react'
import { Card, Col, Divider, Form, Input, Row, Tabs } from 'antd'
import { FormAdditionalInputs, FormButtons, FormUploadImage, UploadMultiple } from '@app/shared'
import { ICategory } from '@app/interfaces/categories'
import { idType, IImage } from '@app/interfaces'
import { getLocaleTitle, locales } from '@app/locales'

const { TabPane } = Tabs

interface props {
  submitFunction: (category: ICategory, id?: idType) => void
  isLoading: boolean
  category?: ICategory
}

const CategoryForm: React.FC<props> = ({ submitFunction, isLoading, category }) => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    const newValues = values
    if (category) {
      newValues.sliders = newValues.sliders.map((image: IImage | idType) => {
        if (typeof image === 'object') return image.id
        return image
      })
    }

    submitFunction(newValues, category?.id)
  }

  const editCategory: any = category

  if (category) {
    editCategory.title_ru = category.i18n.find(({ locale }) => locale === 'ru')?.title
    editCategory.title_uz = category.i18n.find(({ locale }) => locale === 'uz')?.title
    editCategory.page_ru = category.page.i18n.find(({ locale }) => locale === 'ru')
    editCategory.page_uz = category.page.i18n.find(({ locale }) => locale === 'uz')
  }

  return (
    <Form onFinish={onFinish} layout={'vertical'} form={form} initialValues={editCategory}>
      <Row gutter={[16, 16]}>
        <Col xl={12} xs={24}>
          <Card title={'Общая информация'}>
            <Tabs type={'card'}>
              {locales.map((locale) => (
                <TabPane forceRender={true} key={locale} tab={getLocaleTitle(locale)}>
                  <Form.Item
                    name={`title_${locale}`}
                    label={`Название категории ${locale.toUpperCase()}`}
                    rules={[{ required: true }]}
                  >
                    <Input placeholder={'Введите название категории'} />
                  </Form.Item>
                  <FormAdditionalInputs locale={locale} />
                </TabPane>
              ))}
            </Tabs>
          </Card>
        </Col>
        <Col xl={12} xs={24}>
          <Card title={'Изображения'}>
            <FormUploadImage
              label={'Изображение категории'}
              formInstance={form}
              imageUrl={category?.image.link}
            />
            <Divider />
            <Form.Item name={'sliders'} label={'Изображения слайдера'}>
              <UploadMultiple images={category?.sliders} form={form} />
            </Form.Item>
          </Card>
        </Col>
        <Col xs={24}>
          <FormButtons isLoading={isLoading} />
        </Col>
      </Row>
    </Form>
  )
}

export default CategoryForm
