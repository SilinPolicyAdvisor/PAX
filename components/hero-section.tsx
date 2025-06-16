import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#16B2E4]/10 via-background to-[#D81671]/10 z-0"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#16B2E4]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#D81671]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#16B2E4] to-[#D81671]">
            Sell Group Health Insurance Smarter with a Digital MGA
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Close deals faster. Save time. Grow your group benefits business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#16B2E4] hover:bg-[#16B2E4]/90 text-white">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-[#16B2E4]">300%</div>
              <div className="text-sm text-muted-foreground">Faster Quote Generation</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-[#D81671]">40%</div>
              <div className="text-sm text-muted-foreground">Higher Close Rate</div>
            </div>
            <div className="bg-background/80 backdrop-blur-sm border rounded-lg p-4 shadow-sm">
              <div className="text-3xl font-bold text-[#16B2E4]">25+</div>
              <div className="text-sm text-muted-foreground">Carrier Integrations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
