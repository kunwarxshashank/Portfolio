"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#languages" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1))
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1))
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-mono text-xl font-bold text-primary neon-text">&lt;HIGHRISK/&gt;</div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.href)}
                className={`font-mono transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? "text-primary bg-primary/10 glow-pulse"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="sm" className="md:hidden text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}
