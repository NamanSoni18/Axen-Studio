import { home_assets } from "@/assets/home_assets";
import { Link } from "react-router-dom";

const pricingItems = [
  { id: "01", name: "Video Shoot", price: "4,999/-" },
  { id: "02", name: "Pre Wedding Shoot", price: "14,999/-" },
  { id: "03", name: "Audio Recording", price: "999/hr" },
  { id: "04", name: "Video Edit", price: "4,999/-" },
  { id: "05", name: "Reel Edit", price: "499/-" },
  { id: "06", name: "Graphic Designing", price: "999/-" },
  { id: "07", name: "Music Video Shoot", price: "19,999/-" },
  { id: "08", name: "Music Production", price: "9,999/-" },
  { id: "09", name: "Mixing & Mastering", price: "4,999/-" },
  { id: "10", name: "Advt. Shoot Package", price: "4,999/-" },
];

export default function Pricing() {
  return (
    <section className="relative min-h-screen bg-black px-2 xs:px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 overflow-x-hidden">
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid gap-8 lg:gap-12 xl:gap-16 grid-cols-1 lg:grid-cols-2 lg:items-center">
          {/* Left Column */}
          <div className="flex flex-col justify-between order-2 lg:order-1">
            {/* Hero Text */}
            <div className="mb-8 lg:mb-12 text-center lg:text-left">
              <h1 className="mb-4 lg:mb-6 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
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
              <p className="mb-6 lg:mb-8 max-w-xl mx-auto lg:mx-0 text-sm xs:text-base sm:text-lg text-white/80">
                From audio and video production to capturing your special
                moments, we bring your vision to life. Book now and create magic
                with us!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 text-center"
                >
                  Projects
                </Link>
                <Link
                  to="/connect"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-black transition-all hover:bg-opacity-90"
                >
                  <span className="text-gradient">Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Pricing Table */}
            <div className="w-full">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 text-center lg:text-left">
                <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                  Detail Pricing Structure
                </h2>
                <img
                  src={home_assets.vector}
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-white hover:rotate-[29deg] transition-transform duration-300 rounded-full p-[3px] sm:p-[4px] mx-auto sm:mx-0"
                  alt=""
                />
              </div>
              <div className="overflow-x-auto rounded-lg border border-white/10 w-full">
                <div className="bg-white/5 px-2 xs:px-4 sm:px-6 py-3 sm:py-4">
                  <h3 className="text-base xs:text-lg sm:text-xl font-bold text-center text-white">
                    Base Pricings
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[320px] xs:min-w-[400px]">
                    <tbody>
                      {pricingItems.map((item) => (
                        <tr
                          key={item.id}
                          className="border-t border-white/10 transition-colors hover:bg-white/5"
                        >
                          <td className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base text-white/60 w-12 xs:w-16">
                            {item.id}
                          </td>
                          <td className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 text-xs xs:text-sm sm:text-base text-white">
                            {item.name}
                          </td>
                          <td className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 text-right text-xs xs:text-sm sm:text-base font-medium text-white whitespace-nowrap">
                            ₹{item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-48 xs:h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] order-1 lg:order-2 w-full max-w-full">
            {/* Image */}
            <img
              src={home_assets.section9_img1}
              alt="Photographer with camera"
              className="h-full w-full rounded-2xl object-cover object-center"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>

            {/* Masked Vector */}
            <div
              className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 h-8 w-8 xs:h-12 xs:w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 bg-white rounded-md"
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
