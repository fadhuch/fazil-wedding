import { useEffect, useRef, useState } from 'react'
import { HiMiniMusicalNote, HiMiniPause } from 'react-icons/hi2'

const MUSIC_SRC = '/assets/wedding-music.mp3'

const MusicPlayer = () => {
  const audioRef = useRef(null)
  const hasStartedOnScrollRef = useRef(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isAvailable, setIsAvailable] = useState(true)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return undefined

    audio.volume = 0.35

    const onEnded = () => {
      setIsPlaying(false)
    }

    const onError = () => {
      setIsAvailable(false)
      setIsPlaying(false)
    }

    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)

    return () => {
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio || !isAvailable) return undefined

    let cancelled = false

    const tryAutoStart = async () => {
      if (cancelled || hasStartedOnScrollRef.current || !audio.paused) return

      try {
        await audio.play()
        if (cancelled) return
        hasStartedOnScrollRef.current = true
        setIsPlaying(true)
      } catch {
        if (!cancelled) setIsPlaying(false)
      }
    }

    void tryAutoStart()

    const onCanPlay = () => {
      void tryAutoStart()
    }

    audio.addEventListener('canplay', onCanPlay)

    return () => {
      cancelled = true
      audio.removeEventListener('canplay', onCanPlay)
    }
  }, [isAvailable])

  useEffect(() => {
    const onFirstScrollStart = async () => {
      if (hasStartedOnScrollRef.current) return

      const audio = audioRef.current
      if (!audio || !isAvailable || !audio.paused) return

      try {
        await audio.play()
        hasStartedOnScrollRef.current = true
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
    }

    window.addEventListener('scroll', onFirstScrollStart, { passive: true })

    return () => {
      window.removeEventListener('scroll', onFirstScrollStart)
    }
  }, [isAvailable])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio || !isAvailable) return

    if (audio.paused) {
      try {
        await audio.play()
        hasStartedOnScrollRef.current = true
        setIsPlaying(true)
      } catch {
        setIsPlaying(false)
      }
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} loop preload="auto" />

      <button
        type="button"
        onClick={togglePlayback}
        disabled={!isAvailable}
        className="fixed bottom-6 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/65 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-ink shadow-soft backdrop-blur-md transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:right-6"
        aria-label={isPlaying ? 'Pause wedding music' : 'Play wedding music'}
      >
        {isPlaying ? <HiMiniPause size={16} /> : <HiMiniMusicalNote size={16} />}
        {isAvailable ? (isPlaying ? 'Music On' : 'Music Off') : 'No Music File'}
      </button>
    </>
  )
}

export default MusicPlayer
