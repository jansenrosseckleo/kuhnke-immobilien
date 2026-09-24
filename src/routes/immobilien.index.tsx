import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { PageIntro } from '@/components/site-chrome'

export const Route = createFileRoute('/immobilien/')({
  head: () => ({
    meta: [
      { title: 'Immobilien · Kuhnke Immobilien' },
      { name: 'description', content: 'Wohnimmobilien und Investmentobjekte von Kuhnke Immobilien in Berlin und Umland.' },
    ],
  }),
  component: Properties,
})

const propertyTypes = [
  { slug: 'eigentumswohnungen', title: 'Eigentumswohnungen', text: 'Für Altbau, Neubau und alles dazwischen – mit einer Vermarktung, die den Charakter sichtbar macht.' },
  { slug: 'haeuser-grundstuecke', title: 'Häuser & Grundstücke', text: 'Ein- und Doppelhaushälften, Grundstücke und Orte, an denen der nächste Lebensabschnitt beginnt.' },
  { slug: 'entwicklungsgrundstuecke', title: 'Entwicklungsgrundstücke', text: 'Lage, Potenzial und Perspektive für Flächen mit einer klaren Idee.' },
  { slug: 'wohn-geschaeftshaeuser', title: 'Wohn- & Geschäftshäuser', text: 'Investment mit Blick auf Substanz, Nutzung und das, was langfristig trägt.' },
]

function Properties() {
  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28">
        <PageIntro
          kicker="Immobilien"
          title={<>Orte mit <em className="text-primary">Perspektive.</em></>}
          text="Entdecken Sie Immobilien in Berlin und im Umland, ausgewählt mit einem Blick für Lage, Charakter und den nächsten sinnvollen Schritt."
        />
      </section>
      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-[1440px] md:grid-cols-3">
          {propertyTypes.map((item) => (
            <article key={item.title} className="border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:p-10 md:last:border-r-0">
              <h2 className="font-serif text-3xl leading-tight">{item.title}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.text}</p>
              <Link to="/immobilien/$category" params={{ category: item.slug }} className="mt-8 inline-flex h-8 w-8 items-center justify-center text-primary transition hover:translate-x-1 hover:text-foreground" aria-label={`Mehr über ${item.title}`}>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-20 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow text-primary">Persönliche Auswahl</p>
          <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Die passende Immobilie beginnt mit dem <em className="text-primary">richtigen Gespräch.</em></h2>
        </div>
        <Link to="/kontakt" className="inline-flex items-center gap-3 border-b border-primary pb-2 text-xs uppercase tracking-[0.14em] hover:text-primary">
          Kontakt aufnehmen <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  )
}
