import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { profile } from './data/profile'
import './styles/tokens.css'
import './styles/global.css'
import './styles/portfolio.css'

const OLD='https://raw.githubusercontent.com/alyssaestrella0-create/Alyssa-Portfolio/main/images/'
const work=[
 ['Field Service Operations','Operations & Customer Support','servicecore%20schedule.png','ServiceCore · Scheduling · Customers'],
 ['Real Estate Operations','Real Estate Virtual Assistant','resimplicrm.png','REsimpli · Leads · Follow-up'],
 ['Process Documentation','SOPs & Workflow Support','sop%20playbook.png','SOPs · Checklists · Trackers'],
 ['Website & Local SEO','Digital Support','websitehomepage.png','Wix · SEO · Listings'],
]
const tools=['ServiceCore','REsimpli','Intercom','Google Workspace','Notion','Slack','Wix','Canva','Meta Business Suite','Airbnb & Vrbo']
const services=[
 ['Customer Support','Email · Chat · Follow-up'],
 ['Business Operations','Scheduling · Coordination'],
 ['CRM & Lead Support','Records · Pipelines · Leads'],
 ['Admin & Executive Support','Research · SOPs · Reporting'],
 ['Digital Support','Wix · SEO · Social'],
]
function Portfolio(){
 return <div className="pf">
  <aside className="pf-rail">
   <img className="pf-avatar" src={profile.avatarSrc} alt="Alyssa Mae Estrella"/>
   <h2>Alyssa Mae Estrella <span>✓</span></h2><p className="pf-handle">@alyssaestrella</p>
   <p className="pf-role">Customer Support &<br/>Business Operations</p>
   <nav>
    <a href="#home">⌂ <b>Home</b></a><a href="#work">▱ Work</a><a href="#services">◇ Services</a><a href="#experience">☆ Experience</a><a href="#about">♙ About</a><a href="#contact">○ Contact</a>
   </nav>
   <div className="pf-rail-foot">Metro Manila, Philippines<br/>GMT+8 · Remote</div>
  </aside>
  <main className="pf-main">
   <section id="home" className="pf-hero">
    <div><p className="eyebrow">CUSTOMER SUPPORT & BUSINESS OPERATIONS SPECIALIST</p><h1>Supporting customers.<br/>Keeping operations moving.</h1><p className="lede">I help service businesses and remote teams stay organized behind the scenes—from customer communication and CRM management to scheduling, technician coordination, follow-ups, documentation, and digital support.</p></div>
    <a className="pill" href="mailto:alyssaestrella0@gmail.com">Get in touch ↗</a>
   </section>
   <section className="toolbar"><div><small>DAILY DRIVERS</small><b>Tools I work with</b></div><div className="toolscroll">{tools.map(t=><span key={t}>{t}</span>)}</div></section>
   <section id="work" className="dashboard">
    <article className="card projects"><div className="cardhead"><h3>▣ Selected Work</h3><p>Real systems and operational work samples.</p></div><div className="thumbgrid">{work.map(([a,b,img])=><div className="thumb" key={a}><img src={OLD+img}/><b>{a}</b><small>{b}</small></div>)}</div></article>
    <article id="about" className="card about"><h3>● About</h3><p>I support customers and day-to-day business operations with clear communication, accurate records, organized follow-ups, and documented processes.</p><img src={profile.avatarSrc}/><a href="#aboutdetail">More about me →</a></article>
    <article className="card systems"><h3>▦ Core Systems</h3><p>Platforms I use in real operations.</p><div className="chips">{['ServiceCore','REsimpli','Intercom','Notion','Wix','Google Workspace'].map(x=><span key={x}>{x}</span>)}</div></article>
    <article className="card credential"><h3>◎ Experience</h3><div className="badge">4+</div><b>Years of customer & admin support</b><p>International customers · U.S. businesses · Remote teams</p></article>
    <article id="services" className="card servicecard"><h3>▱ Services</h3>{services.map(([a,b],i)=><div className="service" key={a}><span>{a}<small>{b}</small></span><em>0{i+1}</em></div>)}</article>
    <article id="experience" className="card experience"><h3>❞ Experience</h3>{work.slice(0,3).map(([a,b,,d])=><div className="exp" key={a}><b>{a}</b><span>{b}</span><small>{d}</small></div>)}</article>
   </section>
   <section id="aboutdetail" className="detail">
    <div><p className="eyebrow">ABOUT</p><h2>Hi, I’m Alyssa.</h2></div>
    <div><p>I’m a Customer Support & Business Operations Specialist with 4+ years of experience supporting international customers, U.S.-based businesses, and remote teams.</p><p>My work sits where customer experience and day-to-day operations meet: keeping communication clear, CRM records accurate, schedules moving, follow-ups completed, and processes documented.</p><p>I’ve supported field service operations, vacation rentals, real estate lead management, executive and community support, customer service, social media, and administrative workflows.</p></div>
   </section>
   <section id="contact" className="contact"><p className="eyebrow">LET'S WORK TOGETHER</p><h2>Need reliable support behind the scenes?</h2><p>For customer support, operations, CRM, admin, or digital support opportunities, send me an email.</p><a className="pill" href="mailto:alyssaestrella0@gmail.com">alyssaestrella0@gmail.com ↗</a></section>
   <footer><b>Alyssa Mae Estrella</b><span>Customer Support & Business Operations Specialist</span><span>© 2026 Alyssa Mae Estrella</span></footer>
  </main>
 </div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><Portfolio/></StrictMode>)
