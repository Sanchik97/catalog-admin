import React, { useState } from 'react'
import { Layout as AntdLayout } from 'antd'
import { LayoutFooter, LayoutHeader, LayoutMenu } from '@app/layout/components'
import styles from './layout.module.scss'
import logo from '@assets/images/logo.svg'

const { Sider, Content } = AntdLayout

interface props {}

const Layout: React.FC<props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onCollapse = () => setCollapsed(!collapsed)

  return (
    <AntdLayout className={styles.layout}>
      <Sider theme={'light'} className={styles.sider} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className={styles.logo}>
          <img src={logo} alt={'Bradex'} />
        </div>
        <LayoutMenu />
      </Sider>
      <AntdLayout>
        <LayoutHeader />
        <Content className={styles.content}>
          <div className={[styles.contentWrapper].join(' ')}>{children}</div>
        </Content>
        <LayoutFooter />
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
