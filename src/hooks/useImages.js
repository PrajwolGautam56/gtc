import { useEffect, useState } from 'react'

let manifestCache = null

async function loadManifest() {
  if (manifestCache) return manifestCache
  const res = await fetch('/images/manifest.json')
  if (!res.ok) throw new Error('Failed to load image manifest')
  manifestCache = await res.json()
  return manifestCache
}

function buildUrls(folderPath, files) {
  return files.map(
    (file) =>
      `/images/${folderPath}/${file.split('/').map(encodeURIComponent).join('/')}`
  )
}

/**
 * Returns image URLs for a folder key in manifest.json (e.g. "gallery", "services/lab").
 */
export function useImages(folderPath) {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchImages() {
      setLoading(true)
      try {
        const manifest = await loadManifest()
        const files = manifest[folderPath] || []
        const urls = buildUrls(folderPath, files)
        if (!cancelled) setImages(urls)
      } catch {
        if (!cancelled) setImages([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchImages()
    return () => {
      cancelled = true
    }
  }, [folderPath])

  return { images, loading, firstImage: images[0] || null }
}

/**
 * Uses primary folder images, falling back to another folder when empty.
 */
export function useImagesWithFallback(primaryPath, fallbackPath) {
  const primary = useImages(primaryPath)
  const fallback = useImages(fallbackPath)
  const useFallback = !primary.loading && primary.images.length === 0

  if (primary.loading) {
    return { images: [], firstImage: null, loading: true }
  }

  if (useFallback) {
    return {
      images: fallback.images,
      firstImage: fallback.firstImage,
      loading: fallback.loading,
    }
  }

  return {
    images: primary.images,
    firstImage: primary.firstImage,
    loading: false,
  }
}
