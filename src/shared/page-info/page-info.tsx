import React from 'react'
import {PageHeader, Typography} from "antd"
import {Helmet} from "react-helmet"
import styles from './page-info.module.scss'

interface props {
	title: string
	subTitle?: string
	extra?: React.ReactNode[]
}

const PageInfo: React.FC<props> = ({title, subTitle, children, extra}) => {
	const back = () => window.history.back()

	const marginNone = {margin: 0}

	return (
		<>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<PageHeader
				ghost={false}
				onBack={back}
				title={<Typography.Title style={marginNone} level={3}>{title}</Typography.Title>}
				subTitle={subTitle}
				extra={extra}
			>
				<div className={styles.content}>
					{children}
				</div>
			</PageHeader>
		</>
	)
}

export default PageInfo
