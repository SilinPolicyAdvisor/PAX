import { CheckCircle } from "lucide-react"

export function BenefitSection() {
  const benefits = [
    {
      title: "Close More Group Deals Faster",
      description: "Advanced technology platform streamlines your sales process from quote to close",
    },
    {
      title: "Instant Quote Generation & Comparison",
      description:
        "Generate multiple carrier quotes in seconds, not hours, giving you competitive edge in client meetings",
    },
    {
      title: "Expert Underwriting Support On-Demand",
      description: "Access specialized underwriting expertise for complex group cases without the overhead",
    },
    {
      title: "Client-Ready Presentations at Your Fingertips",
      description: "Professional quote comparisons and proposals that impress prospects and accelerate decisions",
    },
    {
      title: "Advanced Market Solutions",
      description: "Navigate challenging group insurance placements with technology-backed expert guidance",
    },
    {
      title: "Strategic Lead Origination Engine",
      description:
        "Proprietary prospecting algorithms and market intelligence deliver qualified group insurance opportunities directly to your pipeline",
    },
    {
      title: "Performance Marketing Amplification",
      description:
        "Comprehensive digital marketing support including LinkedIn campaigns, content marketing, and thought leadership positioning to establish market authority",
    },
  ]

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Grow Your Group Benefits Business</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our digital MGA platform gives you everything you need to succeed in the competitive group health
              insurance market.
            </p>
            <div className="space-y-6">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#16B2E4]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#16B2E4]/10 to-[#D81671]/10 p-8 rounded-2xl">
            <div className="space-y-6">
              {benefits.slice(4).map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-[#D81671]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
