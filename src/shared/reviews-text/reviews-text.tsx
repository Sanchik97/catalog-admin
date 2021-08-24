import React, { useState } from 'react'
import {Modal, Typography} from 'antd'

interface props {
  text: string
}

const ReviewsText: React.FC<props> = ({ text }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const modalHandler = () => setVisible(!visible)

  return (
    <>
      <Typography.Link onClick={modalHandler}>{text.substr(0, 75)}...</Typography.Link>

      <Modal
        footer={false}
        closable={true}
        visible={visible}
        onCancel={modalHandler}
      >
        {text}
      </Modal>
    </>
  )
}

export default React.memo(ReviewsText)
