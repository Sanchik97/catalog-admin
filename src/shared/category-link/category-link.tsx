import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { idType } from '@app/interfaces'
import { privateRoutes } from '@app/routes'

interface props {
  title: string
  withTitle?: boolean
  id: idType
}

const CategoryLink: React.FC<props> = ({ title, withTitle = false, id }) => {
  return (
    <Typography.Text type={'secondary'}>
      {withTitle && 'Категория:'}{' '}
      <Link to={privateRoutes.categories.path + '/details/' + id}>{title}</Link>
    </Typography.Text>
  )
}

export default CategoryLink
