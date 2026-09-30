import type { ReactNode } from 'react'
import WorkflowSamples from './WorkflowSamples'
import AIStackGrid from './AIStackGrid'
import { AppsSection } from './Projects'

const OLD = 'https://raw.githubusercontent.com/alyssaestrella0-create/Alyssa-Portfolio/main/images/'

function SectionWindow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="ppanel ppanel--window">
      <div className="ppanel__bar">
        <span className="ppanel__dots" aria-hidden="true"><i /><i /><i /></span>
        <span className="ppanel__url"><span className="ppanel__url-host">{label}</span></span>
      </div>
      <div className="ppanel__scroll">{children}</div>
    </div>
  )
}

function WorkSample({ label, image, description }: { label: string; image: string; description: string }) {
  return (
    <SectionWindow label={label}>
      <div style={{ padding: '1.25rem', display: 'grid', gap: '1rem' }}>
        <img src={OLD + image} alt={label} style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
        <p style={{ margin: 0, lineHeight: 1.7 }}>{description}</p>
      </div>
    </SectionWindow>
  )
}

export function AutomationsPanel() {
  return <div className="ppanel ppanel--strip"><WorkflowSamples /></div>
}

export function BarrelPanel() {
  return <WorkSample label="Website & Local SEO Support" image="websitehomepage.png" description="Website updates, service-area content, local SEO tracking, metadata and indexing support, business listings, and ongoing visibility work." />
}

export function AIWindow() {
  return <SectionWindow label="Alyssa · systems & tools"><AIStackGrid /></SectionWindow>
}

export function AppsWindow() {
  return <SectionWindow label="Alyssa · work platforms"><AppsSection /></SectionWindow>
}

export function PlanPanel() {
  return <WorkSample label="Process Documentation" image="sop%20playbook.png" description="SOPs, checklists, training guides, trackers, and recurring reports created to make operational work easier to follow and less likely to be missed." />
}

export function TicketingPanel() {
  return <WorkSample label="Field Service Operations & Dispatch" image="servicecore%20schedule.png" description="Hands-on support for scheduling, customer communication, technician coordination, ServiceCore records, estimates, invoices, payment follow-up, and daily operational tasks." />
}

export function FrameworkPanel() {
  return <WorkSample label="Real Estate CRM & Lead Management" image="resimplicrm.png" description="REsimpli pipeline upkeep, contact and lead-stage updates, drip campaigns, follow-up support, contract information, property listings, and related administrative work." />
}

export function WorkflowPanel() {
  return <WorkSample label="SOPs, Trackers & Process Support" image="seoprogresstracker.png" description="Structured documentation and trackers used to organize recurring work, monitor progress, support handoffs, and keep next actions visible." />
}
