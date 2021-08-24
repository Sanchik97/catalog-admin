import React from 'react'
import { Link } from 'react-router-dom'
import {PlusCircleOutlined} from '@ant-design/icons'
import {privateRoutes} from '@app/routes'
import {IRoute} from "@app/interfaces"

interface props {
  route: keyof IRoute
}

const AddLink: React.FC<props> = ({ route }) => {
  return (
    <Link
      to={privateRoutes[route].path}
      className={'ant-btn ant-btn-primary ant-btn-background-ghost'}
    >
      <PlusCircleOutlined />
      <span>Добавить</span>
    </Link>
  )
}

export default AddLink
