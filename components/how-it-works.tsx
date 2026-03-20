"use client"

import { Pill } from "./pill"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion"
import { Upload, Search, Rocket } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const steps = [
  {
    icon: Upload,
    title: "Import & set up",
    subtitle: "Get started in under 2 minutes",
    details: [
      "Upload or paste your existing resume",
      "Pick roles and industries you're targeting",
      "Set your tone and style preferences",
    ],
  },
  {
    icon: Search,
    title: "Match & optimize",
    subtitle: "AI-powered precision tailoring",
    details: [
      "Paste a job description or link",
      "Get your ATS score with gap highlights",
      "Receive tailored cover letters instantly",
    ],
  },
  {
    icon: Rocket,
    title: "Apply your way",
    subtitle: "Stay in full control",
    details: [
      "Autofill application fields anywhere",
      "Auto-Applier submits per your rules",
      "Track every application in one place",
    ],
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-24 md:py-36 container relative z-10 border-t border-white/[0.04]"
    >
      <div className="text-center mb-16 md:mb-20">
        <Pill className="mb-6 justify-center">HOW IT WORKS</Pill>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-5">
          Your application in <span className="text-gradient">3 simple steps</span>
        </h2>
      </div>

      {/* Demo video accordion */}
      <div className="text-center mb-14">
        <Accordion type="single" collapsible defaultValue="">
          <AccordionItem value="video" className="inline-block border-none">
            <AccordionTrigger className="hover:no-underline">
              <Pill className="px-5 h-10 text-sm cursor-pointer hover:border-primary/30 transition-colors">
                WATCH A SHORT DEMO
              </Pill>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mx-auto w-full px-4 sm:px-0 mt-4">
                <div className="mx-auto w-full md:w-[50vw] md:max-w-3xl relative pt-[62%] md:pt-[56.25%]">
                  <video
                    controls
                    className="absolute inset-0 w-full h-full rounded-xl shadow-2xl border border-white/[0.06] object-cover"
                    src="/how-it-works.mp4"
                    playsInline
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div
              key={i}
              className={`relative group ${visible ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
            >
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 w-8 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              )}

              <div className="glass rounded-xl p-7 md:p-8 h-full transition-all duration-300 hover:border-primary/15">
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] font-mono font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-sentient">{step.title}</h3>
                    <p className="text-foreground/40 text-xs font-mono mt-0.5">{step.subtitle}</p>
                  </div>
                </div>

                {/* Details */}
                <ul className="space-y-3 ml-1">
                  {step.details.map((detail, j) => (
                    <li key={j} className="text-foreground/50 font-mono text-sm flex items-start gap-3">
                      <span className="text-primary/60 mt-0.5 text-xs">&#9656;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
