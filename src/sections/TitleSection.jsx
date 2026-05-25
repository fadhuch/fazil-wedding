const TitleSection = () => (
  <section id="title" className="cinematic-section relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-4 py-20">
    <div className="section-bg-parallax absolute inset-0 -z-20">
      <img
        src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1600&q=80"
        alt="Elegant wedding floral decor"
        className="h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ivory/90 via-warmwhite/78 to-ivory/95" />
    </div>

    <div className="relative mx-auto max-w-4xl text-center">
      <div className="divider-reveal mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <p className="reveal-up text-xs uppercase tracking-[0.42em] text-gold/80 md:text-sm">For The Wedding Of</p>
      <h2 className="mask-reveal overflow-hidden font-heading text-[4.4rem] leading-none text-ink md:text-[8.2rem]">Fazil</h2>
      <p className="reveal-up mt-4 font-heading text-3xl text-gold md:text-5xl">& Asha</p>
      <div className="divider-reveal mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </div>
  </section>
)

export default TitleSection
