'use client'

import Navigation from '@/components/Navigation'
import ShowcaseHero from '@/components/ShowcaseHero'
import ProjectsGrid from '@/components/ProjectsGrid'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import NetworksSection from '@/components/NetworksSection'
import PartnersSection from '@/components/PartnersSection'
import CTASection from '@/components/CTASection'
import EnterpriseFooter from '@/components/EnterpriseFooter'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-black">
        <Navigation />
        <ShowcaseHero />
        <ProjectsGrid />
        <FeaturesShowcase />
        <NetworksSection />
        <PartnersSection />
        <CTASection />
        <EnterpriseFooter />
      </main>
    </>
  )
}
