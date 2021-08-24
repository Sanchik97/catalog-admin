import React from 'react'
import { Image } from 'antd'
import fallback from '@assets/images/SM-placeholder-1024x512.jpg'

interface props {
  src?: string
  width?: number | string
  height?: number | string
  preview?: boolean
  alt?: string
}

const ImageWithFallback: React.FC<props> = ({
  src = 'error',
  width,
  height,
  preview = true,
  alt,
}) => {
  const borderRadius = {borderRadius:4}

  return (
    <Image
      style={borderRadius}
      width={width}
      height={height}
      src={src}
      preview={preview}
      fallback={fallback}
      alt={alt}
    />
  )
}

export default ImageWithFallback
