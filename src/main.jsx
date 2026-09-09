import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const nav = [
  ['O MNIE','o-mnie.html'], ['RELATIONSHIP','relationship.html'], ['FOTOGRAFIA','fotografia.html'], ['KSIĄŻKI','ksiazki.html'],
  ['FILM','zwiastuny.html'], ['MASAŻE','masaze.html'], ['APLIKACJE','aplikacje.html'], ['AGENCI','agenci.html'], ['PROJEKTY','projekty.html'],
]

function Menu({open,onClose}) {
  if (!open) return null
  return <div className="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu główne">
    <button className="menu-close" onClick={onClose} aria-label="Zamknij menu">×</button>
    <div className="menu-grid">
      <div>{nav.slice(0,4).map(([label,href])=><a key={href} href={href}>{label}</a>)}</div>
      <div>{nav.slice(4).map(([label,href])=><a key={href} href={href}>{label}</a>)}</div>
    </div>
    <div className="menu-foot"><a href="publikacje.html">PUBLIKACJE</a><a href="nagrody.html">NAGRODY</a><a href="kontakt.html">KONTAKT</a></div>
  </div>
}

function Header({onMenu}) {
  const [compact,setCompact] = useState(false)
  useEffect(()=>{ const fn=()=>setCompact(window.scrollY>48); window.addEventListener('scroll',fn,{passive:true}); fn(); return()=>window.removeEventListener('scroll',fn)},[])
  return <header className={`site-nav ${compact?'compact':''}`}>
    <a href="/" className="brand"><img src="/assets/logo-master.svg" alt="Andrzej Mikulski — MojeAlterego" /></a>
    <button className="menu-trigger" onClick={onMenu}>MENU <span>↗</span></button>
  </header>
}

function App(){
  const [menu,setMenu]=useState(false)
  return <div className="site">
    <Header onMenu={()=>setMenu(true)}/><Menu open={menu} onClose={()=>setMenu(false)}/>
    <main>
      <section className="hero">
        <div className="hero-material" aria-hidden="true"/><div className="hero-light" aria-hidden="true"/>
        <div className="hero-content">
          <img className="hero-logo" src="/assets/logo-master.svg" alt="Andrzej Mikulski — MojeAlterego"/>
          <p className="hero-tag">CZŁOWIEK. OBRAZ. RELACJA. TECHNOLOGIA.</p>
          <p className="hero-lead">Świat tworzony pomiędzy rzeczywistością, obrazem, słowem i technologią.</p>
          <a className="entry" href="#world">WEJDŹ DO ŚWIATA <span>↓</span></a>
        </div>
      </section>

      <section id="world" className="manifest section">
        <div className="eyebrow">01 / MANIFEST</div>
        <div className="manifest-grid"><h2>Nie tworzę jednej rzeczy.<br/><em>Tworzę własny język.</em></h2><div><p>Fotografia nauczyła mnie patrzeć. Fotoreportaż — dostrzegać prawdę w sytuacjach, w których emocje często przesłaniają obraz. Twórczość, książki, relacje i technologia pozwalają ten sposób patrzenia rozwijać dalej.</p><p>MojeAlterego jest mapą pracy: ludzi, historii, obrazów, słów, idei i systemów.</p></div></div>
      </section>

      <section className="domains section">
        <Domain n="01" title="RELACJA" text="Relationship Coaching i praca nad rozumieniem relacji." href="relationship.html" />
        <Domain n="02" title="FOTOGRAFIA" text="Reportaż, street photo, portret i dokument." href="fotografia.html" />
        <Domain n="03" title="KSIĄŻKI" text="Literatura, publikacje i autorskie światy." href="ksiazki.html" />
        <Domain n="04" title="TECHNOLOGIA" text="Aplikacje, agenci AI, projekty i eksperymenty." href="projekty.html" />
      </section>

      <section className="numbers section"><Stat value="2000+" label="nagród, wyróżnień i akceptacji"/><Stat value="300+" label="wystaw zbiorowych"/><Stat value="40+" label="krajów prezentacji prac"/><Stat value="16" label="wystaw indywidualnych"/><Stat value="75 000+" label="członków społeczności"/></section>

      <section className="quote section"><span>“</span><blockquote>Czasem człowiek nie potrzebuje kolejnej rady.<br/><em>Potrzebuje kogoś, kto pomoże mu zobaczyć prawdę.</em></blockquote><small>— ANDRZEJ MIKULSKI —</small></section>

      <section className="world-index section"><div className="eyebrow">05 / WORLD INDEX</div><div className="index-list">{nav.map(([label,href],i)=><a key={href} href={href}><span>{String(i+1).padStart(2,'0')}</span><strong>{label}</strong><i>↗</i></a>)}</div></section>

      <section className="contact-band"><div><span className="eyebrow">NAWIĄŻMY KONTAKT</span><h2>W jakiej sprawie<br/>chcesz się skontaktować?</h2></div><a className="entry" href="kontakt.html">KONTAKT ↗</a></section>
    </main>
    <footer><span>© 2026 ANDRZEJ MIKULSKI · MOJEALTEREGO</span><span>THE WORLD IS LARGER THAN THE PAGE.</span><a href="kontakt.html">KONTAKT</a></footer>
  </div>
}

function Domain({n,title,text,href}){return <article className="domain"><span>{n}</span><div><h2>{title}</h2><p>{text}</p><a href={href}>WEJDŹ DO DZIAŁU ↗</a></div></article>}
function Stat({value,label}){return <div className="stat"><strong>{value}</strong><span>{label}</span></div>}

createRoot(document.getElementById('root')).render(<App/>)
