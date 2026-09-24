import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react'
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome'

export const Route = createFileRoute('/leistungen')({
  head: () => ({ meta: [{ title: 'Leistungen · Kuhnke Immobilien' }, { name: 'description', content: 'Wohnimmobilien und Investment in Berlin und Umland – klar positioniert und persönlich begleitet.' }] }),
  component: Services,
})

const processSteps = [
  { number: '01', title: 'Werteinschätzung', text: 'Wir ordnen Lage, Zustand und Potenzial ein und entwickeln eine realistische Preisspanne.' },
  { number: '02', title: 'Aufbereitung', text: 'Wir schärfen Unterlagen, Bildsprache und die Details, die den Charakter Ihres Objekts zeigen.' },
  { number: '03', title: 'Vermarktungsstrategie', text: 'Wir legen Zielgruppe, Positionierung, Kanäle und den passenden Rhythmus gemeinsam fest.' },
  { number: '04', title: 'Vermarktung starten', text: 'Das Objekt geht mit einem klaren Auftritt und einer abgestimmten Geschichte in den Markt.' },
  { number: '05', title: 'Report senden', text: 'Sie erhalten regelmäßige Rückmeldungen zu Resonanz, Gesprächen und den nächsten Schritten.' },
  { number: '06', title: 'Verkaufen', text: 'Wir begleiten Verhandlungen, Entscheidungen und die Übergabe bis zum guten Abschluss.' },
]

function Services() {
  return <div className="min-h-dvh bg-background"><SiteHeader /><main>
    <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28"><PageIntro kicker="Arbeitsweise" title={<>Die passende Vermarktung für Ihr <em className="text-primary">Objekt.</em></>} text="Von der ersten Einschätzung bis zur Übergabe: Wir entwickeln eine klare Linie für Ihre Immobilie – persönlich, sorgfältig und mit einem Gespür für den Berliner Markt." /></section>
    <section className="border-y border-border bg-muted">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="max-w-2xl"><p className="eyebrow text-primary">Wie wir vermarkten</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Ein klarer Prozess. <em className="text-primary">Persönlich begleitet.</em></h2><p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">Jedes Objekt ist anders. Deshalb folgt unsere Vermarktung keinem starren Schema, sondern einem klaren Ablauf, der Raum für die richtigen Entscheidungen lässt.</p></div>
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-6 lg:gap-0">
          <div className="absolute bottom-4 left-4 top-4 w-px bg-border lg:bottom-auto lg:left-4 lg:right-4 lg:top-4 lg:h-px lg:w-auto" />
          {processSteps.map((step) => <li key={step.number} className="relative pl-14 lg:pl-0 lg:pr-5"><span className="relative z-10 inline-flex h-8 w-8 items-center justify-center border border-primary bg-muted font-sans text-[0.62rem] text-primary">{step.number}</span><div className="mt-4 lg:mt-6"><h3 className="max-w-[170px] font-serif text-2xl leading-tight">{step.title}</h3><p className="mt-4 max-w-[190px] text-sm leading-6 text-muted-foreground">{step.text}</p></div></li>)}
        </ol>
      </div>
    </section>
    <section className="bg-foreground text-background"><div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12 lg:py-20"><div><p className="eyebrow text-primary">Der nächste Schritt</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Lassen Sie uns über Ihr <em className="text-primary">Objekt sprechen.</em></h2><p className="mt-5 max-w-xl text-sm leading-7 text-background/65">In einem ersten Gespräch sortieren wir Ihre Fragen und schauen gemeinsam, welcher Weg zu Ihnen und Ihrer Immobilie passt.</p></div><Link to="/kontakt" className="button-gold inline-flex shrink-0 items-center justify-center gap-3 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em]">Gespräch vereinbaren <ArrowUpRight className="h-4 w-4" /></Link></div></section>
  </main><SiteFooter /></div>
}
