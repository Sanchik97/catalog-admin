import React from 'react'
import { ErrorBoundary, ImageWithFallback, PageInfo } from '@app/shared'
import { useSettings } from '@app/hooks/query/settings'
import { Descriptions, Divider, Skeleton } from 'antd'
import logo from '@assets/images/logo.svg'

interface props {}

const HomePage: React.FC<props> = () => {
  const { isLoading, isError, data } = useSettings()

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  const {
    address_ru,
    address_uz,
    email,
    phone1,
    phone2,
    phone3,
    schedule_uz,
    schedule_ru,
    seo_uz,
    seo_ru,
    instagram,
    telegram,
    sliders,
  } = data!.fields

  return (
    <PageInfo
      title={'Информация о компании'}
      extra={[<img key={'1'} src={logo} alt={'Ards Lux'} />]}
    >
      <Descriptions title="Контактная информация">
        <Descriptions.Item label="Адрес RU">{address_ru}</Descriptions.Item>
        <Descriptions.Item label="Адрес UZ">{address_uz}</Descriptions.Item>
        <Descriptions.Item label="Email">{email}</Descriptions.Item>
        <Descriptions.Item label="Номер телефона 1">{phone1}</Descriptions.Item>
        <Descriptions.Item label="Номер телефона 2">{phone2}</Descriptions.Item>
        <Descriptions.Item label="Номер телефона 3">{phone3}</Descriptions.Item>
        <Descriptions.Item label="График работы RU">{schedule_ru}</Descriptions.Item>
        <Descriptions.Item label="График работы UZ">{schedule_uz}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions title={'SEO'}>
        <Descriptions.Item label={'Title RU'}>{seo_ru.title}</Descriptions.Item>
        <Descriptions.Item label={'Description RU'}>{seo_ru.description}</Descriptions.Item>
        <Descriptions.Item label={'Keywords RU'}>{seo_ru.keywords}</Descriptions.Item>
        <Descriptions.Item label={'Title UZ'}>{seo_uz.title}</Descriptions.Item>
        <Descriptions.Item label={'Description UZ'}>{seo_uz.description}</Descriptions.Item>
        <Descriptions.Item label={'Keywords UZ'}>{seo_uz.keywords}</Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions title={'Социальные сети'}>
        <Descriptions.Item label={'Instagram'}>
          <a target={'_blank'} rel={'noopener noreferrer'} href={instagram.link}>
            {instagram.title}
          </a>
        </Descriptions.Item>
        <Descriptions.Item label={'Telegram'}>
          <a target={'_blank'} rel={'noopener noreferrer'} href={telegram.link}>
            {telegram.title}
          </a>
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <Descriptions title={'Изображения слайдера'}>
        {sliders.map(({ link, filename, id }) => (
          <Descriptions.Item key={id}>
            <ImageWithFallback height={400} src={link} alt={filename} preview={true} />
          </Descriptions.Item>
        ))}
      </Descriptions>
    </PageInfo>
  )
}

export default HomePage
