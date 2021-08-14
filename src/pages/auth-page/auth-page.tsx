import React, { useEffect } from 'react'
import styles from './auth-page.module.scss'
import { Card, Col, Row, Typography } from 'antd'
import { AuthForm } from '@app/pages/auth-page/components'
import { AUTH_TOKEN } from '@app/constants/auth'
import { useHistory } from 'react-router-dom'
import { privateRoutes } from '@app/routes'

interface props {}

const AuthPage: React.FC<props> = () => {
  const { push } = useHistory()

  useEffect(() => {
    if (localStorage.getItem(AUTH_TOKEN)) {
      push(privateRoutes.home.path)
    }
  }, [push])

  return (
    <div className={styles.wrapper}>
      <Row justify={'center'}>
        <Col xs={24} lg={10} xxl={6}>
          <Card title={'Авторизация'}>
            <Typography.Paragraph>
              Пожалуйста, введите свои данные, чтобы войти в панель администратора.
            </Typography.Paragraph>
            <AuthForm />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default AuthPage
