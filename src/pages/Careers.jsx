import { useEffect, useState } from 'react'
import { getVacancies } from '../lib/careers'
import { SITE } from '../data/site'
import FadeIn from '../components/shared/FadeIn'
import JobAccordion from '../components/careers/JobAccordion'

const REFRESH_MS = 60_000
const CV_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent('General Job Application — GTC Nepal')}`

export default function Careers() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      const data = await getVacancies()
      if (!cancelled) {
        setJobs(data)
        setLoading(false)
      }
    }

    load()
    const interval = setInterval(load, REFRESH_MS)
    return () => {
      cancelled = true
      clearInterval(interval)
    }
  }, [])

  const count = jobs.length

  return (
    <>
      <section className="relative bg-navy text-white py-16 md:py-24 overflow-scroll">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-60"
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <FadeIn>
            <p className="text-gold font-semibold text-sm uppercase tracking-[0.18em] mb-4">
              Join Our Team
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
              Career Opportunities
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Be part of Nepal&apos;s leading engineering testing and construction
              group. We&apos;re always looking for talented, passionate people.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
              Now Hiring
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-navy mb-4">
              Open Positions
            </h2>
            {loading ? (
              <p className="text-gray-600">Loading vacancies…</p>
            ) : count > 0 ? (
              <p className="text-gray-600">
                {count} position{count === 1 ? '' : 's'} currently available
              </p>
            ) : (
              <p className="text-gray-600">
                No open positions right now. Check back soon!{' '}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-primary font-semibold hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
            )}
          </FadeIn>

          {loading && (
            <div className="space-y-4 max-w-4xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-32 bg-white rounded-xl animate-pulse border border-gray-100"
                />
              ))}
            </div>
          )}

          {!loading && count > 0 && (
            <div className="space-y-4 max-w-4xl mx-auto">
              {jobs.map((job) => (
                <JobAccordion key={job.id || job.title} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Don&apos;t see a matching role?
            </h2>
            <p className="text-white/75 mb-8 leading-relaxed">
              Send us your CV anyway. We&apos;ll keep it on file for future
              openings.
            </p>
            <a
              href={CV_MAILTO}
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Your CV
              <span aria-hidden>→</span>
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
