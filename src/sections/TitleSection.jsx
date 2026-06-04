const TitleSection = () => (
  <section id="title" className="cinematic-section title-pattern-bg relative flex min-h-screen snap-start items-center justify-center overflow-hidden px-4 py-20">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ivory/30 via-transparent to-ivory/45" />

    <div className="relative mx-auto max-w-4xl text-center">
      <div className="divider-reveal mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <p className="reveal-up text-xs mb-6 uppercase tracking-[0.42em] text-gold/80 md:text-sm">Our Sacred Celebration</p>
      <h2 className="mask-reveal overflow-hidden font-heading text-[4rem] leading-none text-ink md:text-[7.2rem]" style={{minHeight: '134px'}}>For The Wedding Of</h2>
      <p className="reveal-up mt-6 font-heading text-3xl text-gold md:text-5xl">Fasil Ashfak & Asha Rahma</p>
      <div className="divider-reveal mx-auto mt-8 h-px w-40 bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
    </div>
  </section>
)

export default TitleSection
