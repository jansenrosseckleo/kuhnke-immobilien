import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=90',
    eyebrow: 'Berlin · Umland · Persönlich',
    title: <>Immobilien<br /><em>mit Weitblick.</em></>,
    text: 'Wohnimmobilien und Investment in Berlin – modern vermarktet, sorgfältig begleitet, persönlich betreut von Marie Kuhnke.',
    caption: 'Helles Wohninterieur · Inspiration',
    detail: 'Altbauwohnung · Berlin',
  },
  {
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1800&q=90',
    eyebrow: 'Altbau · Charakter · Geschichte',
    title: <>Räume, die<br /><em>etwas erzählen.</em></>,
    text: 'Wir machen die Qualität einer Immobilie sichtbar – mit einer klaren Idee, starken Bildern und einem Auftritt, der im Gedächtnis bleibt.',
    caption: 'Berliner Altbau · Inspiration',
    detail: 'Stadtvilla · Charlottenburg',
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=90',
    eyebrow: 'Investment · Lage · Perspektive',
    title: <>Substanz mit<br /><em>Perspektive.</em></>,
    text: 'Für Wohn- und Geschäftshäuser, Grundstücke und Entscheidungen, bei denen ein guter Blick auf morgen zählt.',
    caption: 'Architekturdetail · Inspiration',
    detail: 'Investment · Berlin Mitte',
  },
]

export function EditorialHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const timer = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 6200)
    return () => window.clearInterval(timer)
  }, [paused])

  const goTo = (index: number) => setActive((index + heroSlides.length) % heroSlides.length)
  const slide = heroSlides[active]

  return (
    <section className="editorial-hero relative overflow-hidden border-b border-border bg-background text-foreground" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto grid min-h-[680px] max-w-[1440px] gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-12 lg:py-20">
        <div className="relative z-10 flex flex-col justify-center">
          <div className="flex items-center justify-between gap-6 lg:justify-start">
            <p key={slide.eyebrow} className="hero-copy-enter eyebrow text-primary">{slide.eyebrow}</p>
            <span className="hero-counter font-sans text-xs tracking-[0.14em] text-muted-foreground lg:hidden">0{active + 1} <span className="text-primary">/</span> 0{heroSlides.length}</span>
          </div>
          <h1 key={active} className="hero-copy-enter mt-7 max-w-3xl font-serif text-[clamp(4rem,8vw,7.6rem)] leading-[0.84] tracking-[-0.07em]">{slide.title}</h1>
          <p key={`${active}-text`} className="hero-copy-enter mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">{slide.text}</p>
          <div className="hero-copy-enter mt-9 flex flex-wrap gap-3">
            <Link to="/bewerten" className="button-gold inline-flex items-center gap-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">Immobilie bewerten lassen <ArrowUpRight className="h-4 w-4" /></Link>
            <Link to="/kiez-finder" className="button-outline-light inline-flex items-center gap-3 border px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">Meinen Kiez finden <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 flex items-center gap-3 text-primary"><ArrowDownRight className="h-5 w-5" /><span className="typewriter-label text-muted-foreground">Ein persönlicher Blick auf Berlin</span></div>
        </div>

        <div className="relative min-h-[440px] lg:min-h-[590px]">
          <div className="absolute -right-8 -top-8 h-28 w-28 border-r border-t border-primary/60 sm:-right-4 sm:-top-4" />
          <div className="absolute -bottom-8 -left-8 h-28 w-28 border-b border-l border-primary/60 sm:-bottom-4 sm:-left-4" />
          <div className="relative h-full min-h-[440px] overflow-hidden bg-muted lg:min-h-[590px]">
            {heroSlides.map((item, index) => <img key={item.image} src={item.image} alt="" className={`editorial-hero__image ${index === active ? 'is-active' : index === (active + 1) % heroSlides.length ? 'is-next' : 'is-hidden'}`} />)}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-5 text-background sm:p-7">
              <div><p className="font-serif text-2xl">{slide.detail}</p><p className="mt-2 text-[0.62rem] uppercase tracking-[0.14em] text-background/65">{slide.caption}</p></div>
              <span className="hidden font-sans text-xs tracking-[0.14em] text-background/70 sm:block">0{active + 1} <span className="text-primary">/</span> 0{heroSlides.length}</span>
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 flex items-center gap-2 bg-background px-3 py-2 shadow-md sm:left-7"><MapPin className="h-3.5 w-3.5 text-primary" /><span className="font-sans text-[0.6rem] uppercase tracking-[0.14em]">Berlin &amp; Umland</span></div>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] items-end justify-between border-t border-border px-5 py-4 sm:px-8 lg:px-12"><div className="flex gap-2">{heroSlides.map((item, index) => <button key={item.caption} type="button" onClick={() => goTo(index)} aria-label={`Bild ${index + 1} anzeigen`} aria-pressed={index === active} className={`hero-dot ${index === active ? 'is-active' : ''}`}><span>0{index + 1}</span></button>)}</div><span className="hidden text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground sm:block">{slide.caption}</span></div>
    </section>
  )
}

const story = {
  label: 'Vermarktung',
  title: <>Nicht lauter.<br /><em>Passender.</em></>,
  text: 'Gute Vermarktung übersetzt die Qualität einer Immobilie in die richtige Sprache. Mit starken Bildern, klarer Positionierung und Social Media, wenn es wirklich passt.',
  image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
}

export function StorySlider() {
  return (
    <section className="story-slider bg-background">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
          <img src={story.image} alt="Hochwertiges Wohninterieur als Bildplatzhalter" className="story-slider__image" />
          <span className="absolute bottom-5 left-5 bg-foreground px-3 py-2 text-[0.6rem] uppercase tracking-[0.14em] text-background">Bildplatzhalter · eigenes Material folgt</span>
        </div>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <p className="story-copy-enter eyebrow text-primary">{story.label}</p>
          <h2 className="story-copy-enter mt-5 font-serif text-5xl leading-[0.9] tracking-[-0.05em] sm:text-6xl">{story.title}</h2>
          <p className="story-copy-enter mt-7 max-w-md text-sm leading-7 text-muted-foreground">{story.text}</p>
          <Link to="/leistungen" className="mt-9 inline-flex items-center gap-3 text-xs uppercase tracking-[0.14em] hover:text-primary">Unsere Arbeitsweise <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}

export function KiezMarquee() {
  const items = ['Berlin Mitte', 'Charlottenburg', 'Friedrichshain', 'Schöneberg', 'Pankow', 'Treptow', 'Zehlendorf']
  return <div className="kiez-marquee" aria-label="Berliner Kieze"><div className="kiez-marquee__track">{[...items, ...items].map((item, index) => <span key={`${item}-${index}`} className="typewriter-label"><MapPin className="h-3.5 w-3.5 text-primary" />{item}<i>✦</i></span>)}</div></div>
}