import { HiCalendarDays, HiMapPin, HiMiniClock } from 'react-icons/hi2'
import SectionTitle from '../components/SectionTitle'

const EventDetailsSection = () => (
  <section id="details" className="cinematic-section relative min-h-screen snap-start px-4 py-20 md:py-24">
    <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,rgba(243,219,212,0.5),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(216,181,122,0.3),transparent_40%)]" />

    <div className="mx-auto flex max-w-5xl flex-col justify-center">
      <SectionTitle
        eyebrow="The Ceremony"
        title="Our Sacred Celebration"
        subtitle="Join us for Nikkah and Reception with love, prayers, and joy."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <article className="reveal-up glass-card rounded-[2rem] border border-white/65 bg-white/45 p-6 shadow-soft backdrop-blur-2xl md:p-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/85">The Sacred Vow</p>
          <h3 className="font-heading text-4xl text-ink">Nikkah Ceremony</h3>

          <ul className="mt-6 space-y-5 text-ink/85">
            <li className="reveal-up flex items-start gap-3">
              <HiCalendarDays className="float-deco mt-0.5 text-gold" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Date</p>
                <p className="mt-1 text-base">Sunday, 12th July 2026</p>
              </div>
            </li>
            <li className="reveal-up flex items-start gap-3">
              <HiMiniClock className="float-deco mt-0.5 text-gold" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Time</p>
                <p className="mt-1 text-base">After Dhuhr Prayer · 1:30 PM</p>
              </div>
            </li>
            <li className="reveal-up flex items-start gap-3">
              <HiMapPin className="float-deco mt-0.5 text-gold" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Venue</p>
                <p className="mt-1 text-base">Koduvally, Malappuram, Kerala</p>
              </div>
            </li>
          </ul>

          <a
            href="https://maps.app.goo.gl/CzFkQkKy6vXWPp1D9?g_st=awb"
            target="_blank"
            rel="noreferrer"
            className="reveal-up mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-champagne to-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
          >
            Nikkah Location
          </a>
        </article>

        <article className="reveal-up glass-card rounded-[2rem] border border-white/65 bg-white/45 p-6 shadow-soft backdrop-blur-2xl md:p-8">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold/85">The Grand Celebration</p>
          <h3 className="font-heading text-4xl text-ink">Wedding Reception</h3>

          <ul className="mt-6 space-y-5 text-ink/85">
            <li className="reveal-up flex items-start gap-3">
              <HiCalendarDays className="float-deco mt-0.5 text-gold" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Date</p>
                <p className="mt-1 text-base">Monday, 13th July 2026</p>
              </div>
            </li>
            <li className="reveal-up flex items-start gap-3">
              <HiMiniClock className="float-deco mt-0.5 text-gold" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Time</p>
                <p className="mt-1 text-base">6:00 PM onwards</p>
              </div>
            </li>
            <li className="reveal-up flex items-start gap-3">
              <HiMapPin className="float-deco mt-0.5 text-gold" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-gold/85">Venue</p>
                <p className="mt-1 text-base">White Oak Castle Convention Center, Kuttippuram</p>
              </div>
            </li>
          </ul>

          <a
            href="https://maps.app.goo.gl/F5CSjS3omr5ueY3X7?g_st=awb"
            target="_blank"
            rel="noreferrer"
            className="reveal-up mt-8 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-champagne to-gold px-6 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
          >
            Reception Location
          </a>
        </article>
      </div>
    </div>
  </section>
)

export default EventDetailsSection
