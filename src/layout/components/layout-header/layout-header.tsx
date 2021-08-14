import React from 'react'
import { Button, Layout as AntdLayout, message, Space } from 'antd'
import styles from './layout-header.module.scss'
import { LogoutOutlined } from '@ant-design/icons'
import { useAuthUserInformation } from '@app/hooks/query/auth'
import { useMutation } from 'react-query'
import { AuthService } from '@app/api'
import { AUTH_TOKEN } from '@app/constants/auth'
import { useHistory } from 'react-router-dom'
import { publicRoutes } from '@app/routes'

const { Header } = AntdLayout

interface props {}

const LayoutHeader: React.FC<props> = () => {
  const { data } = useAuthUserInformation()
  const { push } = useHistory()

  const { isLoading, mutateAsync } = useMutation(AuthService.logout, {
    onSuccess: () => {
      localStorage.removeItem(AUTH_TOKEN)
      push(publicRoutes.auth.path)
    },
    onError: () => {
      message.error('Ошибка! Что-то пошло не так')
    },
  })

  const logout = () => mutateAsync()

  return (
    <Header className={styles.header}>
      <Space size={32}>
        <div className={styles.wrapper}>
          <span className={styles.name}>{data?.name}</span>
          <span className={styles.email}>{data?.email}</span>
        </div>
        <Button
          type={'primary'}
          icon={<LogoutOutlined />}
          onClick={logout}
          disabled={isLoading}
          loading={isLoading}
        >
          Выйти
        </Button>
      </Space>
    </Header>
  )
}

export default LayoutHeader
