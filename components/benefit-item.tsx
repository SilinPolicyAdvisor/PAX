import { CheckCircle } from "lucide-react"

interface BenefitItemProps {
  text: string
}

export function BenefitItem({ text }: BenefitItemProps) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="h-5 w-5 text-[#16B2E4] flex-shrink-0 mt-0.5" />
      <span className="text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  )
}
