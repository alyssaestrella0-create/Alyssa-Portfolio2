import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = { label: string; href: string; iconPath: string }
export type Stat = { value: string; label: string; Icon: Icon }
export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: { body: string; portraitSrc: string; portraitAlt: string }
  socials: SocialLink[]
}

const PHOTO = 'https://raw.githubusercontent.com/alyssaestrella0-create/Alyssa-Portfolio/main/images/ProfessionalPhoto.png'

export const profile: Profile = {
  name: 'Alyssa Mae Estrella',
  firstName: 'Alyssa',
  handle: '@alyssaestrella',
  role: 'Virtual Assistant · Operations · Customer Support · Admin',
  avatarSrc: PHOTO,
  verifiedLabel: 'Remote support professional',
  email: 'alyssaestrella0@gmail.com',
  location: 'Metro Manila, Philippines',
  stats: [
    { value: '4+ yrs', label: 'Remote support experience', Icon: Briefcase },
    { value: '5 areas', label: 'Support · Ops · CRM · Admin · Digital', Icon: SealCheck },
    { value: 'GMT+8', label: 'Remote · PH based', Icon: Clock },
  ],
  displayName: { line1: 'Reliable support for busy teams', line2: 'and growing businesses.' },
  hero: {
    body: 'Flexible remote support across business operations, customer communication, CRM management, administration, research, documentation, and digital tasks.',
    portraitSrc: PHOTO,
    portraitAlt: 'Alyssa Mae Estrella',
  },
  socials: [],
}
