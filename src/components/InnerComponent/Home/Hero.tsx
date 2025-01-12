import { Link } from "react-router-dom";
import { ImagePanel } from "./ImagePanel";
import CountUp from "../../reactBits/CountUp/CountUp";
import { home_assets } from "@/assets/home_assets";

const Hero = () => {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col gap-4 lg:flex-row lg:items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-3 flex-col items-end justify-center py-12 lg:py-0">
            <h1 className="mb-6 flex flex-col items-end text-6xl font-bold leading-tight lg:text-7xl">
              <span className="text-gradient">Axen</span>
              <span className="text-gradient">Studios</span>
            </h1>
            <p className="mb-8 max-w-md text-lg text-white/90 text-right">
              Welcome to Axen Studio, where creativity meets quality! From music
              to videos, weddings to marketing—we bring your vision to life.
            </p>
            <Link
              to="/"
              className="mb-12 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg w-9/12 font-semibold text-black transition-all hover:bg-opacity-90"
            >
              <span className="text-gradient">Book Now</span>
            </Link>
            <div className="flex w-full justify-center items-center flex-col gap-8 sm:flex-row sm:gap-12">
              <div className="flex flex-col items-end">
                <span className="text-4xl font-bold text-white">
                  <CountUp
                    from={0}
                    to={1500}
                    separator=""
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  +
                </span>
                <span className="text-lg text-white/70">
                  Instagram followers
                </span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-4xl font-bold text-white">
                  <span className="text-4xl font-bold text-white">
                    <CountUp
                      from={0}
                      to={600}
                      separator=""
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </span>
                </span>
                <span className="text-lg text-white/70">Active customers</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Panels */}
          <div className="relative flex justify-end w-9/12">
            {/* Grid of 3 Images */}
            <div className="grid grid-cols-3 h-[600px] w-11/12 z-10">
              <ImagePanel
                imageUrl={home_assets.home_img1}
                className="h-[600px] w-full transform"
              />
              <ImagePanel
                imageUrl={home_assets.home_img2}
                className="h-[600px] w-full transform"
              />
              <ImagePanel
                imageUrl={home_assets.home_img3}
                className="h-[600px] w-full transform"
              />
            </div>
            {/* Below Image */}
            <div className="absolute w-full h-full -bottom-[100px] -right-[300px] z-0 overflow-hidden">
              <img
                src={home_assets.home_img4}
                alt="No Image"
                className="opacity-90 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
