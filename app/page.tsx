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
import Image from "next/image"
import { PieChart, BarChart, BarChart2, LineChart, FileText, Clock, Activity } from "lucide-react"
import { QuoteManagementTabs } from "./components/quote-management-tabs"
import { MarketingSupportAccordion } from "./components/marketing-support-accordion"

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
      <section className="pt-16 md:pt-20 pb-12 md:pb-16 bg-gradient-to-br from-background via-background to-blue-50/30 dark:from-black dark:via-black dark:to-black relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-1/4 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Badge */}
            <div className="inline-flex items-center justify-center gap-2 mb-4 sm:mb-6 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm font-medium">Trusted by 1000+ Insurance Brokers</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
                Grow Your Group Insurance
              </span>
              <br />
              <span className="text-[#16B2E4]">Business Faster</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 leading-relaxed max-w-3xl mx-auto px-2">
              Scale your group benefits practice with our <span className="font-semibold text-blue-600 dark:text-blue-400">AI-powered broker platform</span>. Close more deals, win bigger accounts, and expand your client base with quick multi-carrier quotes and automated enrollment solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
              <Button size="lg" className="bg-gradient-to-r from-[#16B2E4] to-blue-600 hover:from-[#16B2E4]/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 dark:border-gray-600 text-foreground hover:bg-gray-50 dark:hover:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold backdrop-blur-sm"
              >
                Watch Demo
                <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-muted-foreground px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel - Replaced static LogoCloud with animated LogoCarousel */}
      <LogoCarousel />

            {/* Rest of the original content - Enhanced container constraints */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-gray-900/50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Section Badge */}
              <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-xs sm:text-sm font-medium">Award-Winning Platform</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Revolutionary Group Insurance
                </span>
                <br />
                <span className="text-[#16B2E4]">Software That's Easy to Use</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Transform your group insurance sales process with our comprehensive broker technology platform. Our intuitive software eliminates paperwork, accelerates quote generation, and helps you close more group health insurance deals while reducing administrative overhead.
              </p>

              {/* Enhanced Statistics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-blue-200 dark:border-blue-800/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#16B2E4] mb-2">30+</div>
                  <p className="text-sm sm:text-base text-muted-foreground font-medium">Carrier Partnerships</p>
                  <div className="mt-2 text-xs text-blue-600 dark:text-blue-400">Industry Leading</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-200 dark:border-green-800/30 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-600 mb-2">85%</div>
                  <p className="text-sm sm:text-base text-muted-foreground font-medium">Faster Quote Processing</p>
                  <div className="mt-2 text-xs text-green-600">vs Traditional Methods</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button className="bg-gradient-to-r from-[#D81671] to-pink-600 hover:from-[#D81671]/90 hover:to-pink-600/90 text-white rounded-full px-6 sm:px-8 py-4 sm:py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 font-semibold text-sm sm:text-base">
                Schedule a Call
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full px-6 sm:px-8 py-4 sm:py-6 h-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold text-sm sm:text-base"
                >
                  View Platform Demo
                </Button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
              {/* Enhanced backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl transform rotate-3 sm:rotate-6"></div>
              <div className="relative">
              <PlatformCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights Reporting Section - NEW SECTION */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-black">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4 bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
              <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
              <span className="text-xs sm:text-sm font-medium">Advanced Analytics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-4">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Transform Data Into
              </span>
              <br />
              <span className="text-[#16B2E4]">Actionable Insights</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Leverage AI-powered analytics to make data-driven decisions and optimize your group insurance sales process.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#16B2E4] to-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI algorithms automatically analyze</h3>
                    <p className="text-sm text-muted-foreground">Complex data patterns to identify optimization opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#16B2E4] to-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI modules enabling proactive insights</h3>
                    <p className="text-sm text-muted-foreground">Predictive analytics for better business outcomes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all duration-300">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#16B2E4] to-blue-600 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">AI generates dynamic graphs, charts</h3>
                    <p className="text-sm text-muted-foreground">Visual reporting that's easy to understand and share</p>
                  </div>
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 font-semibold">
                Get 14 Days Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl p-8 shadow-xl border border-blue-200 dark:border-blue-800/30">
                <div className="aspect-[4/3] relative">
                  <div className="absolute top-4 left-4">
                    <h3 className="font-semibold text-lg">AI Report Dashboard</h3>
                    <p className="text-sm text-muted-foreground">Real-time analytics</p>
                  </div>
                  <div className="flex items-center justify-center h-full">
                    <div className="relative w-48 h-48">
                      {/* Enhanced circular progress chart */}
                      <div className="w-full h-full rounded-full border-8 border-blue-200 dark:border-blue-800 relative">
                        <div 
                          className="absolute inset-0 rounded-full border-t-8 border-r-8 border-[#16B2E4] shadow-lg"
                          style={{ transform: 'rotate(45deg)' }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <span className="text-4xl font-bold text-[#16B2E4]">72%</span>
                            <p className="text-xs text-muted-foreground mt-1">Efficiency Gain</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#16B2E4]"></div>
                      <span>Expected this month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <span>Previous period</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Benefits Section - NEW SECTION */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center gap-2 mb-3 bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-sm font-medium">Product Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Insurance Brokers
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover how our platform transforms your group insurance sales process with modern tools designed for efficiency.
            </p>
          </div>

          {/* Real-Time Quote Management */}
          <div className="bg-card rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden mb-16">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold">Real-Time Quote Management</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Track Every Group Insurance Quote in Real-Time
              </p>
              
              <QuoteManagementTabs />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 shadow-lg">
              <div className="aspect-[4/3] relative">
                <div className="absolute top-4 left-4">
                  <h3 className="font-semibold">Quote Progress</h3>
                </div>
                <div className="flex items-center justify-center h-full">
                  <div className="w-full max-w-md">
                    {/* Placeholder for quote management dashboard */}
                    <div className="space-y-4 w-full">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">ABC Company Quote</span>
                          <span className="text-xs text-muted-foreground">68%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-2 bg-blue-500 rounded-full" style={{width: '68%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">XYZ Corp Proposal</span>
                          <span className="text-xs text-muted-foreground">92%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-2 bg-blue-500 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">123 Industries</span>
                          <span className="text-xs text-muted-foreground">34%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-2 bg-blue-500 rounded-full" style={{width: '34%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">Global Tech Solutions</span>
                          <span className="text-xs text-muted-foreground">55%</span>
                        </div>
                        <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <div className="h-2 bg-blue-500 rounded-full" style={{width: '55%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-2 gap-2">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm">
                        <div className="text-xs text-muted-foreground">Active Quotes</div>
                        <div className="text-xl font-bold">24</div>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-md shadow-sm">
                        <div className="text-xs text-muted-foreground">Conversion Rate</div>
                        <div className="text-xl font-bold">68%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Streamline Your Sales Process
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our platform helps you manage every aspect of your group insurance sales cycle.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#16B2E4] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-foreground">Track all proposals in one unified dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#16B2E4] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-foreground">Receive alerts when clients view your quotes</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#16B2E4] flex items-center justify-center mr-3 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-foreground">Compare performance across different carriers</span>
                </li>
              </ul>
              
              <Button className="bg-[#16B2E4] hover:bg-[#16B2E4]/90 text-white">
                Try Quote Management
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Reporting Features Section - NEW SECTION */}
      <section className="py-12 sm:py-16 bg-background dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automated Reporting Features
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-[#16B2E4] mb-6">
                One-Click Broker-Ready Reports
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Generate professional client presentations, commission reports, and renewal analysis quickly. Our automated reporting system creates compelling proposals that help you win more group insurance business.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-card rounded-lg p-5 border border-gray-200 dark:border-gray-800">
                  <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <FileText size={20} />
                  </div>
                  <h4 className="font-medium mb-2">Proposal Generation</h4>
                  <p className="text-sm text-muted-foreground">
                    Create custom branded client proposals with comparative analysis in seconds.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-5 border border-gray-200 dark:border-gray-800">
                  <div className="w-10 h-10 rounded bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    <Clock size={20} />
                  </div>
                  <h4 className="font-medium mb-2">Renewal Reports</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated renewal documents with year-over-year comparisons and carrier options.
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="text-foreground border-gray-300 dark:border-gray-700">
                Learn More About Reporting
              </Button>
            </div>
            
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 shadow-lg">
              <div className="aspect-[4/3] relative">
                <div className="h-full flex flex-col">
                  {/* Report Template Placeholder */}
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 overflow-hidden">
                    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                      <div>
                        <div className="h-8 w-24 bg-blue-200 dark:bg-blue-900/40 rounded"></div>
                      </div>
                      <div className="text-right">
                        <h4 className="font-bold">Client Proposal</h4>
                        <p className="text-xs text-muted-foreground">Generated: 05/15/2023</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium mb-2">Plan Comparisons</h5>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                          <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                          <div className="h-4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center">
                          <div className="h-4 w-24 bg-gray-100 dark:bg-gray-700 rounded"></div>
                          <div className="h-4 w-16 bg-blue-100 dark:bg-blue-900/30 rounded"></div>
                        </div>
                        <div className="mt-2 h-20 bg-gray-50 dark:bg-gray-700/60 rounded"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="h-4 w-20 bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="h-24 bg-gray-50 dark:bg-gray-700/60 rounded"></div>
                        </div>
                        <div>
                          <div className="h-4 w-20 bg-gray-100 dark:bg-gray-700 rounded mb-2"></div>
                          <div className="h-24 bg-gray-50 dark:bg-gray-700/60 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-4">
                    <Button size="sm" variant="outline" className="text-xs flex-1 bg-white dark:bg-gray-800">Preview</Button>
                    <Button size="sm" className="text-xs flex-1 bg-[#16B2E4] text-white">Download PDF</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Intelligence Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center gap-2 mb-4 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-800">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-medium">Business Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Transform Group Insurance Data Into
                </span>
                <br />
                <span className="text-[#16B2E4]">Sales Insights</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Advanced analytics turn your client interactions and market data into actionable intelligence
              </p>
            </div>

            {/* Enhanced Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {/* AI-powered opportunity analysis */}
              <div className="sm:col-span-2 lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 11H1l8-8 8 8"/>
                      <path d="M9 11v10"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#16B2E4] transition-colors">AI-powered opportunity analysis</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Our AI algorithms identify high-value prospects and suggest optimal approach strategies.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="link" className="px-0 text-[#16B2E4] hover:text-[#16B2E4]/90 font-semibold">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-xs text-muted-foreground bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                    AI-Powered
                  </div>
                </div>
              </div>

              {/* Competitive market positioning */}
              <div className="sm:col-span-2 lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#16B2E4] transition-colors">Competitive market positioning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Understand your performance against competitors and identify unique market advantages.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="link" className="px-0 text-[#16B2E4] hover:text-[#16B2E4]/90 font-semibold">
                    View Analytics
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-xs text-muted-foreground bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                    Market Intel
                  </div>
                </div>
              </div>

              {/* Automated renewal projections */}
              <div className="sm:col-span-2 lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 0 1-9 9"/>
                      <path d="M12 21a9 9 0 0 1-9-9"/>
                      <path d="M3 12a9 9 0 0 1 9-9"/>
                      <path d="M12 3a9 9 0 0 1 9 9"/>
                      <path d="m17 12-5 5"/>
                      <path d="m12 7 5 5"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#16B2E4] transition-colors">Automated renewal projections</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Forecast renewal rates and prepare strategies months in advance of client renewal dates.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="link" className="px-0 text-[#16B2E4] hover:text-[#16B2E4]/90 font-semibold">
                    View Forecasts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-xs text-muted-foreground bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                    Predictive
                  </div>
                </div>
              </div>

              {/* Cross-selling opportunity alerts */}
              <div className="sm:col-span-2 lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/>
                      <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#16B2E4] transition-colors">Cross-selling opportunity alerts</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Receive notifications when clients show indicators of needing additional products or services.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <Button variant="link" className="px-0 text-[#16B2E4] hover:text-[#16B2E4]/90 font-semibold">
                    Setup Alerts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <div className="text-xs text-muted-foreground bg-gray-50 dark:bg-gray-700/50 px-3 py-1 rounded-full">
                    Real-time
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Dashboard Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 space-y-6">
                <div className="inline-flex items-center gap-2 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Live Dashboard</span>
                </div>
                
                <h3 className="text-3xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                    Comprehensive Analytics
                  </span>
                  <br />
                  <span className="text-[#16B2E4]">That Drive Results</span>
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our business intelligence platform uncovers hidden patterns and opportunities in your sales data, helping you make informed decisions and optimize your group insurance sales strategy.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-[#16B2E4] to-blue-600 hover:from-[#16B2E4]/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 font-semibold">
                    View Demo Dashboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-semibold">
                    Request Access
                  </Button>
                </div>
              </div>
              
              {/* Dashboard Visualization */}
              <div className="lg:col-span-3 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-2xl"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-black rounded-3xl p-8 shadow-2xl border border-blue-200 dark:border-gray-700">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h4 className="text-xl font-bold">Sales Performance Dashboard</h4>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-4 rounded-xl border border-green-200 dark:border-green-800/30">
                        <div className="text-xs text-muted-foreground">Total Sales</div>
                        <div className="text-2xl font-bold text-green-600">$452K</div>
                        <div className="text-xs text-green-500 flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m7 14 5-5 5 5"/>
                          </svg>
                          +12%
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-4 rounded-xl border border-blue-200 dark:border-blue-800/30">
                        <div className="text-xs text-muted-foreground">Opportunities</div>
                        <div className="text-2xl font-bold text-blue-600">64</div>
                        <div className="text-xs text-blue-500 flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m7 14 5-5 5 5"/>
                          </svg>
                          +8%
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-xl border border-orange-200 dark:border-orange-800/30">
                        <div className="text-xs text-muted-foreground">Conversion</div>
                        <div className="text-2xl font-bold text-orange-600">28%</div>
                        <div className="text-xs text-red-500 flex items-center gap-1">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="m17 14-5 5-5-5"/>
                          </svg>
                          -3%
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-48 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 rounded-xl relative overflow-hidden">
                      {/* Chart visualization */}
                      <div className="absolute inset-0 flex items-end p-4">
                        <div className="w-1/12 h-12 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-20 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-32 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-16 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-40 bg-gradient-to-t from-[#16B2E4] to-blue-400 rounded-t-sm mx-px shadow-lg"></div>
                        <div className="w-1/12 h-24 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-36 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-28 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-44 bg-gradient-to-t from-[#16B2E4] to-blue-400 rounded-t-sm mx-px shadow-lg"></div>
                        <div className="w-1/12 h-32 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-24 bg-gradient-to-t from-blue-400 to-blue-500 rounded-t-sm mx-px shadow-sm"></div>
                        <div className="w-1/12 h-40 bg-gradient-to-t from-[#16B2E4] to-blue-400 rounded-t-sm mx-px shadow-lg"></div>
                      </div>
                      
                      {/* Trend line overlay */}
                      <div className="absolute inset-0 p-4">
                        <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
                          <path 
                            d="M5,35 Q15,30 25,25 T45,15 T65,20 T85,10" 
                            fill="none" 
                            stroke="#16B2E4" 
                            strokeWidth="2"
                            opacity="0.8"
                          />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/30 dark:to-gray-800/30 p-4 rounded-xl">
                        <div className="text-xs text-muted-foreground mb-2">Top Performer</div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white font-bold text-sm">JS</div>
                          <div>
                            <div className="text-sm font-semibold">John Smith</div>
                            <div className="text-xs text-muted-foreground">$124,500 closed</div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-4 rounded-xl">
                        <div className="text-xs text-muted-foreground mb-2">Hottest Lead</div>
                        <div className="bg-white/80 dark:bg-gray-800/80 p-3 rounded-lg shadow-sm">
                          <div className="text-sm font-semibold">Tech Solutions Inc.</div>
                          <div className="text-xs text-muted-foreground">42 Employees • $2.1M Revenue</div>
                          <div className="text-xs text-orange-600 mt-1">95% match score</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Technology Suite - Bento Grid Layout */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center gap-2 mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="text-sm font-medium">Complete Platform</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  Complete Group Insurance
                </span>
                <br />
                <span className="text-[#16B2E4]">Technology Suite</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to streamline your group insurance business in one integrated platform.
              </p>
            </div>
          </div>
          
          {/* Enhanced Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Large Feature Card - AI-Powered Plan Comparisons */}
            <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-blue-200 dark:border-blue-800/60 group hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-xl">
              <div className="h-full flex flex-col">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
                      <path d="M8.5 2h7"></path>
                      <path d="M7 16h10"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">AI-Powered Plan Comparisons</h3>
                  <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
                    Show clients the best options quickly with intelligent carrier matching and custom scoring algorithms.
                  </p>
                </div>
                
                <div className="mt-auto space-y-4 pt-4">
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 border border-white/50 dark:border-gray-700/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Intelligent Plan Matching</div>
                      <div className="text-xs text-muted-foreground">Optimized for client needs</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-xl flex items-center gap-3 border border-white/50 dark:border-gray-700/50">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <path d="m9 11 3 3L22 4"></path>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Side-by-Side Comparisons</div>
                      <div className="text-xs text-muted-foreground">Multiple carriers at once</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Multi-Carrier Quotes */}
            <div className="col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 dark:text-indigo-400">
                  <path d="M5 3a2 2 0 0 0-2 2"></path>
                  <path d="M19 3a2 2 0 0 1 2 2"></path>
                  <path d="M21 19a2 2 0 0 1-2 2"></path>
                  <path d="M5 21a2 2 0 0 1-2-2"></path>
                  <path d="M9 3h1"></path>
                  <path d="M9 21h1"></path>
                  <path d="M14 3h1"></path>
                  <path d="M14 21h1"></path>
                  <path d="M3 9v1"></path>
                  <path d="M21 9v1"></path>
                  <path d="M3 14v1"></path>
                  <path d="M21 14v1"></path>
                  <line x1="7" x2="17" y1="13" y2="13"></line>
                  <line x1="7" x2="17" y1="8" y2="8"></line>
                  <line x1="7" x2="17" y1="18" y2="18"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#16B2E4] transition-colors">Quick Multi-Carrier Quotes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Generate quotes from top carriers simultaneously on one platform
              </p>
            </div>
            
            {/* Stats Card */}
            <div className="col-span-1 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl p-6 flex flex-col hover:shadow-xl transition-all duration-300">
              <div className="text-gray-300 text-sm mb-2">Average Time Saved</div>
              <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">85%</div>
              <div className="text-sm text-gray-400 mb-4">vs. traditional quoting</div>
              
              <div className="mt-auto">
                <div className="flex gap-2 items-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm text-green-300 font-medium">12x faster quotes</span>
                </div>
              </div>
            </div>
            
            {/* Paperless Enrollment System */}
            <div className="col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <path d="m8 13 2.75 2.75L16 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#16B2E4] transition-colors">Paperless Enrollment System</h3>
              <p className="text-muted-foreground leading-relaxed">
                Smart digital forms and e-signatures save hours per case
              </p>
            </div>

            {/* Document Library Card */}
            <div className="col-span-1 bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden relative hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-blue-900/20"></div>
              <div className="absolute inset-0 bg-grid-white/5"></div>
              <div className="p-6 relative z-10 h-full flex flex-col text-white">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Document Library</h3>
                <p className="text-white/70 leading-relaxed">
                  Digital storage for all client documents and templates
                </p>
              </div>
            </div>
            
            {/* Compliant Submission Processing */}
            <div className="col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600 dark:text-orange-400">
                      <path d="M9 12l2 2 4-4"/>
                      <path d="M21 12c0-6-4-9-9-9s-9 3-9 9"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#16B2E4] transition-colors">Compliant Submission Processing</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Automated compliance checks reduce errors and rejections, ensuring smooth carrier acceptance.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="font-medium">99.7% submission acceptance rate</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Renewal Dashboard */}
            <div className="col-span-1 bg-gradient-to-br from-sky-50 to-indigo-100 dark:from-sky-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-sky-200 dark:border-indigo-900/30 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">Renewal Status</div>
                    <div className="text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">On Track</div>
                  </div>
                  <div className="w-full h-3 bg-white/60 dark:bg-gray-800/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500" style={{width: '78%'}}></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Automated Renewal Management</h3>
                <p className="text-muted-foreground mb-4 flex-1 leading-relaxed">
                  Streamlined renewal process with automated billing support
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="text-3xl font-bold text-[#16B2E4]">78%</div>
                  <Button variant="outline" size="sm" className="text-xs hover:bg-white/50">View Details</Button>
                </div>
              </div>
            </div>
            
            {/* Cross-Selling Opportunities */}
            <div className="col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600 dark:text-purple-400">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#16B2E4] transition-colors">Cross-Selling Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrated HSA, wellness, and voluntary benefit options
              </p>
            </div>
            
            {/* Expert Underwriting Support */}
            <div className="col-span-2 bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 hover:shadow-lg group">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600 dark:text-red-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="m22 21-3-3"/>
                    <path d="m19 18 3 3"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#16B2E4] transition-colors">Expert Underwriting Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    On-demand access to specialized group insurance expertise and underwriting guidance
                  </p>
                </div>
                <div className="ml-auto">
                  <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="col-span-1 bg-gradient-to-br from-[#16B2E4] to-blue-600 text-white rounded-2xl p-6 hover:from-[#16B2E4]/90 hover:to-blue-600/90 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 cursor-pointer">
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2">Ready to streamline?</h3>
                <p className="mb-auto leading-relaxed">Try our complete insurance platform solution.</p>
                <div className="mt-6 flex justify-end">
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            {/* Data Security Card */}
            <div className="col-span-1 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 rounded-2xl p-6 border border-emerald-200 dark:border-emerald-800/30 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 dark:text-emerald-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#16B2E4] transition-colors">Enterprise Security</h3>
              <p className="text-muted-foreground leading-relaxed">
                SOC 2 compliant with enterprise-grade protection for all client data
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Marketing Support Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Comprehensive Marketing Support
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Grow Your Client Base with Professional Marketing Solutions
            </p>
            
            <MarketingSupportAccordion />
            
            <div className="mt-12 text-center">
              <Button className="bg-[#16B2E4] hover:bg-[#16B2E4]/90 text-white px-6">
                Explore Marketing Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Engagement Solutions - Bento Grid Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              </div>
              <span className="text-sm font-medium text-blue-500">Client Experience</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-3">
              Customer Engagement Solutions
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
              Deliver Exceptional Client Experience & Increase Retention
            </p>
            
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Branded Client Portals - Large Card */}
              <div className="sm:col-span-2 md:col-span-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl sm:rounded-2xl p-6 hover:shadow-md transition-all border border-blue-200 dark:border-blue-800/30">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF8FF] dark:bg-blue-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16B2E4]">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Branded Client Portals <span className="text-[#16B2E4]">Self-service</span></h3>
                  <p className="text-muted-foreground">
                    Portals where employees can view benefits, access ID cards, and manage enrollment information year-round.
                  </p>
                  <div className="mt-auto pt-4">
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                      <span className="font-medium">View demo</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Automated Renewal Management */}
              <div className="col-span-1 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-6 hover:shadow-md transition-all border border-green-200 dark:border-green-800/30">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF8FF] dark:bg-blue-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16B2E4]">
                        <path d="M21 12a9 9 0 0 1-9 9"></path>
                        <path d="M12 21a9 9 0 0 1-9-9"></path>
                        <path d="M3 12a9 9 0 0 1 9-9"></path>
                        <path d="M12 3a9 9 0 0 1 9 9"></path>
                        <path d="m17 12-5 5"></path>
                        <path d="m12 7 5 5"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Automated Renewal Management</h3>
                  <p className="text-muted-foreground">
                    Streamlined renewal process with automated notifications, rate comparisons, and digital enrollment.
                  </p>
                </div>
              </div>

              {/* Stats Card */}
              <div className="col-span-1 bg-gray-900 text-white rounded-2xl p-6 flex flex-col">
                <div className="text-gray-300 text-sm mb-2">Client Retention</div>
                <div className="text-4xl font-bold mb-1">95%</div>
                <div className="text-sm text-gray-400 mb-4">with engagement tools</div>
                
                <div className="mt-auto">
                  <div className="flex gap-2 items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="text-sm text-green-300">+18% vs industry avg</span>
                  </div>
                </div>
              </div>

              {/* Digital Enrollment Platform */}
              <div className="col-span-1 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl p-6 hover:shadow-md transition-all border border-purple-200 dark:border-purple-800/30">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF8FF] dark:bg-blue-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16B2E4]">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <path d="M8 13h2"></path>
                        <path d="M8 17h2"></path>
                        <path d="M14 13h2"></path>
                        <path d="M14 17h2"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Digital Enrollment Platform</h3>
                  <p className="text-muted-foreground">
                    Paperless employee enrollment with e-signatures, real-time eligibility verification, and automated carrier submissions.
                  </p>
                </div>
              </div>

              {/* Multi-Channel Communications */}
              <div className="col-span-1 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-2xl p-6 hover:shadow-md transition-all border border-amber-200 dark:border-amber-800/30">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF8FF] dark:bg-blue-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16B2E4]">
                        <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                        <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Multi-Channel Communications</h3>
                  <p className="text-muted-foreground">
                    Automated email sequences, SMS notifications, and in-app messaging to keep clients informed throughout the enrollment process.
                  </p>
                </div>
              </div>

              {/* 24/7 Support Access */}
              <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20 rounded-2xl p-6 hover:shadow-md transition-all border border-rose-200 dark:border-rose-800/30">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#EBF8FF] dark:bg-blue-900/30 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#16B2E4]">
                        <path d="M18 6H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z"></path>
                        <path d="M6 13v3a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"></path>
                        <path d="M15 6V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2"></path>
                        <path d="M12 16v3"></path>
                        <path d="M10 19h4"></path>
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">24/7 Support Access</h3>
                  <p className="text-muted-foreground">
                    Comprehensive help center and support resources available to your clients, reducing your administrative workload while improving satisfaction.
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="flex items-center text-sm text-rose-600 dark:text-rose-400">
                      <span className="font-medium">Always available</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Employee Education Tools - Blue Card */}
              <div className="col-span-1 md:col-span-2 bg-[#16B2E4] text-white rounded-2xl p-8">
                <div className="mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                      <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">Employee Education Tools</h3>
                <p className="text-white/90 mb-6">
                  Benefits education resources, decision support tools, and enrollment guides that help employees understand and appreciate their coverage.
                </p>
                <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* CTA Card */}
              <div className="col-span-1 md:col-span-2 bg-white dark:bg-card/80 rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="text-xl font-bold mb-3">Ready to enhance client engagement?</h3>
                <p className="text-muted-foreground mb-6">
                  Our solutions are designed to improve client satisfaction and retention.
                </p>
                <Button className="bg-[#16B2E4] hover:bg-[#16B2E4]/90 text-white">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Insurance Technology Experts Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-center">
              Built by Insurance Technology Experts
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              6+ years of proven insurance innovation and $2.5+ billion in coverage placed
            </p>
            
            <div className="space-y-8">
              {/* Deep Insurance Industry Knowledge */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Deep Insurance Industry Knowledge</h3>
                  <p className="text-muted-foreground">
                    Built by the team behind PolicyAdvisor.com, Canada's leading digital insurance marketplace. Our extensive experience helping over 30,000 Canadians monthly gives us unique insights into what brokers and clients actually need from insurance technology.
                  </p>
                </div>
              </div>
              
              {/* Market Insights & Data Intelligence */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 dark:text-green-400">
                      <path d="M3 3v18h18"></path>
                      <path d="m19 9-5 5-4-4-3 3"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Market Insights & Data Intelligence</h3>
                  <p className="text-muted-foreground">
                    Our firsthand knowledge, gained through partnerships with 30+ major insurance carriers and processing billions in coverage, enables us to deliver solutions that address real-world broker challenges and market opportunities.
                  </p>
                </div>
              </div>
              
              {/* 100% Digital-First Development */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600 dark:text-amber-400">
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9"></path>
                      <path d="m13 2 7 7"></path>
                      <path d="M9.5 10.5 7 13l2.5 2.5"></path>
                      <path d="m14.5 10.5 2.5 2.5-2.5 2.5"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">100% Digital-First Development</h3>
                  <p className="text-muted-foreground">
                    All platform features are developed in-house using cutting-edge technology, allowing for rapid updates, customized broker tools, and seamless integrations while ensuring top-tier security and innovation.
                  </p>
                </div>
              </div>
              
              {/* Industry Recognition & Growth */}
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-600 dark:text-yellow-400">
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Industry Recognition & Growth</h3>
                  <p className="text-muted-foreground mb-6">
                    Featured in Globe and Mail, Toronto Star, and National Post as one of Canada's fastest-growing insurance technology companies, demonstrating our commitment to transforming how insurance professionals operate.
                  </p>
                  
                  <h4 className="font-bold mb-4">Key Performance Metrics:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>$2.5B+ Insurance Coverage Placed</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>30,000+ Monthly Active Users</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>30+ Carrier Partnerships</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>6+ Years Insurance Innovation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>100% Digital Platform Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#1E1033] via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] sm:w-[800px] sm:h-[400px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Enhanced Header */}
          <div className="inline-flex items-center justify-center gap-2 mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm text-blue-200 px-3 sm:px-4 py-2 rounded-full border border-white/20">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium">Transform Your Business Today</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-4">
            Ready to Connect with{" "}
            <span className="bg-gradient-to-r from-[#16B2E4] via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AI Tools & Expert Support
            </span>
            ?
          </h2>
          
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed px-4">
            Join <span className="font-semibold text-white">1000+ insurance brokers</span> who are leveraging our AI tools and expert network to close more deals and grow their group insurance business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
            <Button className="bg-gradient-to-r from-[#16B2E4] via-blue-500 to-cyan-400 hover:from-[#16B2E4]/90 hover:via-blue-500/90 hover:to-cyan-400/90 text-white rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <svg className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Schedule Your Call
            </Button>
                          <Button
              variant="outline"
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black rounded-full px-8 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
              <svg className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
              View Our Tools
            </Button>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m9 11 3 3L22 4"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-green-400">No setup fees</span>
                <span className="text-xs text-blue-200">Get started immediately</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                    <path d="m7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-blue-400">14-day free trial</span>
                <span className="text-xs text-blue-200">Full platform access</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0-6-4-9-9-9s-9 3-9 9"/>
                  </svg>
                </div>
                <span className="text-sm font-medium text-purple-400">Cancel anytime</span>
                <span className="text-xs text-blue-200">No long-term commitment</span>
              </div>
            </div>
            
            <div className="border-t border-white/10 mt-6 pt-4">
              <p className="text-sm text-blue-200">
                ⭐ <span className="font-semibold text-white">4.9/5 rating</span> from 500+ insurance professionals • 
                <span className="font-semibold text-white"> Expert consultation included</span> • 
                <span className="font-semibold text-white"> 24/7 support available</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Added just before the footer */}
      <FAQ />
      <Footer />
    </div>
  )
}
