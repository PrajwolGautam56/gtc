import { useEffect } from 'react'

export default function Toast({ message, visible, onClose }) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div
      className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-navy text-white px-5 py-4 rounded-lg shadow-card max-w-sm"
      role="status"
    >
      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm">
        ✓
      </span>
      <p className="text-sm font-medium">{message}</p>
      <button
        type="button"
        onClick={onClose}
        className="ml-2 text-white/70 hover:text-white"
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  )
}
