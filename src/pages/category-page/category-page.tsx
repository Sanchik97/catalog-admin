import React from 'react'
import { useParams } from 'react-router-dom'
import { useCategory } from '@app/hooks/query/categories'
import { Card, Col, Descriptions, Row, Skeleton } from 'antd'
import {
  AdditionalInformation,
  DescriptionsTable,
  EditLink,
  ErrorBoundary,
  ImageWithFallback,
  PageInfo,
} from '@app/shared'

interface props {}

const CategoryPage: React.FC<props> = () => {
  const { id } = useParams<{ id: string }>()
  const { isLoading, isError, data } = useCategory(id)

  if (isLoading) return <Skeleton active />
  if (isError) return <ErrorBoundary />

  const { title, image, sliders, created_at, page, i18n } = data!

  return (
    <React.Fragment>
      <PageInfo
        title={title}
        subTitle={'Подробная информация о категории'}
        extra={[<EditLink id={id} route={'categories'} key={'1'} />]}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24}>
            <Card title={'Общая информация'}>
              <DescriptionsTable title={<ImageWithFallback src={image.link} height={150} />}>
                <Descriptions.Item label={'ID'}>{id}</Descriptions.Item>
                <Descriptions.Item label={'Дата создания'}>
                  {new Date(created_at).toLocaleDateString()}
                </Descriptions.Item>
              </DescriptionsTable>
            </Card>
          </Col>
          {i18n.map(({ id, title, locale }) => (
            <Col key={id} xs={24}>
              <Card title={'Локализация ' + locale}>
                <DescriptionsTable>
                  <Descriptions.Item label={'Название категории'}>{title}</Descriptions.Item>
                </DescriptionsTable>
              </Card>
            </Col>
          ))}

          <AdditionalInformation page={page} />

          <Col xs={24}>
            <Card title={'Изображения слайдера'}>
              <Row gutter={[16, 16]}>
                {sliders.map(({ link, id }) => (
                  <Col key={id} xs={24} lg={6}>
                    <ImageWithFallback src={link} />
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </PageInfo>
    </React.Fragment>
  )
}

export default CategoryPage
