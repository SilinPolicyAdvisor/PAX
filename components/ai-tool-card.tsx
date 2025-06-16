import { MessageCircle, BarChart2, FileText, Users } from "lucide-react"

interface AIToolCardProps {
  title: string
  description: string
  icon: string
}

export function AIToolCard({ title, description, icon }: AIToolCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "message-circle":
        return <MessageCircle className="h-8 w-8 text-[#16B2E4]" />
      case "bar-chart-2":
        return <BarChart2 className="h-8 w-8 text-[#16B2E4]" />
      case "file-text":
        return <FileText className="h-8 w-8 text-[#16B2E4]" />
      case "users":
        return <Users className="h-8 w-8 text-[#16B2E4]" />
      default:
        return <MessageCircle className="h-8 w-8 text-[#16B2E4]" />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg relative overflow-hidden group">
      <div className="absolute inset-0 neon-glow-blue"></div>
      <div className="relative z-10">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  )
}
