import { useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder'

export default function SmartImage({
  src,
  alt,
  folderLabel,
  className = '',
  imgClassName = '',
}) {
  const [error, setError] = useState(false)

  if (!src || error) {
    return (
      <ImagePlaceholder label={folderLabel || alt} className={className} />
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`object-cover w-full h-full ${imgClassName}`}
      onError={() => setError(true)}
      loading="lazy"
    />
  )
}
