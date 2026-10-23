import { createFileRoute } from '@tanstack/react-router'
import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import { Pricing } from '@/components/Pricing'
import { WhoItsFor } from '@/components/WhoItsFor'
import { Sustainability } from '@/components/Sustainability'
import { ServiceArea } from '@/components/ServiceArea'
import { BookingSection } from '@/components/BookingSection'
import { ContactSection } from '@/components/ContactSection'
import { ClosingCta } from '@/components/ClosingCta'
import { SiteFooter } from '@/components/SiteFooter'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <Hero />
      <HowItWorks />
      <Pricing />
      <WhoItsFor />
      <Sustainability />
      <ServiceArea />
      <BookingSection />
      <ContactSection />
      <ClosingCta />
      <SiteFooter />
    </div>
  )
}
