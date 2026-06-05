import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useCinematicScroll = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.cinematic-section')

      if (sections.length === 0) return

      sections.forEach((section, index) => {
        const isFirst = index === 0

        const appearNodes = isFirst
          ? []
          : [...section.querySelectorAll('.reveal-up, .gallery-item, article, li, a, button, [data-appear]')]

        if (appearNodes.length) {
          gsap.from(appearNodes, {
            autoAlpha: 0,
            y: 28,
            duration: 0.75,
            ease: 'power3.out',
            stagger: 0.06,
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          })
        }

        const dividerNodes = section.querySelectorAll('.divider-reveal')
        if (dividerNodes.length) {
          gsap.from(dividerNodes, {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.8,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          })
        }

        const maskNodes = section.querySelectorAll('.mask-reveal')
        if (maskNodes.length) {
          gsap.from(maskNodes, {
            yPercent: 120,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 76%',
              toggleActions: 'play none none none',
            },
          })
        }

        const cardNodes = section.querySelectorAll('.timeline-card, .gallery-item')
        if (cardNodes.length) {
          gsap.from(cardNodes, {
            y: 26,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          })
        }

        const floatingNodes = section.querySelectorAll('.float-deco')
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

      })

      gsap.from('.scroll-hint', {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 0.5,
      })

      const lampNodes = gsap.utils.toArray('.lamp-deco')
      if (lampNodes.length) {
        lampNodes.forEach((node, index) => {
          const riseDistance = 460 + (index % 4) * 180

          gsap.to(node, {
            y: -riseDistance,
            ease: 'none',
            scrollTrigger: {
              trigger: document.body,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.12,
              invalidateOnRefresh: true,
            },
          })
        })

        gsap.to('.lamp-image', {
          scale: 1.05,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          transformOrigin: '50% 50%',
          ease: 'sine.inOut',
          stagger: 0.1,
        })

        if (sections.length >= 2) {
          gsap.to('.candle-overlay', {
            autoAlpha: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sections[1],
              start: 'top top',
              end: 'center top',
              scrub: true,
            },
          })
        }
      }

    })

    return () => {
      ctx.revert()
    }
  }, [])
}
