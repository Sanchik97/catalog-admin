import React from 'react'
import styles from './layout-footer.module.scss'
import { Layout as AntdLayout } from 'antd'

const { Footer } = AntdLayout

interface props {}

const LayoutFooter: React.FC<props> = () => {
  return (
    <Footer className={styles.footer}>
      Copyright. © {new Date().getFullYear()}. Ards Lux™
    </Footer>
  )
}

export default LayoutFooter
