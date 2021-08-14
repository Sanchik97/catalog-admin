import React from 'react'
import {Button, Form, Input, message} from 'antd'
import {LockOutlined, LoginOutlined, MailOutlined} from '@ant-design/icons'
import {useMutation} from 'react-query'
import {AuthService} from '@app/api'
import {ILoginData, ILoginResponse} from '@app/interfaces/user'
import {AxiosResponse} from 'axios'
import {AUTH_TOKEN} from '@app/constants/auth'
import {useGoBack} from '@app/hooks/useGoBack'

interface props {
}


const AuthForm: React.FC<props> = () => {
	const {goBack} = useGoBack('home')

	const {isLoading, mutateAsync} = useMutation(AuthService.login, {
		onSuccess: ({data}: AxiosResponse<ILoginResponse>) => {
			localStorage.setItem(AUTH_TOKEN, data.access_token)
			message.success('Вы успешно авторизовались')
			goBack()
		},
		onError: () => {
			message.error('Ошибка авторизации. Возможно, вы ввели неверные данные')
		},
	})

	const onFinish = (values: ILoginData) => mutateAsync(values)

	return (
		<Form onFinish={onFinish}>
			<Form.Item
				name={'email'}
				rules={[
					{
						required: true,
						message: 'Поле обязательно для заполнения',
					},
					{
						type: "email",
						message: 'Email не валиден'
					}
				]}
			>
				<Input prefix={<MailOutlined/>} placeholder={'Введите email'}/>
			</Form.Item>
			<Form.Item
				name={'password'}
				rules={[
					{
						required: true,
						message: 'Поле обязательно для заполнения',
					},
				]}
			>
				<Input.Password prefix={<LockOutlined/>} placeholder={'Введите пароль'}/>
			</Form.Item>
			<Form.Item>
				<Button
					block
					type={'primary'}
					htmlType={'submit'}
					icon={<LoginOutlined/>}
					disabled={isLoading}
					loading={isLoading}
				>
					Войти
				</Button>
			</Form.Item>
		</Form>
	)
}

export default AuthForm
