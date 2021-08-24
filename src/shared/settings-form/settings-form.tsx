import React from 'react'
import { ISettingsFields } from '@app/interfaces/settings'
import {Card, Col, Form, Input, message, Row, Tabs, Typography} from 'antd'
import { FormButtons, UploadMultiple } from '@app/shared'
import { getLocaleTitle, locales } from '@app/locales'
import {useMutation} from "react-query"
import {SettingsService} from "@app/api"
import {queryClient} from "@app/index"
import {SETTINGS_KEY} from "@app/hooks/query/settings"
import {idType, IImage} from "@app/interfaces"

interface props {
  fields: ISettingsFields
}

const SettingsForm: React.FC<props> = ({ fields }) => {
  const [form] = Form.useForm()
  const {isLoading, mutateAsync} = useMutation(SettingsService.update, {
    onSuccess: () => {
      message.success('Информация о компании успешно обновлена')
      queryClient.invalidateQueries(SETTINGS_KEY)
    },
    onError: () => {
      message.error('Ошибка! Попробуйте, пожалуйста, позже')
    }
  })

  const onFinish = (values: ISettingsFields) => {
    const newValues: any = values

    newValues.sliders = newValues.sliders.map((image: IImage | idType) => {
      if (typeof image === 'object') return image.id
      return image
    })

    return mutateAsync(newValues)
  }

  return (
    <Form form={form} onFinish={onFinish} initialValues={fields} layout={'vertical'}>
      <Row gutter={[32, 32]}>
        <Col xs={24} xl={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <Card title={'Общая информация'}>
                <Tabs type={'card'}>
                  {locales.map((locale) => (
                    <Tabs.TabPane key={locale} tab={getLocaleTitle(locale)} forceRender>
                      <Form.Item
                        name={`address_${locale}`}
                        label={'Адрес'}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder={'Введите адрес'} />
                      </Form.Item>
                      <Form.Item
                        name={`schedule_${locale}`}
                        label={'Режим работы'}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder={'Введите режим работы'} />
                      </Form.Item>
                      <Typography.Title level={4}>SEO</Typography.Title>
                      <Form.Item
                        name={[`seo_${locale}`, 'title']}
                        label={'META Title'}
                        rules={[{ required: true }]}
                      >
                        <Input placeholder={'Введите META Title'} />
                      </Form.Item>
                      <Form.Item name={[`seo_${locale}`, 'description']} label={'META Description'}>
                        <Input placeholder={'Введите META Description'} />
                      </Form.Item>
                      <Form.Item name={[`seo_${locale}`, 'keywords']} label={'META Keywords'}>
                        <Input placeholder={'Введите META Keywords'} />
                      </Form.Item>
                    </Tabs.TabPane>
                  ))}
                </Tabs>
              </Card>
            </Col>
            <Col xs={24}>
              <Card title={'Дополнительная информация'}>
                <Form.Item name={'phone1'} label={'Номер телефона #1'} rules={[{ required: true }]}>
                  <Input placeholder={'Введите первый номер телефона'} />
                </Form.Item>
                <Form.Item name={'phone2'} label={'Номер телефона #2'}>
                  <Input placeholder={'Введите второй номер телефона'} />
                </Form.Item>
                <Form.Item name={'phone3'} label={'Номер телефона #3'}>
                  <Input placeholder={'Введите третий номер телефона'} />
                </Form.Item>
                <Form.Item name={'email'} label={'Электронная почта'} rules={[{ required: true }]}>
                  <Input placeholder={'Введите электронную почту'} />
                </Form.Item>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col xs={24} xl={12}>
          <Row gutter={[16, 16]}>
            <Col xs={24}>
              <Card title={'Изображения'}>
                <Form.Item name={'sliders'} label={'Изображения слайдера на главной странице'}>
                  <UploadMultiple form={form} images={fields.sliders} />
                </Form.Item>
              </Card>
            </Col>
            <Col xs={24}>
              <Card title={'Социальные сети'}>
                <Typography.Title level={5}>Instagram</Typography.Title>
                <Form.Item
                  name={['instagram', 'link']}
                  label={'Адрес аккаунта'}
                  rules={[{ required: true }]}
                >
                  <Input placeholder={'Введите адрес'} />
                </Form.Item>
                <Form.Item
                  name={['instagram', 'title']}
                  label={'Название аккаунта'}
                  rules={[{ required: true }]}
                >
                  <Input placeholder={'Введите название аккаунта'} />
                </Form.Item>
                <Typography.Title level={5}>Telegram</Typography.Title>
                <Form.Item
                  name={['telegram', 'link']}
                  label={'Адрес аккаунта'}
                  rules={[{ required: true }]}
                >
                  <Input placeholder={'Введите адрес'} />
                </Form.Item>
                <Form.Item
                  name={['telegram', 'title']}
                  label={'Название аккаунта'}
                  rules={[{ required: true }]}
                >
                  <Input placeholder={'Введите название аккаунта'} />
                </Form.Item>
              </Card>
            </Col>
            <Col xs={24}>
              <FormButtons isLoading={isLoading} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  )
}

export default SettingsForm
