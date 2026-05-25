import { useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useCinematicScroll = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const shell = document.querySelector('.horizontal-shell')
      const track = document.querySelector('.horizontal-track')
      const slides = gsap.utils.toArray('.slide-panel')

      if (!shell || !track || slides.length === 0) return

      const getDistance = () => Math.max(track.scrollWidth - window.innerWidth, 0)

      const horizontalTween = gsap.to(track, {
        x: () => -getDistance(),
        ease: 'none',
        scrollTrigger: {
          trigger: shell,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          snap: {
            snapTo: 1 / Math.max(slides.length - 1, 1),
            duration: { min: 0.18, max: 0.75 },
            delay: 0.04,
            ease: 'power1.inOut',
          },
          end: () => `+=${getDistance()}`,
          onUpdate: (self) => {
            const nextIndex = Math.min(slides.length - 1, Math.round(self.progress * (slides.length - 1)))
            setActiveSlide(nextIndex)
          },
        },
      })

      slides.forEach((slide) => {
        const revealNodes = slide.querySelectorAll('.reveal-up')
        if (revealNodes.length) {
          gsap.from(revealNodes, {
            y: 48,
            opacity: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalTween,
              start: 'left 72%',
              end: 'right 32%',
            },
          })
        }

        const dividerNodes = slide.querySelectorAll('.divider-reveal')
        if (dividerNodes.length) {
          gsap.from(dividerNodes, {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalTween,
              start: 'left 74%',
              end: 'right 34%',
            },
          })
        }

        const maskNodes = slide.querySelectorAll('.mask-reveal')
        if (maskNodes.length) {
          gsap.from(maskNodes, {
            yPercent: 120,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalTween,
              start: 'left 72%',
              end: 'right 32%',
            },
          })
        }

        const cardNodes = slide.querySelectorAll('.timeline-card, .gallery-item')
        if (cardNodes.length) {
          gsap.from(cardNodes, {
            y: 26,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalTween,
              start: 'left 68%',
              end: 'right 30%',
            },
          })
        }

        const floatingNodes = slide.querySelectorAll('.float-deco')
        if (floatingNodes.length) {
          gsap.to(floatingNodes, {
            y: -16,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            stagger: 0.2,
          })
        }

        const introZoom = slide.querySelector('.intro-zoom')
        if (introZoom) {
          gsap.to(introZoom, {
            scale: 1.08,
            ease: 'none',
            scrollTrigger: {
              trigger: slide,
              containerAnimation: horizontalTween,
              start: 'left 92%',
              end: 'right 8%',
              scrub: 1,
            },
          })
        }
      })

      gsap.from('.scroll-hint', {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 0.5,
      })

      ScrollTrigger.normalizeScroll(true)
    })

    return () => {
      ScrollTrigger.normalizeScroll(false)
      ctx.revert()
    }
  }, [])

  return activeSlide
}
