"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface LogoCarouselProps {
  className?: string
}

export function LogoCarousel({ className }: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Insurance company logos with dimensions doubled from previous size
  const logos = [
    { name: "Sun Life", src: "/logos/sun-life-logo.png", width: 640, height: 160 },
    { name: "Victor", src: "/logos/victor-logo.png", width: 640, height: 160 },
    { name: "Desjardins", src: "/logos/desjardins-logo.png", width: 640, height: 160 },
    { name: "Manulife", src: "/logos/manulife-logo.png", width: 640, height: 160 },
    { name: "Canada Life", src: "/logos/canada-life-logo.png", width: 640, height: 160 },
    { name: "Equitable", src: "/logos/equitable-logo.png", width: 640, height: 160 },
    { name: "RBC", src: "/logos/rbc-logo.png", width: 480, height: 160 },
    { name: "Empire Life", src: "/logos/empire-life-logo.png", width: 640, height: 160 },
    { name: "GreenShield", src: "/logos/greenshield-logo.png", width: 640, height: 160 },
  ]

  // Duplicate logos to create seamless loop
  const allLogos = [...logos, ...logos]

  return (
    <section className="py-0 border-t border-border bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-muted-foreground mb-4 pt-6">TRUSTED BY TOP INSURANCE CARRIERS</p>

        <div className="relative w-full">
          <div ref={containerRef} className={cn("flex items-center gap-32 w-max animate-carousel", className)}>
            {allLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex items-center justify-center h-40 flex-shrink-0">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-36 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
