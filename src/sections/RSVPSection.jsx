import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import PropTypes from 'prop-types'

const RSVPSection = ({ eventType }) => {
  const isSingleEvent = eventType === 'Nikkah' || eventType === 'Wedding'

  const createInitialState = () => ({
    name: '',
    guests: '1',
    attending: isSingleEvent ? eventType : 'Both',
    message: '',
  })

  const [formData, setFormData] = useState(createInitialState)

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
      if (!formData.name.trim()) return

      let rsvpData = {
        name: formData.name.trim(),
        numberOfGuests: formData.guests,
        attendingEvent: isSingleEvent ? eventType : formData.attending,
        message: formData.message.trim(),
      }

      fetch('https://api.doperfume.com/api/register-guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rsvpData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then((data) => {
            console.log('Success:', data)
          setFormData(createInitialState())
        })
        .catch((error) => {
          console.error('Error:', error)
          alert('There was an error submitting your RSVP. Please try again later.')
        })
      


   
  }



  return (
    <section id="rsvp" className="cinematic-section relative min-h-screen snap-start px-4 py-20 md:py-24">
      <div className="mx-auto max-w-xl">
        <SectionTitle
          eyebrow="RSVP"
          title="Join Our Celebration"
          subtitle="Kindly confirm your presence with love."
        />

        <form onSubmit={onSubmit} className="glass-card reveal-up rounded-[2rem] border border-white/65 bg-white/50 p-6 shadow-soft backdrop-blur-2xl md:p-8">
          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-ink/75">Name</span>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={onChange}
              className="w-full rounded-xl border border-stone-200/90 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold/30"
              placeholder="Your full name"
            />
          </label>

          {isSingleEvent ? (
            <label className="mb-4 block">
              <span className="mb-2 block text-sm text-ink/75">Attending</span>
              <input
                type="text"
                value={eventType}
                readOnly
                className="w-full rounded-xl border border-stone-200/90 bg-white/60 px-4 py-3 text-sm text-ink/80 outline-none"
              />
            </label>
          ) : (
            <label className="mb-4 block">
              <span className="mb-2 block text-sm text-ink/75">Attending</span>
              <select
                name="attending"
                value={formData.attending}
                onChange={onChange}
                className="w-full rounded-xl border border-stone-200/90 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold/30"
              >
                <option value="Nikkah">Nikkah</option>
                <option value="Wedding">Wedding</option>
                <option value="Both">Both</option>
                <option value="Not Attending">Not Attending</option>
              </select>
            </label>
          )}

          <label className="mb-4 block">
            <span className="mb-2 block text-sm text-ink/75">Number of Guests</span>
            <select
              name="guests"
              value={formData.guests}
              onChange={onChange}
              className="w-full rounded-xl border border-stone-200/90 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold/30"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5+</option>
            </select>
          </label>

          <label className="mb-6 block">
            <span className="mb-2 block text-sm text-ink/75">Message to Couple</span>
            <textarea
                          name="message"
                          required
              value={formData.message}
              onChange={onChange}
              rows={4}
              placeholder="Share your blessings and wishes..."
              className="w-full rounded-xl border border-stone-200/90 bg-white/80 px-4 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-gold/30"
            />
          </label>

          <div className="flex flex-col gap-3">
            <button
              type="submit"
            className="rounded-full bg-gradient-to-r from-champagne to-gold px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-white"
            >
                Send RSVP
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

RSVPSection.propTypes = {
  eventType: PropTypes.oneOf(['both', 'Nikkah', 'Wedding']),
}

RSVPSection.defaultProps = {
  eventType: 'both',
}

export default RSVPSection
