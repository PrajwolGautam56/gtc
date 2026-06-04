export default function ImagePlaceholder({ label = 'Image', className = '' }) {
  return (
    <div
      className={`flex flex-col items-center justify-center bg-gray-200 text-gray-500 ${className}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      <svg
        className="w-10 h-10 mb-2 opacity-60"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <span className="text-xs font-medium px-2 text-center">{label}</span>
    </div>
  )
}
