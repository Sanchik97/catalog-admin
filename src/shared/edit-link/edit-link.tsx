import React from 'react'
import { Link } from 'react-router-dom'
import { idType, IRoute } from '@app/interfaces'
import { privateRoutes } from '@app/routes'
import { EditOutlined } from '@ant-design/icons'

interface props {
  id: idType
  route: keyof IRoute
}

const EditLink: React.FC<props> = ({ id, route }) => {
  return (
    <Link className={'ant-btn ant-btn-primary'} to={privateRoutes[route].path + '/edit/' + id}>
      <EditOutlined /> <span>Изменить</span>
    </Link>
  )
}

export default EditLink
