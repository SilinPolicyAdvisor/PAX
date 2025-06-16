import {
  TrendingUp,
  Zap,
  Headphones,
  FileText,
  Compass,
  Target,
  BarChart2,
  CheckCircle,
  Users,
  Shield,
  MessageCircle,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: string
  title: string
  description: string
  tag: string
  className?: string
}

export function FeatureCard({ icon, title, description, tag, className }: FeatureCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "trending-up":
        return <TrendingUp className="h-5 w-5" />
      case "zap":
        return <Zap className="h-5 w-5" />
      case "headphones":
        return <Headphones className="h-5 w-5" />
      case "file-text":
        return <FileText className="h-5 w-5" />
      case "compass":
        return <Compass className="h-5 w-5" />
      case "target":
        return <Target className="h-5 w-5" />
      case "bar-chart-2":
        return <BarChart2 className="h-5 w-5" />
      case "check-circle":
        return <CheckCircle className="h-5 w-5" />
      case "users":
        return <Users className="h-5 w-5" />
      case "shield":
        return <Shield className="h-5 w-5" />
      case "message-circle":
        return <MessageCircle className="h-5 w-5" />
      default:
        return <CheckCircle className="h-5 w-5" />
    }
  }

  return (
    <div className={cn("bg-card border border-border rounded-xl p-6 h-full shadow-sm", className)}>
      <div className="bg-muted rounded-lg w-10 h-10 flex items-center justify-center mb-4">
        <div className="text-[#16B2E4]">{getIcon()}</div>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-card-foreground">{title}</h3>
        <span className="text-xs font-medium bg-[#16B2E4]/20 text-[#16B2E4] px-3 py-1 rounded-full border border-[#16B2E4]/30 whitespace-nowrap">{tag}</span>
      </div>

      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
