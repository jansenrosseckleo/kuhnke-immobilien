import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight, Camera, MessageCircle } from 'lucide-react'
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome'

export const Route = createFileRoute('/referenzen')({
  head: () => ({ meta: [{ title: 'Referenzen · Kuhnke Immobilien' }, { name: 'description', content: 'Ein kuratierter Bereich für künftige Erfolgsprojekte und persönliche Stimmen.' }] }),
  component: References,
})

function References() {
  return <div className="min-h-dvh bg-background"><SiteHeader /><main><section className="mx-auto max-w-[1440px] px-5 pb-20 pt-20 sm:px-8 lg:px-12 lg:pb-28 lg:pt-28"><PageIntro kicker="Referenzen & Erfolgsprojekte" title={<>Gute Arbeit wird <em className="text-primary">sichtbar.</em></>} text="Dieser Bereich ist für die Geschichten reserviert, die später hier erzählt werden: besondere Immobilien, klare Entscheidungen und Menschen, die ihren nächsten Schritt gefunden haben." /></section><section className="bg-muted"><div className="mx-auto grid max-w-[1440px] gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-12 lg:py-24">{['Case Study · Wohnimmobilie', 'Vorher / Nachher · Vermarktung', 'Stimme · Verkäuferperspektive'].map((title, index) => <div key={title} className="flex min-h-[320px] flex-col justify-between border border-border bg-background p-6 transition hover:border-primary"><div><div className="flex items-center justify-between"><span className="font-sans text-xs text-primary">0{index + 1}</span>{index === 0 ? <Camera className="h-5 w-5 text-primary" /> : index === 1 ? <ArrowUpRight className="h-5 w-5 text-primary" /> : <MessageCircle className="h-5 w-5 text-primary" />}</div><div className="mt-14 h-20 border border-dashed border-primary/50 bg-primary/5" /></div><div><h2 className="font-serif text-2xl">{title}</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Platzhalter für Bild, Kennzahlen und die persönliche Geschichte dahinter.</p></div></div>)}</div></section></main><SiteFooter /></div>
}
