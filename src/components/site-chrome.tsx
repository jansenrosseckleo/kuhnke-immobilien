import { Link } from '@tanstack/react-router'
import { ArrowUpRight, Diamond, Menu, X } from 'lucide-react'
import { useState, type ReactNode } from 'react'

const navigation = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Über Kuhnke', href: '/ueber-marie' },
  { label: 'Kiez Atlas', href: '/kiez-wissen' },
  { label: 'Immobilien', href: '/immobilien' },
  { label: 'Kontakt', href: '/kontakt' },
]

export function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className={`group inline-flex items-center gap-3 ${dark ? 'text-background' : 'text-foreground'}`}>
      <span className="flex h-16 w-16 shrink-0 items-center justify-center transition-transform duration-300 group-hover:rotate-[-4deg]">
        <img
          src="/brand/kuhnke-lion-logo.png"
          alt="Kuhnke Immobilien Logo"
          className="h-24 w-24 max-w-none object-contain"
        />
      </span>
      <span className="font-serif text-[1.05rem] leading-none tracking-[-0.02em]">
        Kuhnke Immobilien
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <BrandMark />
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {navigation.map((item) => (
            <Link key={item.href} to={item.href} className="nav-link font-sans text-[0.72rem] font-medium uppercase tracking-[0.16em] text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a href="tel:+493012345678" className="text-xs tracking-wide text-muted-foreground hover:text-foreground">+49 30 123 45 678</a>
          <Link to="/bewerten" className="button-gold inline-flex items-center gap-2 px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em]">
            Immobilie bewerten <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <button type="button" className="inline-flex h-11 w-11 items-center justify-center border border-border lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Menü schließen' : 'Menü öffnen'}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navigation.map((item) => (
              <Link key={item.href} to={item.href} onClick={() => setOpen(false)} className="border-b border-border/70 py-4 font-sans text-sm uppercase tracking-[0.12em]">
                {item.label}
              </Link>
            ))}
            <Link to="/bewerten" onClick={() => setOpen(false)} className="button-gold mt-4 inline-flex items-center justify-between px-4 py-4 text-xs font-semibold uppercase tracking-[0.14em]">
              Immobilie bewerten <ArrowUpRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:px-12 lg:py-20">
        <div>
          <BrandMark dark />
          <p className="mt-8 max-w-sm font-serif text-2xl leading-tight text-background/90">Immobilien mit Weitblick. Persönlich betreut.</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-background/60">Kuhnke Immobilien begleitet Wohnimmobilien und Investmentvorhaben in Berlin und im Umland – klar, persönlich und mit einem Blick für das, was bleibt.</p>
        </div>
        <div>
          <p className="eyebrow text-primary">Navigation</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-background/70">
            {navigation.map((item) => <Link key={item.href} to={item.href} className="hover:text-primary">{item.label}</Link>)}
            <Link to="/bewerten" className="hover:text-primary">Immobilie bewerten</Link>
            <Link to="/kiez-finder" className="hover:text-primary">Kiez-Finder</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-primary">Kontakt</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-background/70">
            <a href="tel:+493012345678" className="hover:text-primary">+49 30 123 45 678</a>
            <a href="mailto:hallo@kuhnke-immobilien.de" className="hover:text-primary">hallo@kuhnke-immobilien.de</a>
            <span>Berlin &amp; Umland</span>
            <div className="mt-3 flex gap-4 text-xs uppercase tracking-[0.16em]
            "><a href="#instagram" className="hover:text-primary">Instagram</a><a href="#linkedin" className="hover:text-primary">LinkedIn</a></div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-5 text-[0.68rem] uppercase tracking-[0.12em] text-background/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <span>© {new Date().getFullYear()} Kuhnke Immobilien</span>
          <div className="flex gap-5"><a href="#impressum" className="hover:text-primary">Impressum</a><a href="#datenschutz" className="hover:text-primary">Datenschutz</a></div>
        </div>
      </div>
    </footer>
  )
}

export function PageIntro({ kicker, title, text }: { kicker: string; title: ReactNode; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow text-primary">{kicker}</p>
      <h1 className="mt-5 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">{title}</h1>
      {text && <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{text}</p>}
    </div>
  )
}

export function ImagePlaceholder({ src, alt, label, className = '' }: { src: string; alt: string; label: string; className?: string }) {
  return (
    <figure className={`image-placeholder group relative overflow-hidden bg-muted ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-foreground/80 px-4 py-3 text-[0.62rem] uppercase tracking-[0.14em] text-background/80 backdrop-blur-sm">Platzhalter · {label}</figcaption>
    </figure>
  )
}

export function DetailCard({ number, title, text, icon }: { number: string; title: string; text: string; icon?: ReactNode }) {
  return (
    <div className="group border-t border-border pt-5 transition-colors duration-300 hover:border-primary">
      <div className="flex items-start justify-between gap-4">
        <span className="font-sans text-xs text-primary">{number}</span>
        {icon || <Diamond className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-45" />}
      </div>
      <h3 className="mt-8 font-serif text-2xl leading-tight">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p>
    </div>
  )
}
