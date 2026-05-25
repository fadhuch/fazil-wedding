import SectionTitle from '../components/SectionTitle'

const storyItems = [
  {
    year: '2019',
    title: 'First Meeting',
    description: 'A brief hello turned into long conversations and quiet smiles.',
  },
  {
    year: '2021',
    title: 'A Meaningful Bond',
    description: 'Through every season, we grew stronger with trust and gratitude.',
  },
  {
    year: '2024',
    title: 'Families United',
    description: 'Two families met with warmth, blessings, and joy for our future.',
  },
  {
    year: '2026',
    title: 'Our Forever Begins',
    description: 'On this day, we celebrate love and begin our life together.',
  },
]

const LoveStorySection = () => (
  <section id="story" className="cinematic-section relative min-h-screen snap-start px-4 py-20 md:py-24">
    <div className="mx-auto max-w-5xl">
      <SectionTitle
        eyebrow="Love Story"
        title="A Journey to Forever"
        subtitle="Moments that brought us to this beautiful beginning."
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:left-1/2" />

        <div className="space-y-6">
          {storyItems.map((item, index) => (
            <article
              key={item.title}
              className={`timeline-card relative rounded-3xl border border-white/70 bg-white/60 p-5 shadow-soft backdrop-blur-xl md:w-[48%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
            >
              <span className="mb-2 inline-block rounded-full bg-champagne/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-gold">
                {item.year}
              </span>
              <h3 className="font-heading text-3xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm text-ink/75 md:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default LoveStorySection
