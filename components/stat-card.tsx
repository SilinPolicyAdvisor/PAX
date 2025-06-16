interface StatCardProps {
  value: string
  label: string
  sublabel: string
}

export function StatCard({ value, label, sublabel }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold mb-2">{value}</div>
      <div className="font-medium mb-1">{label}</div>
      <div className="text-sm text-gray-400">{sublabel}</div>
    </div>
  )
}
