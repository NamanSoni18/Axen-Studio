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
              <img src={home_assets.section7_map} alt="No Image" className="h-14 w-14" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Voyceo Studio Recording
            </h3>
            <p className="text-white">
              36 street, Raipur, Chhattisgarh
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <img src={home_assets.section7_phone} alt="No Image" className="h-14 w-14" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Connect Us
            </h3>
            <p className="text-white">
              91+ 7841164865
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full">
              <img src={home_assets.section7_clock} alt="No Image" className="h-14 w-14" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">
              Working Hours
            </h3>
            <div className="space-y-1 text-white">
              <p>Mon-Fri: 9:00 am – 5:00 pm</p>
              <p>Sat-Sun: 11:00 am – 16:00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

