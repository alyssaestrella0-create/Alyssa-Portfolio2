import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/tokens.css'
import './styles/global.css'
import './styles/portfolio.css'

const OLD='https://raw.githubusercontent.com/alyssaestrella0-create/Alyssa-Portfolio/main/images/'
const photo=OLD+'ProfessionalPhoto.png'
const cards=[
 ['Projects','Selected work across operations, CRM, administration, research and digital support.','servicecore%20schedule.png'],
 ['About','4+ years supporting international customers, U.S.-based businesses and remote teams.',photo],
 ['Systems & Tools','ServiceCore · REsimpli · Intercom · Notion · Google Workspace · Wix · Canva','resimplicrm.png'],
 ['Operations & CRM','Scheduling · coordination · records · pipelines · follow-ups','servicecore%20customers.png'],
 ['Admin & Documentation','SOPs · trackers · reports · research · recurring workflows','sop%20playbook.png'],
 ['Digital Support','Website updates · local SEO · listings · social media support','websitehomepage.png'],
]
const experience=[
 ['Operations & Customer Support Specialist','July 2025 – Present','U.S.-based service and vacation rental operations'],
 ['Real Estate Virtual Assistant','May 2025 – May 2026','U.S. real estate operations'],
 ['Executive Assistant & Community Manager','June 2025 – September 2025','International remote team'],
 ['Customer Support Representative','2024 – 2025','UK financial account'],
 ['Social Media Manager & Administrative Assistant','2022 – 2024','Automotive dealership'],
]
function App(){
 return <div style={{minHeight:'100vh',background:'#f4f2ea',color:'#10264b',fontFamily:'Inter,Arial,sans-serif'}}>
  <aside className="side"><img src={photo}/><h2>Alyssa Mae Estrella</h2><p>@alyssaestrella</p><nav>{['Home','Projects','Experience','Skills & Tools','About','Contact'].map(x=><a key={x} href={'#'+x.toLowerCase().replaceAll(' ','-').replace('&','and')}>{x}</a>)}</nav><small>Metro Manila, Philippines<br/>Remote professional</small></aside>
  <main className="page">
   <section id="home" className="hero"><div><p className="eyebrow">VIRTUAL ASSISTANT · OPERATIONS · CUSTOMER SUPPORT · ADMIN</p><h1>Reliable support for busy teams and growing businesses.</h1><p className="lead">I provide flexible remote support across business operations, customer communication, CRM management, administration, research, documentation, and digital tasks.</p><a className="button" href="mailto:alyssaestrella0@gmail.com">Get in touch ↗</a></div></section>
   <section id="projects"><div className="sectionhead"><p className="eyebrow">PORTFOLIO</p><h2>What I can support</h2></div><div className="grid">{cards.map(([t,d,img])=><article className="card" key={t}><img src={img.startsWith('http')?img:OLD+img}/><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
   <section id="experience"><div className="sectionhead"><p className="eyebrow">EXPERIENCE</p><h2>A generalist background built for remote work.</h2></div><div className="exp">{experience.map(([r,date,desc])=><article key={r}><div><h3>{r}</h3><p>{desc}</p></div><strong>{date}</strong></article>)}</div></section>
   <section id="skills-and-tools"><div className="sectionhead"><p className="eyebrow">SKILLS & TOOLS</p><h2>Practical support across the business.</h2></div><div className="skills">{[
    ['Business Operations','Scheduling, service workflows, coordination, follow-ups, reporting'],
    ['Customer Support','Email, chat, customer communication, issue handling, escalation'],
    ['CRM & Lead Support','ServiceCore, REsimpli, Intercom, records, pipelines, lead follow-up'],
    ['Administrative Support','Google Workspace, Microsoft Office, research, data entry, documentation'],
    ['Executive & Community Support','Recurring tasks, reminders, announcements, member communication'],
    ['Digital & Marketing Support','Wix, Canva, Meta Business Suite, local SEO, listings, social support']
   ].map(([t,d])=><div><h3>{t}</h3><p>{d}</p></div>)}</div></section>
   <section id="about" className="about"><div><p className="eyebrow">ABOUT</p><h2>Hi, I’m Alyssa.</h2></div><div><p>I’m a remote support professional with 4+ years of experience across customer service, business operations, real estate support, executive assistance, administration, social media, and digital support.</p><p>I’m comfortable stepping into busy environments, learning the system, organizing recurring work, communicating clearly, and helping the team keep day-to-day tasks moving.</p></div></section>
   <section id="contact" className="contact"><p className="eyebrow">CONTACT</p><h2>Looking for dependable remote support?</h2><p>I’m open to opportunities where I can support customers, operations, administration, CRM workflows, or digital tasks.</p><a className="button" href="mailto:alyssaestrella0@gmail.com">alyssaestrella0@gmail.com ↗</a><footer>© 2026 Alyssa Mae Estrella · Metro Manila, Philippines</footer></section>
  </main>
 </div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>)
