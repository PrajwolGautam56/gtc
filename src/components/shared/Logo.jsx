import { SITE } from '../../data/site'

export default function Logo({ className = 'h-11 w-11 object-contain flex-shrink-0' }) {
  return (
    <img
      src={SITE.logo}
      alt={`${SITE.company} logo`}
      className={className}
      width={56}
      height={56}
      fetchPriority="high"
    />
  )
}
