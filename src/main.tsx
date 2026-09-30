import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { profile } from './data/profile'
import './styles/tokens.css'
import './styles/global.css'

const OLD = 'https://raw.githubusercontent.com/alyssaestrella0-create/Alyssa-Portfolio/main/images/'
const samples = [
  ['Field Service Operations & Dispatch', 'servicecore%20schedule.png', 'ServiceCore scheduling, customer communication, technician coordination, estimates, invoices, payment follow-up, and daily operational support.'],
  ['Real Estate CRM & Lead Management', 'resimplicrm.png', 'REsimpli pipeline upkeep, contact and lead-stage updates, drip campaigns, follow-up support, contract information, and property listing support.'],
  ['SOPs, Trackers & Process Support', 'sop%20playbook.png', 'SOPs, checklists, training materials, trackers, daily reports, and recurring workflows that keep work organized.'],
  ['Website & Local SEO Support', 'websitehomepage.png', 'Wix updates, service-area content, Google Business Profile support, local listings, metadata, indexing, and SEO tracking.'],
]

function Portfolio() {
  return <main style={{maxWidth:1120,margin:'0 auto',padding:'48px 24px 80px',fontFamily:'Inter,system-ui,sans-serif',color:'#171614'}}>
    <section style={{display:'grid',gridTemplateColumns:'1.5fr 1fr',gap:40,alignItems:'center',minHeight:'72vh'}}>
      <div>
        <p style={{fontSize:14,fontWeight:700,letterSpacing:1.2,textTransform:'uppercase'}}>Customer Support & Business Operations Specialist</p>
        <h1 style={{fontSize:'clamp(48px,7vw,88px)',lineHeight:.95,margin:'20px 0 28px',letterSpacing:-3}}>Supporting customers.<br/>Keeping operations moving.</h1>
        <p style={{fontSize:20,lineHeight:1.65,maxWidth:720}}>I help service businesses and remote teams stay organized behind the scenes—from customer communication and CRM management to scheduling, technician coordination, follow-ups, documentation, and digital support.</p>
        <a href="mailto:alyssaestrella0@gmail.com" style={{display:'inline-block',marginTop:28,padding:'14px 20px',background:'#171614',color:'white',borderRadius:999,textDecoration:'none',fontWeight:700}}>Get in touch</a>
      </div>
      <img src={profile.avatarSrc} alt="Alyssa Mae Estrella" style={{width:'100%',maxWidth:380,justifySelf:'center',borderRadius:28,objectFit:'cover'}}/>
    </section>

    <section style={{padding:'64px 0'}}>
      <p style={{fontWeight:700,textTransform:'uppercase',letterSpacing:1}}>How I support teams</p>
      <h2 style={{fontSize:42,margin:'12px 0 30px'}}>Customer experience meets day-to-day operations.</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:16}}>
        {['Customer Support','Business Operations','CRM & Lead Support','Admin & Executive Support','Digital Support'].map(x=><div key={x} style={{padding:24,border:'1px solid #ddd5cc',borderRadius:18,background:'#f7f4ef',fontWeight:700,fontSize:18}}>{x}</div>)}
      </div>
    </section>

    <section style={{padding:'64px 0'}}>
      <p style={{fontWeight:700,textTransform:'uppercase',letterSpacing:1}}>Selected work</p>
      <h2 style={{fontSize:42,margin:'12px 0 30px'}}>Real systems and work samples.</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:24}}>
        {samples.map(([title,img,desc])=><article key={title} style={{border:'1px solid #ddd5cc',borderRadius:22,overflow:'hidden',background:'#fff'}}>
          <img src={OLD+img} alt={title} style={{width:'100%',height:220,objectFit:'cover',display:'block'}}/>
          <div style={{padding:24}}><h3 style={{fontSize:23,margin:'0 0 12px'}}>{title}</h3><p style={{lineHeight:1.65,margin:0}}>{desc}</p></div>
        </article>)}
      </div>
    </section>

    <section style={{padding:'64px 0',display:'grid',gridTemplateColumns:'1fr 1fr',gap:36}}>
      <div><p style={{fontWeight:700,textTransform:'uppercase',letterSpacing:1}}>About</p><h2 style={{fontSize:42,margin:'12px 0 20px'}}>Hi, I’m Alyssa.</h2></div>
      <div style={{fontSize:18,lineHeight:1.75}}><p>I’m a Customer Support & Business Operations Specialist with 4+ years of experience supporting international customers, U.S.-based businesses, and remote teams.</p><p>My work sits where customer experience and day-to-day operations meet: keeping communication clear, CRM records accurate, schedules moving, follow-ups completed, and processes documented.</p></div>
    </section>

    <section style={{padding:'64px 0',borderTop:'1px solid #ddd5cc'}}>
      <h2 style={{fontSize:42,margin:'0 0 16px'}}>Need reliable support behind the scenes?</h2>
      <p style={{fontSize:18}}>Based in Metro Manila, Philippines · Available for remote opportunities.</p>
      <a href="mailto:alyssaestrella0@gmail.com" style={{fontSize:20,fontWeight:700,color:'inherit'}}>alyssaestrella0@gmail.com</a>
    </section>
  </main>
}

createRoot(document.getElementById('root')!).render(<StrictMode><HashRouter><Portfolio /></HashRouter></StrictMode>)
