import { HiChevronDoubleRight } from 'react-icons/hi2'

const particles = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  size: 4 + ((index * 3) % 7),
  left: `${(index * 13) % 97}%`,
  duration: 10 + (index % 5) * 1.5,
  delay: (index % 6) * 0.6,
}))

const IntroSection = () => (
  <section id="intro" className="cinematic-section relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-4 pb-16 pt-24">
    <div className="section-bg-parallax intro-zoom absolute inset-0 -z-30">
      <img
        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80"
        alt="Romantic couple silhouette"
        className="h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-ivory/40 to-ivory/90" />
    </div>

    <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_40%,rgba(255,240,219,0.55),transparent_55%)]" />

    <div className="relative z-10 mx-auto w-full max-w-4xl rounded-[2rem] border border-white/45 bg-white/25 px-6 py-20 text-center shadow-soft backdrop-blur-xl md:px-10">
      <p className="mask-reveal overflow-hidden font-heading text-6xl leading-[0.95] text-ink md:text-8xl">
        <span className="block">You Are</span>
        <span className="block text-gold">Invited</span>
      </p>
      <p className="reveal-up mt-5 text-xs uppercase tracking-[0.35em] text-ink/75 md:text-sm">
        A cinematic wedding invitation
      </p>
    </div>

    <div className="pointer-events-none absolute inset-0 -z-10">
      {particles.map((p) => (
        <span
          key={p.id}
          className="float-deco absolute rounded-full bg-white/60"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            bottom: `${10 + ((p.id * 9) % 35)}%`,
            animation: `floatDrift ${p.duration}s ease-in-out ${p.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>

    <a href="#title" className="scroll-hint absolute bottom-7 left-1/2 inline-flex -translate-x-1/2 flex-col items-center gap-1 text-[11px] uppercase tracking-[0.24em] text-ink/70">
      Scroll
      <HiChevronDoubleRight size={18} />
    </a>
  </section>
)

export default IntroSection
