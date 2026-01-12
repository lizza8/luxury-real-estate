import { Building2, Shield, TreePine, Car } from "lucide-react"

const features = [
  {
    icon: Building2,
    title: "თანამედროვე არქიტექტურა",
    description: "საერთაშორისო სტანდარტების მიხედვით დიზაინი და აშენებული",
  },
  {
    icon: Shield,
    title: "24/7 უსაფრთხოება",
    description: "კონსიერჟ სერვისი, ვიდეო თვალთვალი და კონტროლირებადი შესვლა",
  },
  {
    icon: TreePine,
    title: "მწვანე ზონები",
    description: "ლანდშაფტური ეზოები, სათამაშო მოედნები და სასეირნო ბილიკები",
  },
  {
    icon: Car,
    title: "მიწისქვეშა პარკინგი",
    description: "ორსართულიანი დაცული პარკინგი თითოეულ ბინაზე",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-32 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-[0.3em] text-muted-foreground uppercase mb-4">
            {"განსხვავებული ცხოვრება"}
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground tracking-tight">{"რატომ Vake Heights"}</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 border-2 border-border bg-card hover:border-primary transition-all duration-500 group luxury-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <feature.icon className="w-14 h-14 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-xl font-semibold mb-4 text-foreground tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { src: "/luxury-modern-building-lobby-interior.jpg", alt: "Lobby" },
            { src: "/modern-apartment-building-courtyard-landscaping.jpg", alt: "Courtyard" },
            { src: "/luxury-apartment-interior-mountain-view-balcony.jpg", alt: "View" },
          ].map((image, index) => (
            <div key={index} className="aspect-[4/3] overflow-hidden border-2 border-border group">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
