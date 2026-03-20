"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 container relative z-10"
    >
      <div
        className={`relative max-w-4xl mx-auto text-center glass rounded-2xl p-10 md:p-16 overflow-hidden ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
        style={{ animationFillMode: "both" }}
      >
        {/* Subtle glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-sentient mb-5">
            Ready to apply <span className="text-gradient">smarter</span>?
          </h2>
          <p className="text-foreground/50 max-w-lg mx-auto font-mono text-sm leading-relaxed mb-10">
            Join thousands of students who are landing interviews faster with AI-powered applications. Free to start, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link className="contents" href="https://app.applyo.app/">
              <Button>
                [Get Started Free →]
              </Button>
            </Link>
            <Link
              href="#how-it-works"
              className="font-mono text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-200 flex items-center gap-2 px-4 py-3"
            >
              Learn more
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <p className="font-mono text-xs text-foreground/30 mt-8">
            No credit card required &middot; Free plan available &middot; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  )
}
