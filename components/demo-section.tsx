import { Button } from "@/components/ui/button"

export function DemoSection() {
  return (
    <section className="py-16 bg-[#FFF5FA] dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">See Our Tools in Action</h2>

        <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg relative overflow-hidden max-w-5xl mx-auto">
          <div className="absolute inset-0 neon-glow-pink"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Watch how brokers are using our AI tools to streamline their sales process and grow their business with
                expert support.
              </p>
              <Button className="bg-[#D81671] hover:bg-[#D81671]/90 text-white rounded-full px-6 neon-button">
                Schedule a Demo Call
              </Button>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 neon-glow-subtle"></div>
              <video 
                className="w-full h-auto rounded-lg relative z-10" 
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
