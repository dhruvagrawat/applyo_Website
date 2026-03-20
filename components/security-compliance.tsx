"use client"

import { Pill } from "./pill"
import { ShieldCheck, Lock, Eye, Globe, Database, Trash2, UserCheck, FileKey } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const protectionItems = [
  { icon: UserCheck, text: "Google OAuth with Clerk/Supabase Auth" },
  { icon: Lock, text: "Data encryption at rest and in transit" },
  { icon: Eye, text: "Clear logs for every auto-apply action" },
  { icon: Globe, text: "Respectful of site terms — no scraping tricks" },
]

const controlItems = [
  { icon: Database, text: "Store up to 3 resumes (free) or unlimited (pro)" },
  { icon: FileKey, text: "Save cover letters, tones, Q&A templates" },
  { icon: ShieldCheck, text: "Data used only for your personalization" },
  { icon: Trash2, text: "Delete your data anytime — no questions asked" },
]

export function SecurityCompliance() {
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
      id="security-compliance"
      ref={sectionRef}
      className="py-24 md:py-36 container relative z-10 border-t border-white/[0.04]"
    >
      <div className="text-center mb-16 md:mb-20">
        <Pill className="mb-6 justify-center">SECURITY</Pill>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-5">
          Privacy-first <span className="text-gradient">by design</span>
        </h2>
        <p className="text-foreground/50 max-w-lg mx-auto font-mono text-sm leading-relaxed">
          Your data stays yours. Always.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
        <div
          className={`glass rounded-xl p-7 md:p-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0ms", animationFillMode: "both" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium text-foreground">How We Protect You</h3>
          </div>
          <ul className="space-y-4">
            {protectionItems.map((item, i) => {
              const Icon = item.icon
              return (
                <li key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                  <span className="text-foreground/60 text-sm leading-relaxed">{item.text}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div
          className={`glass rounded-xl p-7 md:p-8 ${visible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "120ms", animationFillMode: "both" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium text-foreground">Your Data, Your Control</h3>
          </div>
          <ul className="space-y-4">
            {controlItems.map((item, i) => {
              const Icon = item.icon
              return (
                <li key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                  <span className="text-foreground/60 text-sm leading-relaxed">{item.text}</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
