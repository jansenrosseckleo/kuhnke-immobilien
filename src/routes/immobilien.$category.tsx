import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'

const propertyDetails = {
  eigentumswohnungen: {
    eyebrow: 'Eigentumswohnungen',
    title: <>Eigentumswohnungen mit <em className="text-primary">klarem Auftritt.</em></>,
    intro: 'Ob Altbau mit Geschichte oder Neubau mit Weitblick: Jede Wohnung braucht eine Vermarktung, die ihre Qualität verständlich und sichtbar macht.',
    difference: 'Bei Eigentumswohnungen entscheidet oft das Zusammenspiel aus Lage, Grundriss, Licht und Hausgemeinschaft. Wir arbeiten genau diese Besonderheiten heraus, statt jede Wohnung gleich aussehen zu lassen.',
    documents: ['Grundbuchauszug', 'Teilungserklärung und Aufteilungsplan', 'Wohnflächenberechnung und Grundriss', 'Energieausweis', 'Wirtschaftsplan und Protokolle der Eigentümerversammlungen'],
    marketing: ['Zielgruppenanalyse für Lage und Wohngefühl', 'Hochwertige Bildsprache und ein klares Exposé', 'Einordnung von Hausgeld, Rücklagen und Besonderheiten', 'Persönliche Besichtigung und verbindliche Kommunikation'],
  },
  'haeuser-grundstuecke': {
    eyebrow: 'Häuser & Grundstücke',
    title: <>Mehr Raum für den <em className="text-primary">nächsten Lebensabschnitt.</em></>,
    intro: 'Häuser und Grundstücke erzählen von Möglichkeiten. Wir machen die Substanz, die Lage und das Potenzial für die passenden Menschen greifbar.',
    difference: 'Bei Häusern zählt nicht nur die Wohnfläche. Garten, Nebengebäude, Sanierungsstand und die Verbindung zum Kiez prägen die Entscheidung. Bei Grundstücken kommt die Frage hinzu, was an diesem Ort entstehen kann.',
    documents: ['Grundbuchauszug', 'Bauunterlagen und genehmigte Pläne', 'Wohn- und Nutzflächenberechnung', 'Energieausweis und Nachweise zu Modernisierungen', 'Bei Grundstücken: Bebauungsplan oder Bauvorbescheid'],
    marketing: ['Darstellung von Raumgefühl, Alltag und Grundstück', 'Einordnung von Zustand, Kosten und Entwicklungsmöglichkeiten', 'Zielgerichtete Ansprache statt beliebiger Reichweite', 'Besichtigungen mit Zeit für echte Fragen'],
  },
  entwicklungsgrundstuecke: {
    eyebrow: 'Entwicklungsgrundstücke',
    title: <>Potenzial braucht eine <em className="text-primary">klare Perspektive.</em></>,
    intro: 'Bei Entwicklungsgrundstücken beginnt die Vermarktung vor dem fertigen Gebäude: mit einer verständlichen Einordnung von Lage, Baurecht und Möglichkeiten.',
    difference: 'Hier verkaufen wir nicht nur Fläche, sondern eine Idee. Käuferinnen und Käufer brauchen belastbare Informationen zu Nutzung, Dichte, Erschließung und dem Weg, der vor ihnen liegt.',
    documents: ['Grundbuchauszug und Flurkarte', 'Bebauungsplan oder Informationen zum Baurecht', 'Bauvorbescheid und vorhandene Gutachten', 'Informationen zu Erschließung und Altlasten', 'Vermessungsunterlagen und Lageplan'],
    marketing: ['Präzise Aufbereitung von Lage und Baurecht', 'Visualisierung der denkbaren Perspektiven', 'Diskrete Ansprache von Projektentwicklern und Investoren', 'Transparente Kommunikation zu Chancen und offenen Fragen'],
  },
  'wohn-geschaeftshaeuser': {
    eyebrow: 'Wohn- & Geschäftshäuser',
    title: <>Substanz, die auch langfristig <em className="text-primary">trägt.</em></>,
    intro: 'Wohn- und Geschäftshäuser verlangen einen nüchternen Blick auf Zahlen und zugleich ein Gefühl für Lage, Nutzung und langfristige Perspektive.',
    difference: 'Bei Anlageimmobilien stehen Mieterträge, Mietverträge, Instandhaltung und Entwicklungsmöglichkeiten im Mittelpunkt. Wir bringen diese Informationen in eine klare Geschichte für die richtigen Investoren.',
    documents: ['Grundbuchauszug und Baulastenverzeichnis', 'Mietverträge und Mieterliste', 'Betriebskostenabrechnungen und Wirtschaftspläne', 'Energieausweis und Instandhaltungsnachweise', 'Flächenaufstellung und relevante Genehmigungen'],
    marketing: ['Aufbereitung der wirtschaftlichen Kennzahlen', 'Analyse von Lage, Nutzung und Entwicklungsspielraum', 'Diskrete Vermarktung an passende Investorinnen und Investoren', 'Strukturierte Unterlagen für eine sichere Entscheidung'],
  },
} as const

type PropertyCategory = keyof typeof propertyDetails

export const Route = createFileRoute('/immobilien/$category')({
  head: ({ params }) => {
    const detail = propertyDetails[params.category as PropertyCategory]
    return { meta: [{ title: `${detail?.eyebrow ?? 'Immobilien'} · Kuhnke Immobilien` }, { name: 'description', content: detail?.intro ?? 'Kuhnke Immobilien begleitet den Verkauf von Wohn- und Anlageimmobilien in Berlin und Umland.' }] }
  },
  component: PropertyDetail,
  notFoundComponent: () => <PropertyNotFound />,
})

function PropertyDetail() {
  const { category } = Route.useParams()
  const detail = propertyDetails[category as PropertyCategory]
  if (!detail) throw notFound()

  return (
    <main>
      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24">
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground transition hover:text-primary"><ArrowLeft className="h-4 w-4" /> Zur Übersicht</Link>
        <div className="mt-16 max-w-4xl">
          <p className="eyebrow text-primary">{detail.eyebrow}</p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">{detail.title}</h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{detail.intro}</p>
        </div>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24 lg:px-12 lg:py-24">
          <p className="eyebrow text-primary">Was bei dieser Kategorie anders ist</p>
          <p className="max-w-3xl font-serif text-3xl leading-tight sm:text-4xl">{detail.difference}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-28">
        <div>
          <p className="eyebrow text-primary">Unterlagen für den Verkauf</p>
          <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight">Gut vorbereitet in den <em className="text-primary">Prozess.</em></h2>
          <p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground">Welche Unterlagen im Einzelfall gebraucht werden, klären wir gemeinsam. Diese Übersicht gibt Ihnen eine erste Orientierung.</p>
          <ul className="mt-10 space-y-4 border-t border-border pt-5">
            {detail.documents.map((document) => <li key={document} className="flex items-start gap-3 border-b border-border/70 pb-4 text-sm leading-6"><Check className="mt-1 h-4 w-4 shrink-0 text-primary" />{document}</li>)}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-primary">Unsere Vermarktung</p>
          <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight">Nicht nach Schema. <em className="text-primary">Passend zum Objekt.</em></h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {detail.marketing.map((item) => <div key={item} className="border-t border-primary pt-4"><p className="text-sm leading-7">{item}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-24">
          <div><p className="eyebrow text-primary">Der nächste Schritt</p><h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">Sie möchten Ihre Immobilie <em className="text-primary">besprechen?</em></h2><p className="mt-5 max-w-xl text-sm leading-7 text-background/65">Schreiben Sie uns kurz, worum es geht. Wir melden uns persönlich und ordnen gemeinsam ein, was jetzt sinnvoll ist.</p></div>
          <Link to="/kontakt" className="button-gold inline-flex shrink-0 items-center justify-center gap-3 px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em]">Kontakt aufnehmen <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}

function PropertyNotFound() {
  return <main className="mx-auto max-w-3xl px-5 py-28 sm:px-8 lg:px-12"><p className="eyebrow text-primary">Immobilien</p><h1 className="mt-5 font-serif text-5xl">Diese Kategorie wurde nicht gefunden.</h1><Link to="/" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-primary">Zur Startseite <ArrowUpRight className="h-4 w-4" /></Link></main>
}
