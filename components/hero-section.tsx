"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video with overlay */}
      <div className="absolute inset-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105 animate-fade-in">
          <source src="/luxury-modern-building-exterior-with-mountain-view.jpg" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-sm md:text-base text-white/70 font-mono tracking-[0.3em] mb-4 uppercase">
              {"პრესტიჟული საცხოვრებელი"}
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white tracking-tight leading-none">
              {"VAKE"}
              <br />
              {"HEIGHTS"}
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-3xl mb-4 text-white/95 font-light tracking-wide max-w-3xl mx-auto leading-relaxed">
              {"ექსკლუზიური საცხოვრებელი კომპლექსი"}
            </p>
            <p className="text-base md:text-xl text-white/75 font-mono tracking-wider">
              {"თბილისის პრესტიჟულ უბანში - ვაკე"}
            </p>
          </div>

          <div
            className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a
              href="#apartments"
              className="flex flex-col items-center gap-3 text-white/60 hover:text-white/90 font-mono text-xs tracking-widest transition-all duration-300 group"
            >
              <span className="uppercase">{"აღმოაჩინე მეტი"}</span>
              <div className="relative">
                <ChevronDown className="w-6 h-6 animate-bounce" />
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-white/30 to-transparent" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
