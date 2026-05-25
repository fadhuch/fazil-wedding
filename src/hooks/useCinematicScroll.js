import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useCinematicScroll = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.section-bg-parallax').forEach((bg) => {
        gsap.to(bg, {
          yPercent: 12,
          ease: 'none',
          scrollTrigger: {
            trigger: bg.closest('section'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        })
      })

      gsap.utils.toArray('.cinematic-section').forEach((section) => {
        const revealNodes = section.querySelectorAll('.reveal-up')
        if (revealNodes.length) {
          gsap.from(revealNodes, {
            y: 56,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 78%',
            },
          })
        }

        const dividerNodes = section.querySelectorAll('.divider-reveal')
        if (dividerNodes.length) {
          gsap.from(dividerNodes, {
            scaleX: 0,
            transformOrigin: 'center center',
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: section,
              start: 'top 82%',
            },
          })
        }

        const maskNodes = section.querySelectorAll('.mask-reveal')
        if (maskNodes.length) {
          gsap.from(maskNodes, {
            yPercent: 120,
            duration: 1,
            ease: 'power4.out',
            stagger: 0.14,
            scrollTrigger: {
              trigger: section,
              start: 'top 75%',
            },
          })
        }
      })

      gsap.utils.toArray('.timeline-card').forEach((card, index) => {
        gsap.from(card, {
          x: index % 2 === 0 ? -24 : 24,
          y: 28,
          opacity: 0,
          duration: 0.95,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 86%',
          },
        })
      })

      gsap.utils.toArray('.gallery-item').forEach((item, index) => {
        gsap.from(item, {
          y: 24,
          opacity: 0,
          scale: 0.95,
          duration: 0.8,
          delay: index * 0.03,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 92%',
          },
        })
      })

      gsap.to('.float-deco', {
        y: -16,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.25,
      })

      gsap.to('.intro-zoom', {
        scale: 1.08,
        duration: 11,
        ease: 'none',
        scrollTrigger: {
          trigger: '#intro',
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      })

      gsap.from('.scroll-hint', {
        opacity: 0,
        y: 10,
        duration: 0.8,
        delay: 0.7,
      })

      ScrollTrigger.normalizeScroll(true)
    })

    return () => {
      ScrollTrigger.normalizeScroll(false)
      ctx.revert()
    }
  }, [])
}
