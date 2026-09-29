import { K_PATHS, LION_PATHS, MARK_TRANSFORM, MARK_VIEWBOX } from './kuhnke-mark-paths'

/**
 * Intro beim ersten Seitenaufruf pro Browser-Sitzung.
 *
 * Reines CSS (siehe `.intro*` in index.css): Das Overlay blendet sich am Ende der
 * Animation selbst aus – es hängt also nie fest, auch nicht ohne JS. Das Inline-
 * Script `introInitScript` im <head> setzt `intro-seen` auf <html>, wenn das Intro
 * in dieser Sitzung schon lief, dann wird es gar nicht erst gezeigt.
 * `prefers-reduced-motion` blendet es komplett aus.
 */
export const introInitScript = `(function(){try{var k='kuhnke-intro';if(sessionStorage.getItem(k)){document.documentElement.classList.add('intro-seen')}else{sessionStorage.setItem(k,'1')}}catch(e){}})()`

function MarkLayer({ paths, fill }: { paths: string[]; fill: string }) {
  return (
    <svg viewBox={MARK_VIEWBOX} className="intro__svg" aria-hidden="true" focusable="false">
      <g transform={MARK_TRANSFORM} fill={fill}>
        {paths.map((d, i) => <path key={i} d={d} />)}
      </g>
    </svg>
  )
}

export function IntroOverlay() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__stage">
        <div className="intro__mark">
          <div className="intro__lion"><MarkLayer paths={LION_PATHS} fill="var(--brand-ink)" /></div>
          <div className="intro__k"><MarkLayer paths={K_PATHS} fill="var(--brand-gold)" /></div>
        </div>
        <span className="intro__rule" />
        <p className="intro__word">Kuhnke Immobilien</p>
        <p className="intro__claim">Berlin mit Weitblick</p>
      </div>
    </div>
  )
}
