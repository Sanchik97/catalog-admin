import React from 'react'
import { Button, Card, Col, Form, Input, InputNumber, Row, Space, Tabs, Typography } from 'antd'
import {
  CategoriesSelect,
  CharacteristicsDrawer,
  FormAdditionalInputs,
  FormAttributesSelect,
  FormButtons,
  FormUploadImage,
  UploadMultiple,
} from '@app/shared'
import { getLocaleTitle, locales } from '@app/locales'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { idType, IImage } from '@app/interfaces'
import { IProduct } from '@app/interfaces/products'

const { TabPane } = Tabs

interface props {
  submitFunction: (product: any, id?: idType) => void
  isLoading: boolean
  product?: IProduct
}

const ProductForm: React.FC<props> = ({ submitFunction, product, isLoading }) => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    const newValues = values
    if (product) {
      newValues.sliders = newValues.sliders.map((image: IImage | idType) => {
        if (typeof image === 'object') return image.id
        return image
      })
    }

    submitFunction(newValues, product?.id)
  }

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout={'vertical'}
      initialValues={{
        ...product,
        title_ru: product?.i18n.find(({ locale }) => locale === 'ru')?.title,
        title_uz: product?.i18n.find(({ locale }) => locale === 'uz')?.title,
        page_ru: product?.page.i18n.find(({ locale }) => locale === 'ru'),
        page_uz: product?.page.i18n.find(({ locale }) => locale === 'uz'),
        attributes: product?.attributes.map(({ attribute_id, i18n }) => ({
          attribute_id,
          value_ru: i18n.find(({ locale }) => locale === 'ru')?.value,
          value_uz: i18n.find(({ locale }) => locale === 'uz')?.value,
        })),
      }}
    >
      <Row gutter={[32, 32]}>
        <Col xs={24} xl={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <Card title={'Общая информация'}>
                <Tabs type={'card'}>
                  {locales.map((locale) => (
                    <TabPane forceRender key={locale} tab={getLocaleTitle(locale)}>
                      <Form.Item
                        name={`title_${locale}`}
                        label={'Название продукта'}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder={'Введите название'} />
                      </Form.Item>
                      <FormAdditionalInputs locale={locale} />
                    </TabPane>
                  ))}
                </Tabs>
              </Card>
            </Col>
            <Col xs={24}>
              <Card title={'Дополнительная информация'}>
                <Form.Item
                  name={'price'}
                  label={'Цена продукта (в суммах)'}
                  rules={[{ required: true }]}
                >
                  <InputNumber
                    style={{ width: 150 }}
                    formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                    parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                  />
                </Form.Item>
                <CategoriesSelect />
                <Typography.Title level={4}>Характеристики товара</Typography.Title>
                <Form.List name="attributes">
                  {(fields, { add, remove }) => (
                    <>
                      {fields.map(({ key, name, fieldKey, ...restField }) => (
                        <Space
                          key={key}
                          style={{ display: 'flex', marginBottom: 8 }}
                          align="baseline"
                        >
                          <FormAttributesSelect
                            restField={restField}
                            name={[name, 'attribute_id']}
                            fieldKey={[fieldKey, 'attribute_id']}
                          />
                          <Form.Item
                            {...restField}
                            name={[name, 'value_ru']}
                            fieldKey={[fieldKey, 'value_ru']}
                            rules={[{ required: true, message: 'Заполните поле' }]}
                          >
                            <Input placeholder="Значение характеристики RU" />
                          </Form.Item>
                          <Form.Item
                            {...restField}
                            name={[name, 'value_uz']}
                            fieldKey={[fieldKey, 'value_ru']}
                            rules={[{ required: true, message: 'Заполните поле' }]}
                          >
                            <Input placeholder={'Значение характеристики UZ'} />
                          </Form.Item>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      ))}
                      <Form.Item>
                        <Row gutter={[16, 16]}>
                          <Col flex={1}>
                            <Button
                              type="dashed"
                              onClick={() => add()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Добавить поле
                            </Button>
                          </Col>
                          <Col flex={1}>
                            <CharacteristicsDrawer block={true}>
                              Добавить новую характеристику
                            </CharacteristicsDrawer>
                          </Col>
                        </Row>
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} xl={12}>
          <Card title={'Изображения'}>
            <FormUploadImage
              imageUrl={product?.image.link}
              label={'Изображение товара'}
              formInstance={form}
            />
            <Form.Item name={'sliders'} label={'Дополнительные изображения'}>
              <UploadMultiple images={product?.sliders} form={form} />
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

export default ProductForm
