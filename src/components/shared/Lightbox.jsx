import { useEffect } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  if (!src) return null

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal
      aria-label="Image preview"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full"
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
