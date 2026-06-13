'use client'

import Navigation from '@/components/Navigation'
import ShowcaseHero from '@/components/ShowcaseHero'
import ProjectsGrid from '@/components/ProjectsGrid'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import NetworksSection from '@/components/NetworksSection'
import SkillsSection from '@/components/SkillsSection'
import PartnersSection from '@/components/PartnersSection'
import CTASection from '@/components/CTASection'
import EnterpriseFooter from '@/components/EnterpriseFooter'

export default function Home() {
  return (
    <main>
      <Navigation />
      <ShowcaseHero />
      <ProjectsGrid />
      <FeaturesShowcase />
      <NetworksSection />
      <SkillsSection />
      <PartnersSection />
      <CTASection />
      <EnterpriseFooter />
    </main>
  )
}
