import React from 'react'
import styles from './descriptions-table.module.scss'
import {Descriptions} from "antd"

interface props {
	title?: React.ReactNode
}

const DescriptionsTable: React.FC<props> = ({children, title}) => {
	return (
		<Descriptions title={title} column={1} bordered className={styles.descriptions}>
			{children}
		</Descriptions>
	)
}

export default DescriptionsTable
