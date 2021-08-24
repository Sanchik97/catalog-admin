import React from 'react'
import { useProduct } from '@app/hooks/query/products'
import { useParams } from 'react-router-dom'
import { Card, Col, Descriptions, Row, Skeleton, Space } from 'antd'
import {
  AdditionalInformation,
  CategoryLink,
  DescriptionsTable,
  EditLink,
  ErrorBoundary,
  ImageWithFallback,
  PageInfo,
} from '@app/shared'
import { priceFormatter } from '@app/utils/priceFormatter'

interface props {}

const ProductPage: React.FC<props> = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading, isError, data } = useProduct(id)

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  const { title, image, created_at, category, attributes, page, price, i18n, sliders } = data!

  return (
    <PageInfo
      subTitle={'Подробная информация о товаре'}
      title={title}
      extra={[<EditLink id={id} route={'products'} key={'1'} />]}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24}>
          <Card title={'Общая информация'}>
            <DescriptionsTable title={<ImageWithFallback src={image.link} />}>
              <Descriptions.Item label={'ID'}>{id}</Descriptions.Item>
              <Descriptions.Item label={'Дата создания'}>
                {new Date(created_at).toLocaleDateString()}
              </Descriptions.Item>
              <Descriptions.Item label={'Категория'}>
                <CategoryLink title={category.title} id={category.id} />
              </Descriptions.Item>
              <Descriptions.Item label={'Цена'}>
                <strong>{priceFormatter(price)}</strong>
              </Descriptions.Item>
            </DescriptionsTable>
          </Card>
        </Col>
        <Col xs={24}>
          <Card title={'Атрибуты'}>
            {attributes.map(({ id, attribute, i18n }) => (
              <DescriptionsTable key={id}>
                <Descriptions.Item label={attribute.title}>
                  <Space>
                    {i18n.map(({ value, id, locale }) => (
                      <React.Fragment key={id}>
                        <strong>{locale}:</strong>
                        <span>{value}</span>
                      </React.Fragment>
                    ))}
                  </Space>
                </Descriptions.Item>
              </DescriptionsTable>
            ))}
          </Card>
        </Col>

        {i18n.map(({ title, id, locale }) => (
          <Col key={id} xs={24}>
            <Card title={'Локализация ' + locale}>
              <DescriptionsTable>
                <Descriptions.Item label={'Название продукта'}>{title}</Descriptions.Item>
              </DescriptionsTable>
            </Card>
          </Col>
        ))}

        <AdditionalInformation page={page} />
        <Col xs={24}>
          <Card title={'Дополнительные изображения'}>
            <Row gutter={[16, 16]}>
              {sliders.map(({ id, link }) => (
                <Col key={id} xs={24} lg={6}>
                  <ImageWithFallback src={link} />
                </Col>
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </PageInfo>
  )
}

export default ProductPage
