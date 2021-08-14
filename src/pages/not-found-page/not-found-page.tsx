import React from 'react'
import {Button, Result} from "antd"
import {useHistory} from "react-router-dom"
import {privateRoutes} from "@app/routes"

interface props {

}

const NotFoundPage: React.FC<props> = () => {
	const {push} = useHistory()
	const goBack = () => push(privateRoutes.home.path)

	return (
		<Result
			status="404"
			title="404"
			subTitle="Ошибка! Запрашиваемая страница не найдена."
			extra={<Button type="primary" onClick={goBack}>Вернуться на главную</Button>}
		/>
	)
}

export default NotFoundPage
