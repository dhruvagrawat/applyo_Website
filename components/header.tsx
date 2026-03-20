"use client"

import Link from "next/link"
import { MobileMenu } from "./mobile-menu"
import { useEffect, useState } from "react"

const navItems = [
  { name: "Why Applyo", href: "#value-props" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#platform-features" },
  { name: "FAQs", href: "#faq" },
]

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "py-3 md:py-4 glass border-b border-white/[0.04]"
            : "py-6 md:py-8 bg-transparent"
        }`}
      >
        <header className="flex items-center justify-between container">
          <Link href="/" className="group flex items-center gap-2">
            <div className="font-sentient text-2xl md:text-3xl text-primary transition-all duration-300 group-hover:tracking-wider">
              Applyo
            </div>
          </Link>

          <nav className="flex max-lg:hidden absolute left-1/2 -translate-x-1/2 items-center justify-center gap-x-1">
            {navItems.map((item) => (
              <Link
                className="relative uppercase inline-block font-mono text-xs tracking-wider px-4 py-2 text-foreground/60 hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/[0.04]"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              className="max-lg:hidden uppercase text-xs tracking-wider font-mono px-5 py-2.5 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all duration-200"
              href="https://app.applyo.app/auth/login"
            >
              Sign In
            </Link>
            <Link
              className="max-lg:hidden uppercase text-xs tracking-wider font-mono px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-medium"
              href="https://app.applyo.app/"
            >
              Get Started
            </Link>
            <MobileMenu />
          </div>
        </header>
      </div>
    </div>
  )
}
