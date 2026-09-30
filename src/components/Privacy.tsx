import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy - PLACEHOLDER. Legal text has to describe YOUR site and what
 * it collects, so none is supplied. Write it (or have a lawyer or a policy
 * generator write it) and paste it into the sections below.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: October 1, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This portfolio is operated by Alyssa Mae Estrella and this notice applies to information submitted through this website.</p>

          <h2>What is collected</h2>
          <p>If you contact me through this site, the form asks for your name, email address, and message. The site may also use basic technical information needed to operate and secure the website.</p>

          <h2>How it is used</h2>
          <p>Information you provide is used to respond to your inquiry and communicate about potential work. I do not sell personal information. Information may be processed by the services used to host or operate this website.</p>

          <h2>How long it is kept</h2>
          <p>Inquiry information may be kept for as long as reasonably needed to respond, maintain business records, or meet legal obligations. You may email me to request deletion of information you submitted, subject to any records I am required to retain.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
