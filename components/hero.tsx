"use client"

import Link from "next/link"
import { GL } from "./gl"
import { Pill } from "./pill"
import { Button } from "./ui/button"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const [hovering, setHovering] = useState(false)
  return (
    <div className="flex flex-col min-h-svh justify-between relative">
      <GL hovering={hovering} />

      {/* Spacer for fixed header */}
      <div className="h-24 md:h-32" />

      <div className="pb-12 sm:pb-16 mt-auto text-center relative z-10 px-4">
        <div className="animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
          <Pill className="mb-8">LIVE</Pill>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sentient text-balance leading-[1.1] animate-fade-in-up"
          style={{ animationDelay: "350ms", animationFillMode: "both" }}
        >
          Apply smarter. <br />
          <i className="font-light text-gradient">Faster.</i> With you <br />
          in control.
        </h1>

        <p
          className="font-mono text-sm sm:text-base text-foreground/50 text-balance mt-6 sm:mt-8 max-w-[560px] mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "500ms", animationFillMode: "both" }}
        >
          Your career-shaping wingman — build better resumes, write smarter
          applications, and apply to jobs faster with full control.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14 animate-fade-in-up"
          style={{ animationDelay: "650ms", animationFillMode: "both" }}
        >
          <Link className="contents" href="https://app.applyo.app/">
            <Button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
              [Start Free →]
            </Button>
          </Link>
          <Link
            href="#how-it-works"
            className="font-mono text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-200 px-6 py-3"
          >
            See how it works
          </Link>
        </div>

        <div
          className="flex items-center justify-center gap-6 mt-10 sm:mt-12 animate-fade-in-up"
          style={{ animationDelay: "800ms", animationFillMode: "both" }}
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-background bg-gradient-to-br from-primary/40 to-primary/10"
                />
              ))}
            </div>
            <span className="font-mono text-xs text-foreground/40 ml-1">
              Trusted by students from IIT, DU, SRM & more
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-scroll-hint">
        <ChevronDown className="w-5 h-5 text-foreground/20" />
      </div>
    </div>
  )
}
