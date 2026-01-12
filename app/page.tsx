"use client"
import { HeroSection } from "@/components/hero-section"
import { ApartmentsSection } from "@/components/apartments-section"
import { FeaturesSection } from "@/components/features-section"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ApartmentsSection />
      <FeaturesSection />
      <LocationSection />
      <ContactSection />
    </main>
  )
}
