import { home_assets } from "@/assets/home_assets";
import { Link } from "react-router-dom";

const pricingItems = [
  { id: "01", name: "Video Sessions", price: 69 },
  { id: "02", name: "Per Wedding shoots", price: 69 },
  { id: "03", name: "Per Video Sessions", price: 69 },
  { id: "04", name: "Audio Session", price: 69 },
  { id: "05", name: "Graphic Design", price: 69 },
];

export default function Pricing() {
  return (
    <section className="relative min-h-screen bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            {/* Hero Text */}
            <div className="mb-12">
              <h1 className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
                Where{" "}
                <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
                  Dreams
                </span>
                <br />
                Come to{" "}
                <span className="bg-gradient-to-r from-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
                  Life!
                </span>
              </h1>
              <p className="mb-8 max-w-xl text-lg text-white/80">
                From music and video production to capturing your special
                moments, we bring your vision to life. Book now and create magic
                with us!
              </p>
              <div className="flex flex-row gap-4">
                <Link
                  to="/"
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  More
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-opacity-90"
                >
                  <span className="text-gradient">Book Now</span>
                </Link>
              </div>
            </div>

            {/* Pricing Table */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <h2 className="text-2xl font-bold text-white">
                  Detail Pricing Structure
                </h2>
                <img
                  src={home_assets.vector}
                  className="w-8 h-8 bg-white hover:rotate-[29deg] transition-transform duration-300 rounded-full p-[4px]"
                  alt=""
                />
              </div>
              <div className="overflow-hidden rounded-lg border border-white/10">
                <div className="bg-white/5 px-6 py-4">
                  <h3 className="text-xl font-bold text-center text-white">
                    Base Pricings
                  </h3>
                </div>
                <table className="w-full">
                  <tbody>
                    {pricingItems.map((item) => (
                      <tr
                        key={item.id}
                        className="border-t border-white/10 transition-colors hover:bg-white/5"
                      >
                        <td className="px-6 py-4 text-md text-white/60">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 text-md text-white">
                          {item.name}
                        </td>
                        <td className="px-6 py-4 text-right text-md font-medium text-white">
                          ${item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative lg:h-full">
            {/* Image */}
            <img
              src={home_assets.section9_img1}
              alt="Photographer with camera"
              className="h-full w-full rounded-2xl z-10 object-cover"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Masked Vector */}
            <div
              className="absolute z-20 top-4 right-4 h-20 w-20 bg-white rounded-md"
              style={{
                maskImage: `url(${home_assets.vector})`,
                WebkitMaskImage: `url(${home_assets.vector})`,
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
                maskSize: "contain",
                WebkitMaskSize: "contain",
                maskPosition: "center",
                WebkitMaskPosition: "center",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
