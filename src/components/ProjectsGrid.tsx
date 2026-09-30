import { Fragment, useCallback, useEffect, useRef, useState, type ComponentType, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { ArrowUpRight, X, Ticket, Robot, FlowArrow, CursorClick } from '@/components/slab'
import { FlowIcon, PlanIcon, GlobeIcon, SparkIcon, DeviceIcon } from './ProjectIcons'
import { AutomationsPanel, PlanPanel, TicketingPanel, FrameworkPanel, WorkflowPanel, BarrelPanel, AIWindow, AppsWindow } from './ProjectPanels'
import { mobileApps } from '@/data/projects'
import { aiStack, type StackNode } from '@/data/ai-stack'
import { useIsPhone } from '@/hooks/useMediaQuery'

/**
 * Projects, as one viewport in Home's bento language: a glass panel of six
 * cards, each previewing its own body of work with a live inner track, each
 * opening the work itself in a near-fullscreen dialog (see ProjectPanels for
 * the first three; the rest are the sections the long page used to stack).
 *
 * The dialog is a portal at z 8000, under the funnel preview (9000) so the
 * barrel's own "open this page" dialog can still stack on top of it.
 */
type Project = {
  id: string
  index: string
  title: string
  desc: string
  Icon: ComponentType<{ size?: number }>
  eyebrow: string
  Section: ComponentType
  span?: 2
  /** Open Builds style: a small orange kicker above the title. */
  kicker?: string
  /** Real marks of what the work was built in; replaces the icon tile. */
  logos?: string[]
  Preview: ComponentType
  /** Phone filter bucket. */
  cat: Cat
}

type Cat = 'work' | 'sites' | 'apps' | 'ai'
const FILTERS: { key: Cat | 'all'; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'work', label: 'Work' },
  { key: 'sites', label: 'Sites' },
  { key: 'apps', label: 'Apps' },
  { key: 'ai', label: 'AI' },
]

/** Example tool marks, from public/icons. Swap for what you build with. */
const GHL = '/icons/gohighlevel.png'
const CLAUDE_CODE = '/icons/claude-code-logo.png'
const CODEX = '/icons/ai/codex.svg'
const HERMES = '/icons/ai/hermes.svg'
const PLAY = '/icons/ai/googleplay.svg'
const CHROME = '/icons/ai/googlechrome.svg'
const EXPO = '/icons/ai/expo.svg'

const OLD = 'https://raw.githubusercontent.com/alyssaestrella0-create/Alyssa-Portfolio/main/images/'
const WF_SHOTS = [
  OLD + 'servicecore%20schedule.png',
  OLD + 'servicecore%20customers.png',
  OLD + 'resimplicrm.png',
  OLD + 'sop%20playbook.png',
]


const APP_SHOTS = [
  ...mobileApps.map((a) => a.imageSrc).filter((s): s is string => !!s),
  OLD + 'websitehomepage.png',
  OLD + 'leadlist.png',
]

const BUILD_DESC = 'Selected examples of the operational, customer, CRM, documentation, and digital work I support.'

/** The three featured builds: each its own card in the stack, each its own
 *  pop-up. */
const BUILDS: Project[] = [
  { id: 'ticketing', cat: 'work', index: '03', kicker: 'Field service', title: 'Service Operations & Dispatch', desc: 'Customer communication, scheduling, ServiceCore records, technician coordination, estimates, invoices, and follow-up.', Icon: () => <Ticket size={20} weight="duotone" />, logos: [GHL], eyebrow: 'Operations', Section: TicketingPanel, Preview: () => null },
  { id: 'framework', cat: 'work', index: '04', kicker: 'Real estate', title: 'CRM & Lead Management', desc: 'REsimpli pipeline upkeep, contact updates, drip campaigns, lead follow-up, contract information, and property listing support.', Icon: () => <Robot size={20} weight="duotone" />, logos: [CLAUDE_CODE], eyebrow: 'CRM support', Section: FrameworkPanel, Preview: () => null },
  { id: 'workflow', cat: 'work', index: '05', kicker: 'Documentation', title: 'SOPs, Trackers & Process Support', desc: 'SOPs, checklists, training guides, onboarding materials, daily reports, and process trackers built around real workflows.', Icon: () => <FlowArrow size={20} weight="duotone" />, logos: [CLAUDE_CODE, CODEX], eyebrow: 'Documentation', Section: WorkflowPanel, Preview: () => null },
]

const leaves = (n: StackNode): StackNode[] => (n.children?.length ? n.children.flatMap(leaves) : [n])
const AI_LEAVES = leaves(aiStack)

/* ---------- Previews ---------- */

function WorkflowsPreview() {
  return (
    <div className="bento__media bento__reel" aria-hidden="true">
      <div className="bento__reel-track">
        {[...WF_SHOTS, ...WF_SHOTS].map((src, i) => (
          <span key={i} className="bento__shot">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </span>
        ))}
      </div>
    </div>
  )
}

/** A paper mock of the plan document, the way SamplePlan previews it. */
function PlanPreview() {
  return (
    <div className="bento__media bento__doc" aria-hidden="true">
      <span className="bento__doc-eyebrow">Process documentation</span>
      <span className="bento__doc-title">SOPs, checklists & trackers</span>
      <span className="bento__doc-flow">
        <i>Capture</i>
        <i>Document</i>
        <i>Follow up</i>
        <i className="is-on">Complete</i>
      </span>
      <span className="bento__doc-line" />
      <span className="bento__doc-line bento__doc-line--short" />
    </div>
  )
}

/** The three builds as Open Builds rows: plate, eyebrow, title, arrow. */
function FunnelsPreview() {
  const shots = [OLD + 'websitehomepage.png', OLD + 'phoenixseopage.png', OLD + 'yelplisting.png']
  return (
    <div className="bento__media bento__fan" aria-hidden="true">
      {shots.map((src, i) => (
        <span key={src} className="bento__photo bento__photo--page" style={{ ['--i' as string]: i }}>
          <img src={src} alt="" loading="lazy" decoding="async" />
        </span>
      ))}
    </div>
  )
}

function AIPreview() {
  const half = Math.ceil(AI_LEAVES.length / 2)
  const rows = [AI_LEAVES.slice(0, half), AI_LEAVES.slice(half)]
  return (
    <div className="bento__media bento__chips" aria-hidden="true">
      {rows.map((row, r) => (
        <div key={r} className="bento__chip-row" data-dir={r ? 'right' : 'left'}>
          <div className="bento__chip-track">
            {[...row, ...row].map((n, i) => (
              <span key={`${n.id}-${i}`} className="bento__chip" data-status={n.status}>
                <n.Icon size={15} weight="duotone" />
                {n.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function AppsPreview() {
  return (
    <div className="bento__media bento__reel bento__reel--row" aria-hidden="true">
      <div className="bento__reel-track">
        {[...APP_SHOTS, ...APP_SHOTS].map((src, i) => (
          <span key={i} className="bento__shot bento__shot--app">
            <img src={src} alt="" loading="lazy" decoding="async" />
          </span>
        ))}
      </div>
    </div>
  )
}

const PROJECTS: Project[] = [
  { id: 'workflows', cat: 'work', index: '01', title: 'Operations in Practice', desc: 'Screens from field-service scheduling, customer records, real estate CRM, and process documentation.', Icon: FlowIcon, logos: [GHL], eyebrow: 'Selected work', Section: AutomationsPanel, span: 2, Preview: WorkflowsPreview },
  { id: 'plan', cat: 'work', index: '02', title: 'Process Documentation', desc: 'SOPs, checklists, training guides, trackers, and reporting that turn recurring work into repeatable processes.', Icon: PlanIcon, logos: [GHL], eyebrow: 'Documentation', Section: PlanPanel, Preview: PlanPreview },
  { id: 'funnels', cat: 'sites', index: '06', title: 'Website & Local SEO Support', desc: 'Wix updates, service-area pages, metadata, indexing, business listings, and local visibility support.', Icon: GlobeIcon, logos: [GHL], eyebrow: 'Digital support', Section: BarrelPanel, Preview: FunnelsPreview },
  { id: 'ai', cat: 'ai', index: '07', title: 'Research & AI-Assisted Workflows', desc: 'AI tools used to support research, drafting, organization, and faster day-to-day execution with human review.', Icon: SparkIcon, logos: [CLAUDE_CODE, CODEX, HERMES], eyebrow: 'Tools & workflow', Section: AIWindow, Preview: AIPreview },
  { id: 'apps', cat: 'apps', index: '08', title: 'CRM & Operations Tools', desc: 'Hands-on work across ServiceCore, REsimpli, Intercom, Google Workspace, Notion, Wix, Canva, Airbnb, Vrbo, and more.', Icon: DeviceIcon, logos: [PLAY, EXPO, CHROME], eyebrow: 'Platforms', Section: AppsWindow, span: 2, Preview: AppsPreview },
]

/** The icon tile, or the real marks stacked horizontally in its place. */
function Marks({ p, size = 22 }: { p: Project; size?: number }) {
  if (!p.logos?.length) {
    return (
      <span className="bento__icon">
        <p.Icon size={size} />
      </span>
    )
  }
  return (
    <span className="bento__logos" aria-hidden="true">
      {p.logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

/* ---------- Dialog ----------
   A backdrop, a close button in the corner, and the work. No panel, no
   header: each Section brings its own window (or, for the strip, none). */
function ProjectModal({ project, onClose, children }: { project: Project; onClose: () => void; children: ReactNode }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return createPortal(
    <div
      className="pmodal"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button ref={closeRef} type="button" className="pmodal__close" onClick={onClose} aria-label="Close">
        <X size={18} weight="bold" />
      </button>
      <div className="pmodal__stage">{children}</div>
    </div>,
    document.body,
  )
}

/* ---------- The page ---------- */

export default function ProjectsGrid() {
  const [open, setOpen] = useState<Project | null>(null)
  const phone = useIsPhone()
  const [cat, setCat] = useState<Cat | 'all'>('all')
  const keep = (p: Project) => !phone || cat === 'all' || p.cat === cat
  const projects = PROJECTS.filter(keep)
  const builds = BUILDS.filter(keep)
  const triggerRef = useRef<HTMLElement | null>(null)

  const show = useCallback((p: Project, el: HTMLElement) => {
    triggerRef.current = el
    setOpen(p)
  }, [])
  const close = useCallback(() => {
    setOpen(null)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  const stack = builds.length > 0 ? (
    <div className="bento__stack">

        {builds.map((b) => (

          <button

            key={b.id}

            type="button"

            className="bento__card bento__card--btn bento__card--build"

            onClick={(e) => show(b, e.currentTarget)}

            aria-haspopup="dialog"

          >

            <span className="bento__build-plate">

              {b.logos?.length ? <img src={b.logos[0]} alt="" width={22} height={22} /> : <b.Icon />}

            </span>

            <span className="bento__build-text">

              <span className="bento__kicker">{b.kicker}</span>

              <span className="bento__build-title">{b.title}</span>

              <span className="bento__build-desc">{b.desc}</span>

            </span>

            <span className="bento__build-arrow">

              <ArrowUpRight size={13} weight="bold" aria-hidden="true" />

            </span>

          </button>

        ))}

      </div>
  ) : null

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Work that shows how I support a business behind the scenes.
        </h1>
        <p className="pgrid__lede">Selected examples from customer support, operations, CRM, documentation, research, and digital support. Open a card to explore.</p>
      </header>

      {phone && (
        <div className="pfilter" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              className="pfilter__btn"
              aria-pressed={cat === f.key}
              onClick={() => setCat(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="home__glass pgrid__glass">
        {/* Hung on the sheet's top edge so it reads as a tag on the container,
            not a seventh card. aria-hidden: the lede already says it. */}
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          Click a card to open it
        </span>
        <div className="bento bento--projects">
          {projects.map((p) => (
            <Fragment key={p.id}>
            <button
              type="button"
              className={`bento__card bento__card--btn${p.span === 2 ? ' bento__card--wide' : ''}`}
              data-id={p.id}
              onClick={(e) => show(p, e.currentTarget)}
              aria-haspopup="dialog"
            >
              <span className="bento__head">
                <Marks p={p} />
                <span className="bento__title">{p.title}</span>
                <span className="bento__desc">{p.desc}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
              <p.Preview />
            </button>
            {p.id === 'plan' && stack}
            </Fragment>
          ))}
          {!projects.some((p) => p.id === 'plan') && stack}
        </div>
      </div>

      {open && (
        <ProjectModal project={open} onClose={close}>
          <open.Section />
        </ProjectModal>
      )}
    </section>
  )
}
