import React from 'react'
import { Menu } from 'antd'
import {
  AppstoreAddOutlined,
  ExperimentOutlined,
  InfoCircleOutlined,
  MessageOutlined,
  SettingOutlined,
  ShopOutlined,
  ShoppingOutlined,
} from '@ant-design/icons'
import { privateRoutes } from '@app/routes'
import { Link, useLocation } from 'react-router-dom'

interface props {
}

const menu = [
	{
		title: 'Информация',
		path: privateRoutes.home.path,
		icon: <InfoCircleOutlined/>,
	},
	{
		title: 'Заявки',
		path: privateRoutes.bids.path,
		icon: <AppstoreAddOutlined/>
	},
	{
		title: 'Отзывы',
		path: privateRoutes.reviews.path,
		icon: <MessageOutlined/>
	},
	{
		title: 'Категории',
		path: privateRoutes.categories.path,
		icon: <ShopOutlined/>
	},
	{
		title: 'Товары',
		path: privateRoutes.products.path,
		icon: <ShoppingOutlined/>
	},
	{
		title: 'Характеристики',
		path: privateRoutes.characteristics.path,
		icon: <ExperimentOutlined/>
	},
	{
		title: 'Настройки',
		path: privateRoutes.settings.path,
		icon: <SettingOutlined/>
	}
]

const LayoutMenu: React.FC<props> = () => {
	const {pathname} = useLocation()

	return (
		<Menu theme="light" mode="inline" defaultSelectedKeys={[pathname]}>
			{menu.map(({title, icon, path}) => {
				return (
					<Menu.Item key={path} icon={icon}>
						<Link to={path!}>{title}</Link>
					</Menu.Item>
				)
			})}
		</Menu>
	)
}

export default LayoutMenu
