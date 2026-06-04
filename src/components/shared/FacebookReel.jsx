import { SITE } from '../../data/site'

export default function FacebookReel({ className = '', title = 'Watch on Facebook' }) {
  const reelUrl = SITE.facebookReel
  const embedSrc = `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(reelUrl)}&show_text=false&width=560`

  return (
    <div className={className}>
      <h2 className="font-heading font-bold text-2xl text-navy mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-6">
        See GTC Nepal in action — laboratory and field work highlights from our
        Facebook page.
      </p>
      <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-scroll shadow-card bg-navy/5 aspect-video">
        <iframe
          src={embedSrc}
          title="GTC Nepal Facebook reel"
          className="absolute inset-0 w-full h-full border-0"
          scrolling="no"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </div>
      <p className="text-center mt-4">
        <a
          href={reelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-primary hover:underline"
        >
          Open reel on Facebook →
        </a>
      </p>
    </div>
  )
}
