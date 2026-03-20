"use client"

import { Hero } from "@/components/hero"
import { ValueProps } from "@/components/value-props"
import { HowItWorks } from "@/components/how-it-works"
import { PlatformFeatures } from "@/components/platform-features"
import { Testimonials } from "@/components/testimonials"
import { SecurityCompliance } from "@/components/security-compliance"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative z-10 bg-black">
        <ValueProps />
        <HowItWorks />
        <PlatformFeatures />
        <Testimonials />
        <SecurityCompliance />
        <FAQSection />
        <CTASection />
        <Footer />
      </div>
      <Leva hidden />
    </>
  )
}
