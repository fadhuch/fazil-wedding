import { useEffect } from 'react'

const ensurePreloadLink = (href) => {
  if (!href || typeof document === 'undefined') return

  const existing = document.head.querySelector(`link[rel="preload"][as="image"][href="${href}"]`)
  if (existing) return

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = href
  document.head.appendChild(link)
}

export const usePreloadImages = (imageSources = []) => {
  useEffect(() => {
    imageSources.forEach((src) => {
      if (!src) return

      ensurePreloadLink(src)

      const img = new Image()
      img.decoding = 'async'
      img.src = src
    })
  }, [imageSources])
}
