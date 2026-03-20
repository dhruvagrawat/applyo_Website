"use client"

import { Pill } from "./pill"
import { Star } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const testimonials = [
  {
    quote: "Went from 3 apps/week to 20 — with better matches. The Auto-Applier rules keep me confident nothing goes out without my approval.",
    author: "Ananya S.",
    role: "CS Undergrad, IIT Delhi",
    rating: 5,
  },
  {
    quote: "My ATS score jumped from 48 to 88. The JD alignment feature is unreal — it shows exactly what to fix.",
    author: "Rohit K.",
    role: "Mechanical Fresher, SRM",
    rating: 5,
  },
  {
    quote: "I used to spend hours on each application. Now I can apply to 10 quality roles in the same time. Game changer for placement season.",
    author: "Priya M.",
    role: "MBA Student, DU",
    rating: 5,
  },
  {
    quote: "The cover letter generator actually sounds like me. I've gotten more interview callbacks in 2 weeks than the entire last month.",
    author: "Arjun T.",
    role: "IT Graduate, MIT WPU",
    rating: 4,
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < count ? "text-primary fill-primary" : "text-foreground/15"}`}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
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
    <section ref={sectionRef} className="py-24 md:py-36 container relative z-10 border-t border-white/[0.04]">
      <div className="text-center mb-16 md:mb-20">
        <Pill className="mb-6 justify-center">TESTIMONIALS</Pill>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-5">
          Loved by <span className="text-gradient">students</span>
        </h2>
        <p className="text-foreground/50 max-w-lg mx-auto font-mono text-sm leading-relaxed">
          Real results from real students using Applyo
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`glass rounded-xl p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-primary/15 ${
              visible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: `${i * 120}ms`, animationFillMode: "both" }}
          >
            <div>
              <Stars count={t.rating} />
              <p className="text-foreground/70 mt-4 mb-6 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.04]">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/5 flex items-center justify-center shrink-0">
                <span className="text-primary text-xs font-mono font-bold">
                  {t.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground/80">{t.author}</p>
                <p className="text-xs text-foreground/40 font-mono">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
