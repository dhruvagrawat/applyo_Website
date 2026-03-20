"use client"

import { Pill } from "./pill"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"
import { useRef, useEffect, useState } from "react"

const faqs = [
  {
    q: "Is Auto-Applier required?",
    a: "No. You can use Applyo purely as a writing and autofill assistant, giving you full control over your application pace. Auto-Applier is entirely optional.",
  },
  {
    q: "Will it apply to jobs I don't want?",
    a: "Only if your rules allow it — and you can require your approval every single time. You set the match threshold, daily limits, and which sites to target. You're always in control.",
  },
  {
    q: "Does it work on all job sites?",
    a: "We support LinkedIn, Indeed, Naukri, and company career portals. We're expanding support constantly, and you can enable or disable per site anytime.",
  },
  {
    q: "Can I store multiple resumes?",
    a: "Yes — 3 on the Free plan, unlimited on Pro. Switch between them instantly for different roles and industries.",
  },
  {
    q: "Does Applyo bypass CAPTCHAs or Terms of Service?",
    a: "No. We keep it ethical, visible, and within platform rules. Applyo is an assistive tool that respects every site's policies.",
  },
  {
    q: "What about my privacy?",
    a: "Your data is yours. We use it only to assist your applications — nothing else. You control what's stored and can delete everything anytime, no questions asked.",
  },
]

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 md:py-36 container relative z-10 border-t border-white/[0.04]"
    >
      <div className="text-center mb-16 md:mb-20">
        <Pill className="mb-6 justify-center">FAQ</Pill>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-5">
          Frequently asked <span className="text-gradient">questions</span>
        </h2>
        <p className="text-foreground/50 max-w-lg mx-auto font-mono text-sm leading-relaxed">
          Everything you need to know before getting started
        </p>
      </div>

      <div
        className={`max-w-2xl mx-auto ${visible ? "animate-fade-in-up" : "opacity-0"}`}
        style={{ animationFillMode: "both" }}
      >
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-white/[0.04] py-1"
            >
              <AccordionTrigger className="hover:no-underline hover:text-primary transition-colors py-5 gap-4">
                <span className="text-left font-sentient text-base text-foreground/90">
                  {faq.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-foreground/50 text-sm leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
