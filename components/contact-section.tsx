"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const whatsappNumber = "+995555123456"
  const whatsappMessage = "გამარჯობა! მაინტერესებს Vake Heights-ის შესახებ მეტი ინფორმაცია."

  const contactInfo = [
    { icon: Phone, label: "ტელეფონი", value: "+995 555 12 34 56" },
    { icon: Mail, label: "ელ. ფოსტა", value: "info@vakeheights.ge" },
    { icon: MapPin, label: "ოფისი", value: "ვაკე, თბილისი" },
  ]

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-mono tracking-[0.3em] text-muted-foreground uppercase mb-4">{"დაგვიკავშირდით"}</p>
        <h2 className="text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight">
          {"დაიწყეთ თქვენი მოგზაურობა"}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-mono mb-16 max-w-2xl mx-auto leading-relaxed">
          {"ჩვენი გუნდი მზად არის უპასუხოს ნებისმიერ შეკითხვას და დაგეხმაროთ იდეალური ბინის არჩევაში"}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="p-8 border-2 border-border bg-card hover:border-primary transition-all duration-300 luxury-hover group"
            >
              <div className="inline-block p-4 bg-primary/10 border border-primary/20 mb-6 group-hover:bg-primary/20 transition-colors">
                <contact.icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-mono text-xs text-muted-foreground mb-3 tracking-wider uppercase">{contact.label}</p>
              <p className="font-semibold text-foreground text-lg">{contact.value}</p>
            </div>
          ))}
        </div>

        <Button
          size="lg"
          onClick={() => {
            window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
          }}
          className="h-20 px-16 text-lg bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide transition-all duration-300 hover:shadow-2xl hover:scale-105"
        >
          <MessageCircle className="mr-3 h-6 w-6" />
          {"ჩამოტვირთეთ ფასების ჩამონათვალი"}
        </Button>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t-2 border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground font-mono">
          <p className="tracking-wide">{"© 2026 Vake Heights. ყველა უფლება დაცულია."}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors tracking-wide">
              {"კონფიდენციალურობა"}
            </a>
            <a href="#" className="hover:text-primary transition-colors tracking-wide">
              {"პირობები"}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
