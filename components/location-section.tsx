import { Clock } from "lucide-react"

export function LocationSection() {
  const locations = [
    { time: "5 წუთი", place: "ვაკის პარკამდე" },
    { time: "10 წუთი", place: "რუსთაველის გამზირამდე" },
    { time: "15 წუთი", place: "საბურთალოს მეტრომდე" },
  ]

  return (
    <section id="location" className="py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-mono tracking-[0.3em] text-muted-foreground uppercase mb-4">
              {"იდეალური მდებარეობა"}
            </p>
            <h2 className="text-5xl md:text-7xl font-bold mb-10 text-foreground tracking-tight">{"პრემიუმ ლოკაცია"}</h2>
            <p className="text-lg md:text-xl text-muted-foreground font-mono mb-12 leading-relaxed">
              {
                "Vake Heights მდებარეობს თბილისის ერთ-ერთ ყველაზე პრესტიჟულ და მწვანე უბანში - ვაკეში. გარემოსგან თავსმოხვეული, მაგრამ ამავე დროს ცენტრალურ ნაწილებთან მახლობლად."
              }
            </p>

            <div className="space-y-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 luxury-hover group"
                >
                  <div className="p-4 bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="font-mono">
                    <p className="text-2xl font-bold text-primary mb-1">{location.time}</p>
                    <p className="text-muted-foreground">{location.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aspect-square bg-card border-2 border-border overflow-hidden relative group">
            <img
              src="/tbilisi-vake-district-aerial-view-map.jpg"
              alt="Location Map"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}
