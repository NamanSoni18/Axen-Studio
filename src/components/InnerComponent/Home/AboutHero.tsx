import { home_assets } from "@/assets/home_assets";

export default function AboutHero() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-5xl font-bold sm:text-9xl">
            <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="relative h-60 w-128 overflow-hidden rounded-lg">
            <img
              src={home_assets.aboutus_section1_img1}
              alt="Photographer with camera"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative h-48 w-64 overflow-hidden rounded-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p51zKmpGLurNvDHyifnz6B8lGWfdZZ.png"
              alt="Crowd at an event"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Transforming Moments into{' '}
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
                Masterpieces
              </span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

