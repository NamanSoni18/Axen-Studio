import { home_assets } from "@/assets/home_assets";
import GradientButton from "@/components/UiVerse/graidentButton";
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
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Left Column - Booking Info */}
          <div className="flex flex-col items-center justify-between text-center h-full">
            <div className="flex flex-col items-center">
              <div className="relative mb-6 h-44 w-44 rounded-full p-8">
                <img src={home_assets.section5_circle} alt="No image" />
              </div>
              <p className="mb-6 text-center text-lg text-white/90">
                Book your next concert with us for top performances and a
                thrilling atmosphere!
              </p>
              <GradientButton arrowPath={home_assets.vector} label="Book Now" />
            </div>

            {/* Email Contact */}
            <div className="flex items-center justify-center text-xl gap-2 text-white/70">
              <img src={home_assets.mail} alt="No Image" className="w-8 h-8" />
              <span>Axenstudio@gmail.com</span>
            </div>
          </div>

          {/* Center Column - Main Concert Image */}
          <div className="relative rounded-2xl bg-gray-900 md:col-span-2 lg:col-span-2">
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
                </span>
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
          <div className="grid grid-rows-12 gap-4">
            {/* 10K+ Tickets Section - 9/12 */}
            <div className="relative row-span-9 overflow-hidden rounded-2xl bg-gray-900">
              <img
                src={home_assets.section5_img2}
                alt="Concert crowd"
                className="h-full w-full object-cover brightness-50"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6">
                <h2 className="mb-2 text-5xl font-bold">
                  <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent text-7xl">
                    10K+
                  </span>
                  <br />
                  <span className="text-white">Sold Tickets</span>
                </h2>
              </div>
            </div>

            {/* View More Link - 3/12 */}
            <Link
              to="/"
              className="row-span-3 flex flex-col items-center justify-center rounded-2xl bg-[#1a1a2e] p-6 transition-transform hover:scale-105"
            >
              <img
                src={home_assets.vector}
                alt="No vector"
                className="bg-white w-10 h-10 rounded-full m-4 p-2 rotate-[30deg]"
              />
              <span className="text-4xl font-bold text-white">View More</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
