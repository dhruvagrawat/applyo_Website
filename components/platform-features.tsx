"use client"

import { Pill } from "./pill"
import {
  FileText, PenTool, BarChart3, TrendingUp, GitCompare,
  Brain, MessageSquare, Search, ClipboardList, ShieldCheck,
  Zap, Layout
} from "lucide-react"
import { useRef, useEffect, useState } from "react"

const categories = [
  {
    label: "Resume & Writing",
    features: [
      { icon: FileText, title: "AI Resume Improver", desc: "Section-wise rewrites with quantified bullet suggestions" },
      { icon: PenTool, title: "Cover Letter Maker", desc: "Personalized drafts from your resume + JD with tone presets" },
      { icon: BarChart3, title: "ATS Score Checker", desc: "Missing keywords, formatting issues, readability with one-click fixes" },
      { icon: TrendingUp, title: "ATS Score Improver", desc: "Automated suggestions to raise your ATS score instantly" },
      { icon: GitCompare, title: "Job-to-Resume Match", desc: "Line-by-line alignment and targeted edits for each role" },
      { icon: Brain, title: "Skill Gap Finder", desc: "Identify missing skills and get recommendations for your target roles" },
      { icon: MessageSquare, title: "Interview Q&A Generator", desc: "AI-generated interview questions and model answers" },
    ],
  },
  {
    label: "Job Management",
    features: [
      { icon: Search, title: "Job Finder", desc: "Aggregates early-career roles — filter by skills, level, interest" },
      { icon: ClipboardList, title: "Job Tracker", desc: "Keep every application, status, and notes in one dashboard" },
      { icon: ShieldCheck, title: "Listing Validity Check", desc: "Flags stale or scam posts using signals + community feedback" },
    ],
  },
  {
    label: "Automation",
    features: [
      { icon: Zap, title: "Start Auto-Apply", desc: "Enable Auto-Applier with review rules and safeguards you control" },
      { icon: Layout, title: "Simple Interface", desc: "All the tools you need in one clean, intuitive workspace" },
    ],
  },
]

export function PlatformFeatures() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.08 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  let featureIndex = 0

  return (
    <section
      id="platform-features"
      ref={sectionRef}
      className="py-24 md:py-36 container relative z-10 border-t border-white/[0.04]"
    >
      <div className="text-center mb-16 md:mb-20">
        <Pill className="mb-6 justify-center">THE PLATFORM</Pill>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-5">
          Your complete <span className="text-gradient">application suite</span>
        </h2>
        <p className="text-foreground/50 max-w-xl mx-auto font-mono text-sm leading-relaxed">
          All the tools you need to stand out and apply with confidence
        </p>
      </div>

      <div className="space-y-12 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="font-mono text-xs tracking-widest uppercase text-primary/70 mb-5 pl-1">
              {cat.label}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.features.map((feature) => {
                const Icon = feature.icon
                const idx = featureIndex++
                return (
                  <div
                    key={feature.title}
                    className={`group glass rounded-xl p-6 transition-all duration-300 hover:border-primary/20 hover:bg-white/[0.02] ${
                      visible ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${idx * 60}ms`, animationFillMode: "both" }}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/12 group-hover:border-primary/25 transition-colors duration-300">
                        <Icon className="w-4 h-4 text-primary/80" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-foreground mb-1.5">{feature.title}</h4>
                        <p className="text-foreground/40 text-xs leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
