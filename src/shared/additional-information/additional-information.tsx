import React from 'react'
import { Card, Col, Descriptions } from 'antd'
import { DescriptionsTable } from '@app/shared'
import { IPageInformation } from '@app/interfaces'

interface props {
  page: IPageInformation
}

const AdditionalInformation: React.FC<props> = ({ page }) => {
  return (
    <React.Fragment>
      {page.i18n.map(({ id, locale, title, keywords, description }) => (
        <Col key={id} xs={24}>
          <Card title={'Дополнительная информация ' + locale}>
            <DescriptionsTable>
              <Descriptions.Item label={'Meta Title'}>{title}</Descriptions.Item>
              <Descriptions.Item label={'Meta Description'}>{description}</Descriptions.Item>
              <Descriptions.Item label={'Meta Keywords'}>{keywords}</Descriptions.Item>
            </DescriptionsTable>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  )
}

export default AdditionalInformation
