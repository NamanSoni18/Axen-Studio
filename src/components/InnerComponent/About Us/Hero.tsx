import { about_assets } from "@/assets/About/about_assets";

export default function Hero() {
  return (
    <section className="bg-black min-h-screen p-8 md:p-16">
      <div className="space-y-12">
        {/* Main Content Flex */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Text */}
          <h1 className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-[#FFA726] via-[#FF5252] to-[#BA68C8] text-transparent bg-clip-text md:w-1/2">
            About Us
          </h1>

          {/* Right Image */}
          <div className="relative h-[280px] w-full md:w-1/2 rounded-2xl overflow-hidden flex justify-end">
            <img
              src={about_assets.hero_img1}
              alt="Concert scene"
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Flex */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Bottom Left Image */}
          <div className="relative h-[400px] w-full md:w-1/2 rounded-2xl overflow-hidden flex flex-row items-center">
            <img
              src={about_assets.hero_img2}
              alt="Photographer with camera"
              className="object-cover object-right" // Change object position
            />
          </div>

          {/* Bottom Right Text */}
          <div className="flex items-center">
            <h2 className="text-xl md:text-7xl lg:text-7xl font-bold text-white leading-tight">
              Transforming Moments into{" "}
              <span className="bg-gradient-to-r from-[#FFA726] via-[#FF5252] to-[#BA68C8] text-transparent bg-clip-text">
                Masterpieces
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
