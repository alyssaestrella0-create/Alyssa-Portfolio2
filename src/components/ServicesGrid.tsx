import type { CSSProperties } from 'react'
import { MagnetStraight, Timer, Trophy, CheckCircle } from '@/components/slab'
import type { Icon } from '@/components/slab'
import Autopilot, { TOOLS } from '@/components/Autopilot'

/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Three bands, top to bottom: your three-step method (on a dark plate so it
 * is the first thing the eye lands on), the five services as cards that carry
 * the marks of what each one is built with, and the live automation demo
 * scaled into whatever height is left. Same object language as Home and
 * Projects: the glass, the bento card, plated marks, orange for the index
 * and the accent.
 *
 * Every string below is a PLACEHOLDER. Replace it, or hand this file to your
 * AI assistant and tell it what to put in each spot.
 */

/* ---------- The method ---------- */

type Stage = {
  index: string
  label: string
  body: string
  Icon: Icon
  chips: string[]
}

const STAGES: Stage[] = [
  { index: '01', label: 'Understand', body: 'Get clear on the customer, task, priority, and the system it belongs in.', Icon: MagnetStraight, chips: ['Customers', 'Inbox', 'CRM', 'Priorities'] },
  { index: '02', label: 'Coordinate', body: 'Keep communication, schedules, records, and follow-ups moving across the right people.', Icon: Timer, chips: ['Scheduling', 'Updates', 'Vendors'] },
  { index: '03', label: 'Close the loop', body: 'Document the outcome, update the system, and make sure the next action is not missed.', Icon: Trophy, chips: ['Follow-up', 'Documentation', 'Reporting'] },
]

/* ---------- The services ---------- */

// Tool marks used on service cards.
const INTERCOM = '/icons/intercom.svg'
const OPENAI = '/icons/openai.svg'
const GWS = '/icons/googleworkspace.svg'
const SLACK = '/icons/slack.svg'
const CHROME = '/icons/ai/googlechrome.svg'

type Service = {
  index: string
  title: string
  description: string
  chip: string
  logos: string[]
  bullets: string[]
}

const SERVICES: Service[] = [
  { index: '01', title: 'Customer Support', description: 'Clear, professional support across chat, email, customer updates, and issue follow-up.', chip: 'Customer Experience', logos: [INTERCOM, GWS], bullets: ['Email & chat support', 'Issue follow-up & escalation', 'Customer record accuracy'] },
  { index: '02', title: 'Business Operations', description: 'Day-to-day coordination that keeps service work, schedules, and priorities organized.', chip: 'Operations', logos: [GWS, SLACK], bullets: ['Scheduling & coordination', 'Technician/vendor follow-up', 'Daily trackers & reporting'] },
  { index: '03', title: 'CRM & Lead Support', description: 'Clean pipelines, accurate records, consistent follow-ups, and organized lead activity.', chip: 'CRM', logos: [INTERCOM, GWS], bullets: ['CRM updates', 'Lead follow-up', 'Pipeline organization'] },
  { index: '04', title: 'Admin & Executive Support', description: 'Reliable administrative support for busy founders, managers, and remote teams.', chip: 'Admin', logos: [GWS, SLACK], bullets: ['Inbox & task support', 'Research & documentation', 'SOPs & checklists'] },
  { index: '05', title: 'Digital Support', description: 'Practical support for websites, local SEO, social content, listings, and online research.', chip: 'Digital', logos: [OPENAI, GWS, CHROME], bullets: ['Wix & website updates', 'Local SEO & listings', 'Content & research support'] },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- The page ---------- */

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Support that keeps the customer experience and the operation moving.
        </h1>
        <p className="pgrid__lede">
          Flexible support across customers, operations, CRM, administration, and digital work.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        {/* One dark plate, the headline on the left, the three stages wired
            in order on the right with a signal running them. */}
        <div className="sgrid__method" aria-labelledby="method-title">
          <div className="sgrid__method-copy">
            <span className="sgrid__method-eyebrow">How I Work</span>
            <h2 className="sgrid__method-title" id="method-title">
              One. Two. Three.
              <br />
              <span>A simple three-step approach.</span>
            </h2>
            <p className="sgrid__method-sub">
              I keep the right information in the right place, communicate clearly, and follow tasks through to completion.
            </p>
          </div>

          <ol className="sgrid__stages" role="list">
            {STAGES.map((s, i) => {
              const StageIcon = s.Icon
              return (
                <li key={s.index} className="sgrid__stage" style={{ '--i': i } as CSSProperties}>
                  <span className="sgrid__stage-ghost" aria-hidden="true">{s.index}</span>
                  <span className="sgrid__stage-icon" aria-hidden="true">
                    <StageIcon size={22} weight="duotone" />
                  </span>
                  <h3 className="sgrid__stage-label">{s.label}.</h3>
                  <p className="sgrid__stage-body">{s.body}</p>
                  <ul className="sgrid__stage-chips" role="list" aria-label={`${s.label} touches`}>
                    {s.chips.map((c) => (
                      <li key={c} className="sgrid__stage-chip">{c}</li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        {/* Five cards, each carrying the marks of what it is built with. */}
        <div className="sgrid__offers">
          <div className="sgrid__offers-head">
            <h2 className="sgrid__offers-title">Ways I can support your team.</h2>
            <p className="sgrid__offers-sub">Built around the work I already handle in real remote operations.</p>
          </div>
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">{s.index} / 05</span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
                <span className="sgrid__chip" aria-hidden="true">{s.chip}</span>
                <ul className="sgrid__bullets" role="list">
                  {s.bullets.map((b) => (
                    <li key={b} className="sgrid__bullet">
                      <CheckCircle size={15} weight="duotone" aria-hidden="true" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* The live workflow. Its caption and the tool chips sit in a header
            above the window, so the canvas gets the whole glass width. */}
        <div className="sgrid__flow">
          <header className="sgrid__flow-head">
            <div className="sgrid__flow-copy">
              <span className="sgrid__flow-eyebrow">Workflow example</span>
              <h2 className="sgrid__flow-title">Organized work from request to follow-up.</h2>
              <p className="sgrid__flow-sub">
                A visual example of how I think about incoming work: capture it, route it, update the record, and make sure the next action happens.
              </p>
            </div>
            <ul className="sgrid__flow-tools" role="list" aria-label="Tools that power this flow">
              {TOOLS.map(({ Icon: ToolIcon, label }) => (
                <li key={label} className="sgrid__flow-tool">
                  <ToolIcon size={14} weight="duotone" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </header>
          <div className="sgrid__flow-main">
            <Autopilot compact maxScale={1.08} />
          </div>
        </div>
      </div>
    </section>
  )
}
