import { home_assets } from "@/assets/home_assets";
import { ArrowRight, Mail, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function RecentEvents() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
            Recent Events
          </span>
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Left Column - Booking Info */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6 h-44 w-44 rounded-full p-8">
              <img src={home_assets.section5_circle} alt="No image" />
              {/* <div className="absolute inset-0 flex items-center justify-center rounded-full border-2 border-gray-700">
                <span className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
                    AX
                  </span>
                </span>
              </div> */}
            </div>
            <p className="mb-6 text-center text-sm text-white/90">
              Book your next concert with us for top performances and a
              thrilling atmosphere!
            </p>
            <Link
              to="/"
              className="relative inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 border-2 border-transparent bg-clip-padding"
              style={{
                background: "transparent",
                border: "2px solid transparent",
                borderImage: "linear-gradient(to right, #ff8a00, #ff2e7a) 1",
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Center Column - Main Concert Image */}
          <div className="relative rounded-2xl bg-gray-900">
            <div className="md:block hidden absolute left-[-80px] top-[-40px] flex items-center rounded-full px-3 py-1">
              <div className="flex">
                <img
                  src={home_assets.section5_rating}
                  className="w-[200px]"
                  alt="No Rating"
                />
              </div>
            </div>
            <img
              src={home_assets.section5_img1}
              alt="Guitarist performing at concert"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6">
              <h2 className="mb-2 text-5xl font-bold">
                <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent text-7xl">
                  Grand
                </span>{" "}
                <br />
                <span className="text-white">Music concert</span>
              </h2>
              <p className="text-sm text-white/80">
                unforgettable concert! The energy was electric, the performances
                were stellar, and the crowd was on fire.
              </p>
            </div>
          </div>

          {/* Right Column - Stats and View More */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-900">
              <img
                src={home_assets.section5_img2}
                alt="Concert crowd"
                className="h-full w-full object-cover brightness-50"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
                    10K+
                  </span>
                </span>
                <span className="text-xl font-semibold text-white">
                  soled Tickets
                </span>
              </div>
            </div>
            <Link
              to="/"
              className="flex items-center justify-between rounded-2xl bg-[#1a1a2e] p-6 transition-transform hover:scale-105"
            >
              <span className="text-xl font-semibold text-white">
                View More
              </span>
              <ArrowRight className="h-6 w-6 text-white" />
            </Link>
          </div>
        </div>

        {/* Email Contact */}
        <div className="mt-8 flex items-center justify-center gap-2 text-white/70">
          <Mail className="h-5 w-5" />
          <span>Axenstudio@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
