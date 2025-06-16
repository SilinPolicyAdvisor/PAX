import Image from "next/image"

export function PlatformCard() {
  return (
    <div className="w-full flex justify-center items-center py-8 md:py-12 overflow-hidden">
      <img
        src="/images/laptop-dashboard.png"
        alt="PABoost Digital MGA Platform Dashboard"
        className="w-full h-auto object-contain max-w-none"
        style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}
      />
    </div>
  )
}
