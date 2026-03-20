"use client"

import { FileText, Target, Zap, Shield } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const props = [
  {
    icon: FileText,
    title: "Personalized, not generic",
    description:
      "AI uses your saved profiles and preferences to tailor resumes, cover letters, and form answers — uniquely yours every time.",
  },
  {
    icon: Target,
    title: "ATS-ready in one pass",
    description:
      "See your score, fix keywords, and auto-rewrite bullet points for top matches. No guesswork, just results.",
  },
  {
    icon: Zap,
    title: "One-click fill & apply",
    description:
      "Use one-click autofill for fast, accurate form filling — or enable Auto-Applier to submit with your review rules.",
  },
  {
    icon: Shield,
    title: "Human in the loop",
    description:
      "You approve styles, answers, and submissions. No black boxes, no surprise applications. Full transparency.",
  },
]

export function ValueProps() {
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
    <section id="value-props" ref={sectionRef} className="py-24 md:py-36 container relative z-10">
      <div className="text-center mb-16 md:mb-20">
        <p className="font-mono text-xs tracking-widest uppercase text-primary/80 mb-4">
          Why Applyo
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-5">
          Everything you need to <br className="hidden sm:block" />
          <span className="text-gradient">land the role</span>
        </h2>
        <p className="text-foreground/50 max-w-xl mx-auto font-mono text-sm leading-relaxed">
          Designed for students and fresh grads who want quality, speed, and control
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
        {props.map((prop, i) => {
          const Icon = prop.icon
          return (
            <div
              key={i}
              className={`group relative glass rounded-xl p-7 md:p-8 transition-all duration-500 hover:border-primary/20 hover:bg-white/[0.03] ${
                visible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 group-hover:border-primary/30 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-sentient text-foreground">{prop.title}</h3>
              </div>
              <p className="text-foreground/50 text-sm leading-relaxed ml-14">
                {prop.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
