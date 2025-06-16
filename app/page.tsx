import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { BenefitItem } from "@/components/benefit-item"
import { StatCard } from "@/components/stat-card"
import { AIToolCard } from "@/components/ai-tool-card"
import { PlatformCard } from "@/components/platform-card"
import { DemoSection } from "@/components/demo-section"
import { LogoCarousel } from "@/components/logo-carousel"
import { FeatureCard } from "@/components/feature-card"
import { FAQ } from "@/components/faq"

export default function Home() {
  const benefits = [
    "AI-powered plan comparisons — show clients the best options instantly",
    "Quick quotes from top carriers, all in one platform",
    "Paperless enrollment & smart forms save you hours",
    "Fast, compliant submissions with fewer errors",
    "Automated renewals, billing & admin support",
    "Cross-sell HSAs, wellness, and more",
    "Expert support when you need it — we're here to help",
  ]

  const aiTools = [
    {
      title: "Conversational AI Tools",
      description: "Engage prospects with intelligent chatbots and automated follow-up systems",
      icon: "message-circle",
    },
    {
      title: "Quote Comparison Maker",
      description: "Generate and compare quotes from multiple carriers in a professional format",
      icon: "bar-chart-2",
    },
    {
      title: "Automated Proposal Generator",
      description: "Create client-ready presentations and proposals with AI assistance",
      icon: "file-text",
    },
    {
      title: "Expert Network Access",
      description: "Connect with underwriting experts and digital marketing specialists",
      icon: "users",
    },
  ]

  const platformFeatures = [
    {
      title: "Close More Group Deals Faster",
      description: "Advanced technology platform streamlines your sales process from quote to close",
      tag: "3x Faster",
      icon: "trending-up",
    },
    {
      title: "Instant Quote Generation & Comparison",
      description:
        "Generate multiple carrier quotes in seconds, not hours, giving you competitive edge in client meetings",
      tag: "Real-time",
      icon: "zap",
    },
    {
      title: "Expert Underwriting Support On-Demand",
      description: "Access specialized underwriting expertise for complex group cases without the overhead",
      tag: "24/7 Available",
      icon: "headphones",
    },
    {
      title: "Client-Ready Presentations at Your Fingertips",
      description: "Professional quote comparisons and proposals that impress prospects and accelerate decisions",
      tag: "Auto-generated",
      icon: "file-text",
    },
    {
      title: "Advanced Market Solutions",
      description: "Navigate challenging group insurance placements with technology-backed expert guidance",
      tag: "Expert-backed",
      icon: "compass",
    },
    {
      title: "Strategic Lead Origination Engine",
      description:
        "Proprietary prospecting algorithms and market intelligence deliver qualified group insurance opportunities directly to your pipeline",
      tag: "AI-powered",
      icon: "target",
    },
    {
      title: "Performance Marketing Amplification",
      description:
        "Comprehensive digital marketing support including LinkedIn campaigns, content marketing, and thought leadership positioning to establish market authority",
      tag: "Full-service",
      icon: "bar-chart-2",
    },
  ]

  const stats = [
    {
      value: "650K+",
      label: "Policies Sold",
      sublabel: "Through our platform",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      sublabel: "Rated by our advisors",
    },
    {
      value: "45%",
      label: "Faster Close Rate",
      sublabel: "Compared to traditional methods",
    },
    {
      value: "24/7",
      label: "Expert Support",
      sublabel: "Available when you need it",
    },
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <NavBar />

      {/* Hero Section - Updated to match reference image style */}
      <section className="py-16 md:py-20 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The choice for modern group benefits brokers.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Close deals faster. Save time. Grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-[#16B2E4] hover:bg-[#16B2E4]/90 text-white">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 dark:border-gray-700 text-foreground hover:bg-accent"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel - Replaced static LogoCloud with animated LogoCarousel */}
      <LogoCarousel />

      {/* Rest of the original content - Enhanced container constraints */}
      <section className="py-16 md:py-24 overflow-visible">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 xl:gap-4 items-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Sell Group Health Insurance <span className="text-[#16B2E4]">Smarter</span> with a Digital MGA
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Close deals faster. Save time. Grow your group benefits business.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <BenefitItem key={index} text={benefit} />
                ))}
              </div>

              <Button className="bg-[#D81671] hover:bg-[#D81671]/90 text-white rounded-full px-8 py-6 h-auto neon-button">
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="relative w-full">
              <PlatformCard />
            </div>
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            AI Tools & Expertise at <span className="text-[#16B2E4]">Your Fingertips</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Access our comprehensive suite of AI-powered tools and connect with industry experts to transform your group
            insurance sales process.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <AIToolCard key={index} title={tool.title} description={tool.description} icon={tool.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <DemoSection />

      {/* Why Choose Section - Updated to match the provided image with card grid layout */}
      <section className="py-16 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-3 text-center">
            Why Choose Our <span className="text-[#16B2E4]">Digital MGA Platform</span>?
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
            Transform your group insurance business with cutting-edge technology and expert support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First row */}
            <FeatureCard
              icon={platformFeatures[0].icon}
              title={platformFeatures[0].title}
              description={platformFeatures[0].description}
              tag={platformFeatures[0].tag}
            />
            <FeatureCard
              icon={platformFeatures[1].icon}
              title={platformFeatures[1].title}
              description={platformFeatures[1].description}
              tag={platformFeatures[1].tag}
            />
            <FeatureCard
              icon={platformFeatures[2].icon}
              title={platformFeatures[2].title}
              description={platformFeatures[2].description}
              tag={platformFeatures[2].tag}
              className="lg:col-span-1"
            />

            {/* Second row */}
            <FeatureCard
              icon={platformFeatures[3].icon}
              title={platformFeatures[3].title}
              description={platformFeatures[3].description}
              tag={platformFeatures[3].tag}
            />
            <FeatureCard
              icon={platformFeatures[4].icon}
              title={platformFeatures[4].title}
              description={platformFeatures[4].description}
              tag={platformFeatures[4].tag}
            />
            <FeatureCard
              icon={platformFeatures[5].icon}
              title={platformFeatures[5].title}
              description={platformFeatures[5].description}
              tag={platformFeatures[5].tag}
            />

            {/* Third row - centered */}
            <div className="md:col-span-2 lg:col-span-3 flex justify-center">
              <div className="max-w-lg w-full">
                <FeatureCard
                  icon={platformFeatures[6].icon}
                  title={platformFeatures[6].title}
                  description={platformFeatures[6].description}
                  tag={platformFeatures[6].tag}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by Canada's Leading Group Benefits Brokers</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Join thousands of successful brokers who are growing their group benefits business with our platform.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} sublabel={stat.sublabel} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E1033] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Connect with <span className="text-[#16B2E4]">AI Tools & Expert Support</span>?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Join brokers who are leveraging our AI tools and expert network to close more deals and grow their group
            insurance business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#16B2E4] hover:bg-[#16B2E4]/90 text-white rounded-full px-8 neon-button-blue">
              Schedule Your Call
            </Button>
                          <Button
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black rounded-full px-8 transition-colors"
              >
              View Our Tools
            </Button>
          </div>
          <p className="text-sm mt-6 text-gray-300">No setup fees | Expert consultation included | Cancel anytime</p>
        </div>
      </section>

      {/* FAQ Section - Added just before the footer */}
      <FAQ />

      <Footer />
    </div>
  )
}
