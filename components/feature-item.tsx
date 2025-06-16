import { CheckCircle } from "lucide-react"

interface FeatureItemProps {
  title: string
  description: string
  tag: string
}

export function FeatureItem({ title, description, tag }: FeatureItemProps) {
  return (
    <div className="flex gap-4 pb-8">
      <div className="flex-shrink-0 mt-1">
        <CheckCircle className="h-6 w-6 text-green-500" />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="font-bold text-lg">{title}</h3>
          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded-full">
            {tag}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  )
}
