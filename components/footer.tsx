import Link from "next/link"

const productLinks = [
  { name: "Resume Improver", href: "https://app.applyo.app/" },
  { name: "ATS Checker", href: "https://app.applyo.app/" },
  { name: "Cover Letters", href: "https://app.applyo.app/" },
  { name: "Auto-Applier", href: "https://app.applyo.app/" },
]

const companyLinks = [
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Contact", href: "mailto:quadcydle@gmail.com" },
  { name: "Source", href: "https://github.com/quadcydle-main/app-applyo.git" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
]

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-white/[0.04]">
      <div className="container py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <h3 className="font-sentient text-xl text-primary mb-3">Applyo</h3>
            </Link>
            <p className="text-foreground/40 text-sm leading-relaxed max-w-xs">
              AI-powered applications for students and fresh grads who apply with confidence.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-foreground/60 mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/40 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-foreground/60 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-foreground/40 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-foreground/60 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-foreground/40 text-sm hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/30 text-xs font-mono">
            &copy; {new Date().getFullYear()} Applyo. All rights reserved.
          </p>
          <p className="text-foreground/20 text-xs font-mono">
            Built for students who apply with confidence.
          </p>
        </div>
      </div>
    </footer>
  )
}
