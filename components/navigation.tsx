"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Menu, X } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const whatsappNumber = "+995555123456"
  const whatsappMessage = "გამარჯობა! მაინტერესებს Vake Heights-ის ფასების ჩამონათვალი."

  const navLinks = [
    { href: "#apartments", label: "ბინები" },
    { href: "#features", label: "მახასიათებლები" },
    { href: "#location", label: "ლოკაცია" },
    { href: "#contact", label: "კონტაქტი" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/98 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-primary hover:opacity-80 transition-opacity cursor-pointer">
            VAKE HEIGHTS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12 font-mono text-sm tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button
              onClick={() => {
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
              }}
              className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide h-12 px-6 transition-all duration-300 hover:shadow-lg"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {"ფასების ჩამონათვალი"}
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-md border-t border-border transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-6 font-mono">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => {
              window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
              setMobileMenuOpen(false)
            }}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono h-12"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            {"ფასების ჩამონათვალი"}
          </Button>
        </div>
      </div>
    </nav>
  )
}
