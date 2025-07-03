import { home_assets } from "@/assets/home_assets"

export default function ContactUs() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-5xl font-bold sm:text-6xl">
          <span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
            Axen Studios
          </span>
        </h2>

        <div className="grid gap-12 text-center sm:grid-cols-3">
          {/* Location */}
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <img src={home_assets.section7_map} alt="No Image" loading="lazy"
                className="h-14 w-14" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Axen Studio
            </h3>
            <p className="text-white">
              Address - 1/1 Upper Ground Floor, Sunder Vihar Gate Number 2, Paschim Vihar West,  New Delhi 110087
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <img src={home_assets.section7_phone} alt="No Image" loading="lazy" className="h-14 w-14" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Contact Us
            </h3>
            <div className="space-y-1 text-white">
              <p>
                <a href="tel:9818538442" className="transition-colors hover:text-gray-300">9818538442</a> / <a href="tel:9911910365" className="transition-colors hover:text-gray-300">9911910365</a>
              </p>
              <p>
                <a href="mailto:axenstudioteam@gmail.com" className="transition-colors hover:text-gray-300">
                  axenstudioteam@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <img src={home_assets.section7_clock} alt="No Image" loading="lazy" className="h-14 w-14" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Working Days
            </h3>
            <div className="space-y-1 text-white">
              <p>All 7 Days</p>
              <p>11:00 AM to 08:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

