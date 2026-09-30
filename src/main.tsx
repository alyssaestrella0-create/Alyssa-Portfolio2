import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Home from '@/components/Home'
import ProjectsView from '@/views/ProjectsView'
import ServicesView from '@/views/ServicesView'
import ShowcaseView from '@/views/ShowcaseView'
import TestimonialsGrid from '@/components/TestimonialsGrid'
import AboutGrid from '@/components/AboutGrid'
import ContactGrid from '@/components/ContactGrid'
import NotFound from '@/components/NotFound'
import './styles/tokens.css'
import './styles/global.css'
import './styles/theme-glyph.css'
import './styles/sections.css'
import './styles/extensions.css'
import './styles/ai-stack.css'
import './styles/shell.css'
import './styles/rail.css'
import './styles/home.css'
import './styles/bento.css'
import './styles/projects-grid.css'
import './styles/services-grid.css'
import './styles/showcase.css'
import './styles/testimonials-grid.css'
import './styles/about-grid.css'
import './styles/contact-grid.css'
import './styles/boot.css'
import './styles/credentials.css'
import './styles/testimonials.css'
import './styles/mobile-app.css'
import './styles/a11y.css'
import './styles/apple.css'
import './styles/mobile-pass.css'
import './styles/perf.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/services" element={<ServicesView />} />
          <Route path="/showcase" element={<ShowcaseView />} />
          <Route path="/testimonials" element={<TestimonialsGrid />} />
          <Route path="/about" element={<AboutGrid />} />
          <Route path="/contact" element={<ContactGrid />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)
