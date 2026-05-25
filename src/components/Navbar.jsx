import { HiMiniHeart } from 'react-icons/hi2'

const links = [
  { label: 'Intro', href: '#intro' },
  { label: 'Details', href: '#details' },
  { label: 'Story', href: '#story' },
//   { label: 'RSVP', href: '#rsvp' },
]

const Navbar = () => (
  <header className="fixed inset-x-0 top-0 z-50 px-4 py-4">
    <nav className="mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/50 bg-white/45 px-4 py-3 shadow-soft backdrop-blur-xl md:px-6">
      <a href="#intro" className="font-heading text-2xl text-gold">Fazil</a>

      <ul className="flex items-center gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="text-xs font-medium uppercase tracking-[0.18em] text-ink/85 transition-colors hover:text-gold md:text-sm">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-champagne/20 text-gold">
        <HiMiniHeart size={16} />
      </span>
    </nav>
  </header>
)

export default Navbar
