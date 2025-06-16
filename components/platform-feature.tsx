import { CheckCircle } from "lucide-react"

interface PlatformFeatureProps {
  title: string
  description: string
  tag: string
}

export function PlatformFeature({ title, description, tag }: PlatformFeatureProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle className="h-6 w-6 text-[#16B2E4]" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-bold text-lg">{title}</h3>
          <span className="text-xs bg-[#F0F9FF] dark:bg-[#16B2E4]/20 text-[#16B2E4] px-2 py-0.5 rounded-full">
            {tag}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
