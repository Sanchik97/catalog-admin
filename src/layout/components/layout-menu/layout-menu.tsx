import React from 'react'
import {Menu} from 'antd'
import {
	AppstoreAddOutlined,
	HomeOutlined,
	MessageOutlined,
	SettingOutlined,
	ShopOutlined,
	ShoppingOutlined,
} from '@ant-design/icons'
import {privateRoutes} from '@app/routes'
import {Link, useLocation} from 'react-router-dom'

const {SubMenu} = Menu

interface props {
}

const menu = [
	{
		title: 'Главная',
		path: privateRoutes.home.path,
		icon: <HomeOutlined/>,
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
		title: 'Продукты',
		path: privateRoutes.products.path,
		icon: <ShoppingOutlined/>
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
