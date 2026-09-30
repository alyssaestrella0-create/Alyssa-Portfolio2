import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Terms of Service - PLACEHOLDER. Legal text has to fit YOUR business, so
 * none is supplied. Paste your own terms into the sections below.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: October 1, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This website is a professional portfolio provided for informational purposes. You may browse it and contact me about potential work. Please do not misuse the site, attempt to disrupt it, or copy portfolio materials in a misleading way.</p>

          <h2>Work and payment</h2>
          <p>Viewing this portfolio or sending an inquiry does not create a client relationship. Any freelance or employment arrangement, scope, schedule, rate, payment terms, confidentiality requirements, and deliverables must be agreed separately in writing.</p>

          <h2>Ownership</h2>
          <p>Unless otherwise stated, the portfolio copy and presentation are provided as examples of my professional experience. Third-party names, trademarks, platforms, and interface screenshots remain the property of their respective owners. Work samples are shown only to demonstrate relevant experience and may be redacted or limited to protect confidential information.</p>

          <h2>Liability</h2>
          <p>This portfolio is provided as-is and may be updated over time. I make reasonable efforts to keep the information accurate, but I do not guarantee that every page will always be complete, current, or error-free.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
