import { Sparkle, Robot, Article, UsersThree, Database, MagnifyingGlass, ChatCircleDots, FlowArrow, Browser } from '@/components/slab'
import type { Icon } from '@/components/slab'
import { profile } from '@/data/profile'

export type StackStatus = 'Live' | 'Internal' | 'Beta'
export type StackLogo = { src: string; name: string }
export type StackNode = { id: string; name: string; what: string; stack?: string; status?: StackStatus; Icon: Icon; logos?: StackLogo[]; children?: StackNode[] }

const OPENAI: StackLogo = { src: '/icons/openai.svg', name: 'OpenAI' }
const SLACK: StackLogo = { src: '/icons/slack.svg', name: 'Slack' }

export const aiStack: StackNode = {
  id: 'root', Icon: Sparkle, name: profile.name,
  what: 'The tools and systems I use to support customers, operations, CRM, research, documentation, and digital work.',
  stack: 'Customer Support & Business Operations',
  children: [
    {
      id: 'operations', Icon: Database, name: 'Operations & CRM',
      what: 'Systems used to keep service work, customer records, leads, and follow-ups organized.',
      children: [
        { id: 'servicecore', Icon: FlowArrow, name: 'ServiceCore', what: 'Jobs, schedules, customers, estimates, invoices, payments, rentals, and service coordination.', stack: 'Field service operations', status: 'Live' },
        { id: 'resimpli', Icon: UsersThree, name: 'REsimpli', what: 'Lead pipeline, contacts, stages, drip campaigns, contract information, and follow-up.', stack: 'Real estate CRM', status: 'Live' },
        { id: 'intercom', Icon: ChatCircleDots, name: 'Intercom', what: 'High-volume customer chats and tickets, account questions, documentation, and escalation.', stack: 'Customer support', status: 'Live' },
      ],
    },
    {
      id: 'documentation', Icon: Article, name: 'Documentation & Admin',
      what: 'Tools and workflows for repeatable processes, clear records, and organized remote work.',
      children: [
        { id: 'workspace', Icon: Article, name: 'Google Workspace', what: 'Documents, spreadsheets, email, files, reports, and day-to-day administrative work.', stack: 'Docs · Sheets · Gmail · Drive', status: 'Live' },
        { id: 'notion', Icon: Robot, name: 'Notion', what: 'Organized notes, documentation, process references, and team information.', stack: 'Documentation', status: 'Internal' },
        { id: 'slack', Icon: ChatCircleDots, logos: [SLACK], name: 'Slack', what: 'Remote team communication and coordination.', stack: 'Team communication', status: 'Live' },
      ],
    },
    {
      id: 'digital', Icon: Browser, name: 'Digital & Research',
      what: 'Website, local search, content, research, and AI-assisted support work.',
      children: [
        { id: 'wix', Icon: Browser, name: 'Wix', what: 'Website updates, service-area pages, metadata, and content maintenance.', stack: 'Website support', status: 'Live' },
        { id: 'research', Icon: MagnifyingGlass, name: 'Research & Outreach', what: 'Lead lists, vendor research, backlink opportunities, procurement research, and outreach preparation.', stack: 'Research workflow', status: 'Live' },
        { id: 'ai-tools', Icon: Sparkle, logos: [OPENAI], name: 'AI Tools', what: 'ChatGPT, Claude, Gemini, Grok, ElevenLabs, and DeepSeek used to support drafting, research, and organization with human review.', stack: 'AI-assisted workflow', status: 'Internal' },
      ],
    },
  ],
}
