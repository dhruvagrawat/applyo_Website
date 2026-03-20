"use client"

import { cn } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const menuItems = [
  { name: "Why Applyo", href: "#value-props" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Features", href: "#platform-features" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
]

export const MobileMenu = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => setIsOpen(false)

  return (
    <Dialog.Root modal open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button
          className={cn(
            "lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-white/[0.04]",
            className
          )}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md data-[state=open]:animate-fade-in" />

        <Dialog.Content className="fixed inset-0 z-50 flex flex-col data-[state=open]:animate-fade-in">
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

          {/* Close button at top right */}
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-2 -mt-16">
            {menuItems.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleLinkClick}
                className="text-3xl font-sentient text-foreground/70 hover:text-primary transition-all duration-300 py-3 px-8 rounded-xl hover:bg-white/[0.03] animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms`, animationFillMode: "both" }}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-col items-center gap-3 mt-10 animate-fade-in-up" style={{ animationDelay: "400ms", animationFillMode: "both" }}>
              <Link
                href="https://app.applyo.app/auth/login"
                onClick={handleLinkClick}
                className="uppercase text-sm tracking-wider font-mono px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-200"
              >
                Sign In
              </Link>
              <Link
                href="https://app.applyo.app/"
                onClick={handleLinkClick}
                className="uppercase text-sm tracking-wider font-mono px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 font-medium"
              >
                Get Started Free
              </Link>
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
