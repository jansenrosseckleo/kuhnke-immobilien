import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight, Award, Heart, MoveRight } from 'lucide-react'
import { ImagePlaceholder, PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome'

export const Route = createFileRoute('/ueber-marie')({
  head: () => ({ meta: [{ title: 'Über Kuhnke · Kuhnke Immobilien' }, { name: 'description', content: 'Marie Kuhnke und ihre persönliche Haltung zu Wohnimmobilien, Berlin und guter Beratung.' }] }),
  component: AboutMarie,
})

function AboutMarie() {
  return <div className="min-h-dvh bg-background"><SiteHeader /><main>
    <section className="mx-auto grid max-w-[1440px] gap-12 px-5 pb-20 pt-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:pb-32 lg:pt-28">
      <PageIntro kicker="Über Kuhnke" title={<>Persönlich, weil Immobilien immer auch <em className="text-primary">Lebensentwürfe</em> sind.</>} text="Kuhnke Immobilien ist bewusst persönlich gedacht. Marie Kuhnke begleitet ihre Kundinnen und Kunden selbst – mit Ruhe, Marktkenntnis und dem Anspruch, Entscheidungen gut verständlich zu machen." />
      <ImagePlaceholder src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85" alt="Helles Berliner Altbauzimmer mit hohen Fenstern" label="Portrait Marie Kuhnke · eigenes Bildmaterial folgt" className="aspect-[4/5] lg:mt-8" />
    </section>
    <section className="bg-foreground text-background"><div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-12 lg:py-28"><p className="eyebrow text-primary">Warum ich gegründet habe</p><div><p className="font-serif text-3xl leading-tight sm:text-5xl">„Ich wollte eine Beratung schaffen, die sich so anfühlt, wie sie sein sollte: aufmerksam, direkt und auf Augenhöhe.“</p><p className="mt-8 max-w-2xl text-sm leading-8 text-background/60">Berlin verändert sich ständig. Genau darin liegt seine Schönheit – und die Verantwortung, Immobilien nicht losgelöst vom Kiez, vom Alltag und von den Menschen zu betrachten. Ich verbinde klassische Maklertugenden mit zeitgemäßer Vermarktung und einem Prozess, der zu Ihnen passt.</p><Link to="/kontakt" className="mt-8 inline-flex items-center gap-3 border-b border-primary pb-2 text-xs uppercase tracking-[0.14em] text-primary hover:text-background">Lernen Sie mich kennen <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-10 md:grid-cols-3"><div className="md:col-span-1"><p className="eyebrow text-primary">Haltung &amp; Handwerk</p><h2 className="mt-5 font-serif text-4xl leading-tight">Klarheit in jedem Schritt.</h2></div><div className="grid gap-10 sm:grid-cols-3 md:col-span-2"><div><Heart className="h-5 w-5 text-primary" /><h3 className="mt-6 font-serif text-2xl">Nahbar</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Eine feste Ansprechpartnerin, ehrliche Einordnung und Kommunikation, die nicht um den Kern herumredet.</p></div><div><MoveRight className="h-5 w-5 text-primary" /><h3 className="mt-6 font-serif text-2xl">Zeitgemäß</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Strategie, Content und Social Media werden dort eingesetzt, wo sie für Ihre Immobilie wirklich Wirkung entfalten.</p></div><div><Award className="h-5 w-5 text-primary" /><h3 className="mt-6 font-serif text-2xl">Fundiert</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Zulassung nach §34c GewO, lokale Marktkenntnis und ein Blick für Details, die den Unterschied machen.</p></div></div></div></section>
  </main><SiteFooter /></div>
}
