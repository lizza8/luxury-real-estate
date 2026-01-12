"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

type ApartmentType = "1-bedroom" | "2-bedroom" | "penthouse"

interface Apartment {
  type: ApartmentType
  title: string
  area: string
  price: string
  floor: string
  floorPlan: string
  features: string[]
}

const apartments: Record<ApartmentType, Apartment> = {
  "1-bedroom": {
    type: "1-bedroom",
    title: "1 საძინებლიანი",
    area: "65 მ²",
    price: "$120,000 - $145,000",
    floor: "5-12 სართული",
    floorPlan: "/modern-apartment-floor-plan-1-bedroom.jpg",
    features: ["ღია კონცეფციის სამზარეულო", "ფართო აივანი მთის ხედით", "თანამედროვე სველი წერტილები", "გარდერობი"],
  },
  "2-bedroom": {
    type: "2-bedroom",
    title: "2 საძინებლიანი",
    area: "95 მ²",
    price: "$180,000 - $220,000",
    floor: "5-12 სართული",
    floorPlan: "/modern-apartment-floor-plan-2-bedrooms.jpg",
    features: [
      "ორი საძინებელი მთის ხედით",
      "ორი სველი წერტილი",
      "ფართო მისაღები ოთახი",
      "დიდი აივანი",
      "სარეცხის ოთახი",
    ],
  },
  penthouse: {
    type: "penthouse",
    title: "პენტჰაუსი",
    area: "180 მ²",
    price: "$380,000 - $450,000",
    floor: "13 სართული",
    floorPlan: "/luxury-penthouse-floor-plan-panoramic-view.jpg",
    features: [
      "სამი საძინებელი პანორამული ხედით",
      "კერძო ტერასა 60 მ²",
      "მთლიანი სართულის ფართობი",
      "მასტერ საძინებელი ენსუიტით",
      "VIP მასალები და დამთავრება",
      "პირადი ლიფტი",
    ],
  },
}

export function ApartmentsSection() {
  const [selectedType, setSelectedType] = useState<ApartmentType>("1-bedroom")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const apartment = apartments[selectedType]

  const handleTypeChange = (type: ApartmentType) => {
    if (type === selectedType) return
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedType(type)
      setIsTransitioning(false)
    }, 200)
  }

  return (
    <section id="apartments" className="py-32 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-sm font-mono tracking-[0.3em] text-muted-foreground uppercase mb-4">
            {"აირჩიე შენი სივრცე"}
          </p>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-foreground tracking-tight">
            {"აირჩიეთ თქვენი ბინა"}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-mono max-w-3xl mx-auto leading-relaxed">
            {
              "ვაკე ჰაიტს გთავაზობთ ფართების ფართო არჩევანს - კომფორტული 1 საძინებლიანი ბინებიდან ექსკლუზიურ პენტჰაუსებამდე"
            }
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {Object.entries(apartments).map(([key, apt]) => (
            <Button
              key={key}
              variant={selectedType === key ? "default" : "outline"}
              onClick={() => handleTypeChange(key as ApartmentType)}
              className={`min-w-[160px] h-14 font-mono text-sm tracking-wide transition-all duration-300 ${
                selectedType === key
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "border-border hover:border-primary hover:bg-muted"
              }`}
            >
              {apt.title}
            </Button>
          ))}
        </div>

        <div
          className={`grid lg:grid-cols-2 gap-16 items-start transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="relative aspect-[4/3] bg-card border-2 border-border overflow-hidden group">
            <img
              src={apartment.floorPlan || "/placeholder.svg"}
              alt={apartment.title}
              className="w-full h-full object-contain p-12 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary" />
          </div>

          <div className="space-y-10">
            <div>
              <h3 className="text-5xl font-bold mb-8 text-foreground tracking-tight">{apartment.title}</h3>
              <div className="grid grid-cols-2 gap-8 font-mono">
                <div className="p-6 bg-muted border border-border">
                  <p className="text-xs text-muted-foreground mb-2 tracking-wider uppercase">{"ფართობი"}</p>
                  <p className="text-2xl font-semibold text-primary">{apartment.area}</p>
                </div>
                <div className="p-6 bg-muted border border-border">
                  <p className="text-xs text-muted-foreground mb-2 tracking-wider uppercase">{"ფასი"}</p>
                  <p className="text-2xl font-semibold text-primary">{apartment.price}</p>
                </div>
                <div className="p-6 bg-muted border border-border col-span-2">
                  <p className="text-xs text-muted-foreground mb-2 tracking-wider uppercase">{"სართულები"}</p>
                  <p className="text-xl font-semibold text-foreground">{apartment.floor}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-semibold mb-6 text-foreground tracking-tight">{"მახასიათებლები"}</h4>
              <ul className="space-y-4">
                {apartment.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-4 font-mono text-base group">
                    <div className="mt-1 p-1 bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => {
                const whatsappNumber = "+995555123456"
                const message = `გამარჯობა! მაინტერესებს ${apartment.title} (${apartment.area})`
                window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank")
              }}
              className="w-full h-16 text-base bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wide transition-all duration-300 hover:shadow-xl"
            >
              {"მიიღეთ დეტალური ინფორმაცია"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
