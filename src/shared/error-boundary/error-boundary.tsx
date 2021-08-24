import React from 'react'
import { Button, Result } from 'antd'

interface props {}

const ErrorBoundary: React.FC<props> = () => {
  const reloadPage = () => window.location.reload()

  return (
    <Result
      status="error"
      title="Ошибка!"
      subTitle="Простите, что-то пошло не так. В скором времени мы постараемся исправить данную проблему!"
      extra={[
        <Button key={'1'} onClick={reloadPage} danger>
          Обновить страницу
        </Button>,
      ]}
    />
  )
}

export default ErrorBoundary
