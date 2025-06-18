"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface MarketingService {
  id: number
  title: string
  description: string
  icon: React.ReactElement
  bgColor: string
  iconColor: string
}

const marketingServices: MarketingService[] = [
  {
    id: 1,
    title: "Website Development & Design",
    description: "Professional, mobile-responsive websites designed specifically for group insurance brokers with integrated lead capture and client portals.",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
        <path d="M7 8h10"></path>
        <path d="M7 12h10"></path>
        <path d="M7 16h10"></path>
      </svg>
    )
  },
  {
    id: 2,
    title: "Lead Generation Services",
    description: "Targeted digital marketing campaigns and SEO strategies that attract qualified group insurance prospects to your business.",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
        <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Brand Development & Design",
    description: "Complete brand identity packages including logo design, marketing materials, and consistent visual messaging that establishes market authority.",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v7.5"></path>
        <path d="m19.27 7.27-5.27 5.73"></path>
        <path d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2"></path>
      </svg>
    )
  },
  {
    id: 4,
    title: "Digital Marketing Strategy",
    description: "Comprehensive online presence optimization including search engine marketing, content creation, and social media management tailored for insurance professionals.",
    bgColor: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
        <path d="M10 2c1 .5 2 2 2 5"></path>
      </svg>
    )
  }
]

export function MarketingSupportAccordion() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const toggleItem = (id: number) => {
    const newExpandedItems = new Set(expandedItems)
    if (newExpandedItems.has(id)) {
      newExpandedItems.delete(id)
    } else {
      newExpandedItems.add(id)
    }
    setExpandedItems(newExpandedItems)
  }

  return (
    <div className="space-y-4">
      {marketingServices.map((service) => {
        const isExpanded = expandedItems.has(service.id)
        
        return (
          <div
            key={service.id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <button
              onClick={() => toggleItem(service.id)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <div className={service.iconColor}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              
              <div className="flex-shrink-0 ml-4">
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded 
                  ? 'max-h-48 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6">
                <div className="pl-18">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
} 