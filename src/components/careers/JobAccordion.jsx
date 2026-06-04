import { getApplyUrl } from '../../lib/careers'

export default function JobAccordion({ job }) {
  const applyUrl = getApplyUrl(job)

  return (
    <details className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-scroll">
      <summary className="list-none cursor-pointer border-l-4 border-primary hover:bg-off-white/80 transition-colors">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 p-5 md:p-6">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {job.type && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                  {job.type}
                </span>
              )}
              {job.department && (
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-navy text-white">
                  {job.department}
                </span>
              )}
            </div>
            <h3 className="font-heading font-bold text-xl md:text-2xl text-navy mb-3">
              {job.title}
            </h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600">
              {job.location && (
                <li className="flex items-center gap-1.5">
                  <span aria-hidden>📍</span>
                  {job.location}
                </li>
              )}
              {job.salary && (
                <li className="flex items-center gap-1.5">
                  <span aria-hidden>💰</span>
                  {job.salary}
                </li>
              )}
              {job.deadline && (
                <li className="flex items-center gap-1.5">
                  <span aria-hidden>🗓</span>
                  Deadline: {job.deadline}
                </li>
              )}
            </ul>
          </div>
          <span className="flex-shrink-0 self-start lg:self-center text-sm font-semibold text-primary group-open:hidden">
            View Details ▾
          </span>
          <span className="flex-shrink-0 self-start lg:self-center text-sm font-semibold text-primary hidden group-open:inline">
            Hide Details ▴
          </span>
        </div>
      </summary>

      <div className="px-5 md:px-6 pb-6 pt-0 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pt-6">
          <div>
            <h4 className="font-heading font-bold text-navy mb-2">
              Job Description
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {job.description || '—'}
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-navy mb-2">
              Requirements
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {job.requirements || '—'}
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-gray-100">
          <a
            href={applyUrl}
            target={applyUrl.startsWith('mailto:') ? undefined : '_blank'}
            rel={applyUrl.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Apply Now
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </details>
  )
}
