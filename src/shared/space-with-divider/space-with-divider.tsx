import React from 'react'
import { Divider, Space } from 'antd'

interface props {
  type?: 'vertical' | 'horizontal'
}

const SpaceWithDivider: React.FC<props> = ({ children, type = 'vertical' }) => {
  return <Space split={<Divider type={type} />}>{children}</Space>
}

export default SpaceWithDivider
