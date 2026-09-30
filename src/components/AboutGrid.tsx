import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

const GWS = { src: '/icons/googleworkspace.svg', name: 'Google Workspace' }
const SLACK = { src: '/icons/slack.svg', name: 'Slack' }
const INTERCOM = { src: '/icons/intercom.svg', name: 'Intercom' }
const OPENAI = { src: '/icons/openai.svg', name: 'ChatGPT' }
const CANVA = { src: '/icons/ai/googlechrome.svg', name: 'Digital tools' }

type Capability = { index: string; title: string; marks: { src: string; name: string }[] }

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Customer Support & Communication', marks: [INTERCOM, GWS] },
  { index: '02', title: 'Business Operations & Coordination', marks: [GWS, SLACK] },
  { index: '03', title: 'CRM, Leads & Follow-up', marks: [INTERCOM, GWS] },
  { index: '04', title: 'Digital Support & Documentation', marks: [OPENAI, CANVA, GWS] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">{`Hi, I’m ${profile.firstName}.`}</h1>
        <p className="pgrid__lede">I help remote teams take care of customers, organize operations, and keep the details moving behind the scenes.</p>
      </header>
      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I bring customer support and operations together.
            <span> The goal is simple: clear communication, organized systems, and reliable follow-through.</span>
          </p>
          <p className="agrid__note">
            My experience spans <strong>U.S.-based field service and vacation rental operations</strong>, real estate support, executive and community support, financial customer service, e-commerce, and social media administration. I work across customer communication, scheduling, CRM records, research, documentation, follow-ups, website updates, and digital support.
          </p>
          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span key={m.name} className="agrid__mark" style={{ '--i': c.marks.length - i } as CSSProperties}>
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
              </li>
            ))}
          </ul>
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">GMT+8 · Remote</span>
              </span>
            </span>
            <a className="agrid__cell agrid__cell--wide" href={`mailto:${profile.email}`}>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">Let’s work together</span>
                <span className="agrid__cell-meta">{profile.email}</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="agrid__portrait">
          <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
