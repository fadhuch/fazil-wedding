import { HiCalendarDays, HiMapPin, HiMiniClock } from 'react-icons/hi2'
import SectionTitle from '../components/SectionTitle'

const EventDetailsSection = () => (
  <section id="details" className="cinematic-section relative min-h-screen snap-start px-4 py-20 md:py-24">
    <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(243,219,212,0.5),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(216,181,122,0.3),transparent_40%)]" />

    <div className="mx-auto flex max-w-5xl flex-col justify-center">
      <SectionTitle
        eyebrow="Event Details"
        title="Save the Date"
        subtitle="Join us for a day full of prayers, joy, and celebration."
      />

      <article className="reveal-up glass-card mx-auto w-full max-w-xl rounded-[2rem] border border-white/65 bg-white/45 p-6 shadow-soft backdrop-blur-2xl md:p-8">
        <ul className="space-y-5 text-ink/85">
          <li className="reveal-up flex items-start gap-3">
            <HiCalendarDays className="float-deco mt-0.5 text-gold" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Date</p>
              <p className="mt-1 text-base">Tuesday, 22 December 2026</p>
            </div>
          </li>
          <li className="reveal-up flex items-start gap-3">
            <HiMiniClock className="float-deco mt-0.5 text-gold" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Time</p>
              <p className="mt-1 text-base">9:00 AM onwards</p>
            </div>
          </li>
          <li className="reveal-up flex items-start gap-3">
            <HiMapPin className="float-deco mt-0.5 text-gold" size={20} />
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Venue</p>
              <p className="mt-1 text-base">St. Mary Grand Hall, Cathedral Road, Chennai</p>
            </div>
          </li>
        </ul>

        <a
          href="https://maps.google.com/?q=St+Mary+Grand+Hall+Cathedral+Road+Chennai"
          target="_blank"
          rel="noreferrer"
          className="reveal-up mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-champagne to-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
        >
          Open Google Maps
        </a>
      </article>
    </div>
  </section>
)

export default EventDetailsSection
