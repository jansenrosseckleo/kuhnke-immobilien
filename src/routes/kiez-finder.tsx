import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, Compass, RotateCcw } from 'lucide-react'
import { useState } from 'react'
import { PageIntro, SiteFooter, SiteHeader } from '@/components/site-chrome'

export const Route = createFileRoute('/kiez-finder')({
  head: () => ({ meta: [{ title: 'Kiez-Finder · Kuhnke Immobilien' }, { name: 'description', content: 'Finden Sie heraus, welche Berliner Kieze zu Ihrem Alltag und Ihren Wünschen passen.' }] }),
  component: KiezFinder,
})

type AnswerKey = 'life' | 'budget' | 'pace' | 'nature' | 'commute'
const questions: { key: AnswerKey; label: string; options: string[] }[] = [
  { key: 'life', label: 'Wie sieht Ihr Alltag gerade aus?', options: ['Allein oder zu zweit', 'Familie mit Kindern', 'Neustart in Berlin', 'Kapitalanlage'] },
  { key: 'budget', label: 'In welchem Rahmen bewegen Sie sich?', options: ['Bis 500.000 €', '500.000–850.000 €', '850.000–1.500.000 €', 'Ich möchte erst vergleichen'] },
  { key: 'pace', label: 'Was soll Ihre Umgebung ausstrahlen?', options: ['Ruhig und gewachsen', 'Urban und mittendrin', 'Kreativ und im Wandel', 'Grün und weit'] },
  { key: 'nature', label: 'Wie wichtig sind Grünflächen oder Wasser?', options: ['Sehr wichtig', 'Schön, aber nicht entscheidend', 'Ich mag urbane Dichte', 'Das Objekt steht im Vordergrund'] },
  { key: 'commute', label: 'Wie bewegen Sie sich am liebsten durch Berlin?', options: ['ÖPNV und Fahrrad', 'Auto und gute Anbindung', 'Kurze Wege zu Fuß', 'Flexibel – Hauptsache Kiezgefühl'] },
]
const recommendations = [
  { name: 'Kreuzberg', note: 'urban · kreativ · lebendig', text: 'Für Menschen, die kurze Wege, Kultur und eine offene Nachbarschaft suchen.' },
  { name: 'Pankow', note: 'grün · gewachsen · vielseitig', text: 'Ein ruhigerer Rhythmus mit Altbau, Familienleben und guter Verbindung in die Mitte.' },
  { name: 'Treptow', note: 'wasser · entspannt · im Wandel', text: 'Zwischen Spree, Industriegeschichte und neuen Perspektiven für den Alltag.' },
]

function KiezFinder() {
  const [step, setStep] = useState(0)
  const [, setAnswers] = useState<Partial<Record<AnswerKey, string>>>({})
  const current = questions[step]
  const finished = step >= questions.length
  const choose = (answer: string) => { setAnswers((previous) => ({ ...previous, [current.key]: answer })); setStep((value) => value + 1) }
  const reset = () => { setAnswers({}); setStep(0) }
  return <div className="min-h-dvh bg-background"><SiteHeader /><main className="mx-auto max-w-[1440px] px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pt-28"><div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]"><div><PageIntro kicker="Kiez-Finder · 5 Fragen" title={<>Welcher Kiez fühlt sich nach <em className="text-primary">Ihrem</em> an?</>} text="Beantworten Sie fünf kurze Fragen. Am Ende erhalten Sie eine erste Richtung – und auf Wunsch eine persönliche Einordnung von Marie." /><Link to="/" className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Zur Startseite</Link></div><section className="border-t-2 border-primary pt-7 lg:mt-5" aria-live="polite">{!finished ? <><div className="flex items-center justify-between text-xs uppercase tracking-[0.14em] text-muted-foreground"><span>Frage {step + 1} von {questions.length}</span><span>{Math.round((step / questions.length) * 100)}%</span></div><div className="mt-4 h-1 bg-muted"><div className="h-1 bg-primary transition-all duration-500" style={{ width: `${(step / questions.length) * 100}%` }} /></div><div className="mt-14"><p className="eyebrow text-primary">{current.key === 'life' ? 'Ihr Alltag' : current.key === 'budget' ? 'Ihr Rahmen' : current.key === 'pace' ? 'Ihr Rhythmus' : current.key === 'nature' ? 'Ihre Umgebung' : 'Ihre Wege'}</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">{current.label}</h2><div className="mt-10 grid gap-3 sm:grid-cols-2">{current.options.map((option) => <button key={option} type="button" onClick={() => choose(option)} className="group flex min-h-16 items-center justify-between border border-border px-5 text-left text-sm transition hover:border-primary hover:bg-muted"><span>{option}</span><ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" /></button>)}</div></div></> : <div><Compass className="h-8 w-8 text-primary" /><p className="eyebrow mt-8 text-primary">Ihre erste Richtung</p><h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">Drei Kieze, die zu Ihren Antworten passen könnten.</h2><div className="mt-10 grid gap-4">{recommendations.map((item) => <div key={item.name} className="border border-border p-5 transition hover:border-primary"><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-serif text-2xl">{item.name}</h3><span className="font-sans text-[0.62rem] uppercase tracking-[0.12em] text-primary">{item.note}</span></div><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></div>)}</div><div className="mt-8 flex flex-wrap gap-5"><Link to="/kontakt" className="button-gold inline-flex items-center gap-3 px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em]">Persönlich besprechen <ArrowRight className="h-4 w-4" /></Link><button type="button" onClick={reset} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"><RotateCcw className="h-4 w-4" /> Neu starten</button></div></div>}</section></div><div className="mt-20 border-t border-border pt-6 text-xs leading-6 text-muted-foreground"><span className="font-sans text-primary">Hinweis</span><span className="ml-4">Der Kiez-Finder ist eine inspirierende erste Orientierung und ersetzt keine persönliche Beratung.</span></div></main><SiteFooter /></div>
}
