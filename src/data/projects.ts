export type AppStat = { value: string; label: string }
export type AppProject = {
  name: string; tagline: string; description: string; imageSrc?: string; imagePosition?: string;
  accentColor: string; stats: AppStat[]; badge: string
}
export type MobileApp = AppProject

const OLD = 'https://raw.githubusercontent.com/alyssaestrella0-create/Alyssa-Portfolio/main/images/'
const STATS: AppStat[] = [
  { value: 'Hands-on', label: 'Experience' },
  { value: 'Remote', label: 'Workflow' },
  { value: 'Daily', label: 'Use' },
]

export const mobileApps: MobileApp[] = [
  {
    name: 'ServiceCore',
    tagline: 'Field-service operations and customer records.',
    description: 'Used for jobs, scheduling, estimates, invoices, payments, rentals, service records, customer information, and technician coordination.',
    imageSrc: OLD + 'servicecore%20schedule.png',
    accentColor: '#2563EB', stats: STATS, badge: 'Operations',
  },
  {
    name: 'REsimpli',
    tagline: 'Real estate CRM and lead pipeline support.',
    description: 'Used to organize leads, update contacts and stages, maintain contract information, and support drip campaigns and follow-up.',
    imageSrc: OLD + 'resimplicrm.png',
    accentColor: '#7C3AED', stats: STATS, badge: 'CRM',
  },
  {
    name: 'Process Documentation',
    tagline: 'SOPs, checklists, guides, and trackers.',
    description: 'Documentation built around recurring work so tasks are easier to follow, train, hand off, and review.',
    imageSrc: OLD + 'sop%20playbook.png',
    accentColor: '#16A34A', stats: STATS, badge: 'Systems',
  },
]

export const webApps: AppProject[] = [
  {
    name: 'Wix & Local SEO', tagline: 'Website and local search support.',
    description: 'Service-area pages, website updates, metadata, indexing, business listings, and local visibility work.',
    imageSrc: OLD + 'websitehomepage.png', accentColor: '#0EA5E9', stats: STATS, badge: 'Digital',
  },
  {
    name: 'Lead Research', tagline: 'Organized prospect and opportunity research.',
    description: 'Lead lists, vendor research, outreach preparation, public procurement research, and opportunity tracking.',
    imageSrc: OLD + 'leadlist.png', accentColor: '#EF4444', stats: STATS, badge: 'Research',
  },
  {
    name: 'SEO Progress Tracking', tagline: 'Turning search activity into next actions.',
    description: 'Tracking search visibility, website work, submissions, indexing, and weekly priorities without inventing performance claims.',
    imageSrc: OLD + 'seoprogresstracker.png', accentColor: '#0891B2', stats: STATS, badge: 'SEO',
  },
]
