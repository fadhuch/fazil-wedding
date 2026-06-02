import { useEffect, useMemo, useState } from 'react'

const RSVP_API_URL = 'https://api.doperfume.com/api/register-guest'

const formatDate = (value) => {
  if (!value) return 'N/A'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}

const RsvpViewerPage = () => {
  const [guests, setGuests] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const loadGuests = async () => {
    setIsLoading(true)
    setErrorMessage('')

    try {
      const response = await fetch(RSVP_API_URL)
      const result = await response.json().catch(() => null)

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Unable to fetch guest list.')
      }

      setGuests(Array.isArray(result.data) ? result.data : [])
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to fetch guest list.')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadGuests()
  }, [])

  const totalGuests = useMemo(
    () =>
      guests.reduce((sum, item) => {
        const parsed = Number.parseInt(String(item.numberOfGuests), 10)
        return sum + (Number.isNaN(parsed) ? 0 : parsed)
      }, 0),
    [guests],
  )

  return (
    <main className="min-h-screen bg-ivory px-4 py-10 text-ink md:py-14">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 rounded-3xl border border-white/65 bg-white/55 p-6 shadow-soft backdrop-blur-xl md:p-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-ink/60">Private View</p>
              <h1 className="mt-2 font-heading text-4xl text-gold md:text-5xl">RSVP Dashboard</h1>
              <p className="mt-2 text-sm text-ink/70">Personal page to view all submitted RSVPs.</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/"
                className="rounded-full border border-stone-300/80 bg-white/80 px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink"
              >
                Back to Invitation
              </a>
              <button
                type="button"
                onClick={loadGuests}
                disabled={isLoading}
                className="rounded-full bg-gradient-to-r from-champagne to-gold px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.15em]">
            <span className="rounded-full bg-white/80 px-4 py-2 text-ink/80">
              Entries: <strong>{guests.length}</strong>
            </span>
            <span className="rounded-full bg-white/80 px-4 py-2 text-ink/80">
              Total Guests: <strong>{totalGuests}</strong>
            </span>
          </div>
        </div>

        {errorMessage ? (
          <div className="mb-6 rounded-2xl border border-rose-300/60 bg-rose-50/80 p-4 text-sm text-rose-700">
            {errorMessage}
          </div>
        ) : null}

        {isLoading ? (
          <div className="rounded-3xl border border-white/65 bg-white/50 p-6 text-sm text-ink/70 shadow-soft backdrop-blur-xl">
            Loading RSVP submissions...
          </div>
        ) : guests.length === 0 ? (
          <div className="rounded-3xl border border-white/65 bg-white/50 p-6 text-sm text-ink/70 shadow-soft backdrop-blur-xl">
            No RSVPs found yet.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {guests.map((guest) => (
              <article
                key={guest._id || `${guest.name}-${guest.createdAt}`}
                className="rounded-3xl border border-white/70 bg-white/55 p-5 shadow-soft backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <h2 className="font-heading text-2xl text-gold">{guest.name || 'Unknown Guest'}</h2>
                  <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-ink/70">
                    {guest.attendingEvent || 'N/A'}
                  </span>
                </div>

                <div className="mt-4 space-y-2 text-sm text-ink/75">
                  <p>
                    <strong>Guests:</strong> {guest.numberOfGuests ?? 'N/A'}
                  </p>
                  <p>
                    <strong>Message:</strong> {guest.message || 'N/A'}
                  </p>
                  <p>
                    <strong>Submitted:</strong> {formatDate(guest.createdAt)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default RsvpViewerPage