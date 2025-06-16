import type React from "react"
import { cn } from "@/lib/utils"

interface StarBorderProps {
  className?: string
  children: React.ReactNode
  color?: "blue" | "pink" | "dual"
  speed?: string
  containerClassName?: string
}

export function StarBorder({
  className = "",
  children,
  color = "blue",
  speed = "6s",
  containerClassName = "",
}: StarBorderProps) {
  const getGradientColor = () => {
    switch (color) {
      case "blue":
        return "#16B2E4"
      case "pink":
        return "#D81671"
      case "dual":
        return "linear-gradient(90deg, #16B2E4, #D81671)"
      default:
        return "#16B2E4"
    }
  }

  return (
    <div className={cn("star-border-container relative", containerClassName)}>
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle, ${getGradientColor()}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle, ${getGradientColor()}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-left"
        style={{
          background: `radial-gradient(circle, ${getGradientColor()}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="border-gradient-right"
        style={{
          background: `radial-gradient(circle, ${getGradientColor()}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className={cn("inner-content", className)}>{children}</div>
    </div>
  )
}
