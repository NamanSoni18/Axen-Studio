import { Link } from "react-router-dom";
import { ImagePanel } from "./ImagePanel";
import CountUp from "../../reactBits/CountUp/CountUp";
import { home_assets } from "@/assets/home_assets";

const Hero = () => {
  return (
    <main className="min-h-screen bg-black mt-[40px] overflow-x-hidden overflow-y-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen flex-col gap-12 py-8 lg:flex-row lg:items-center lg:gap-8">
          {/* Left Column - Text Content */}
          <div className="flex flex-1 flex-col items-center justify-center text-center lg:items-end lg:text-right">
            <h1 className="mb-6 flex flex-col text-5xl font-bold leading-tight sm:text-6xl lg:items-end lg:text-7xl">
              <span className="text-gradient">Axen</span>
              <span className="text-gradient">Studios</span>
            </h1>
            <p className="mb-8 max-w-md text-lg text-white/90">
              Welcome to Axen Studio, where creativity meets quality! From music
              to videos, weddings to marketing—we bring your vision to life.
            </p>
            <Link
              to="/connect"
              className="mb-12 inline-flex w-full max-w-xs items-center justify-center rounded-full bg-white px-8 py-3 text-lg font-semibold text-black transition-all hover:bg-opacity-90 sm:w-9/12"
              onClick={() => window.scrollTo(0, 0)}
            >
              <span className="text-gradient">Book Now</span>
            </Link>
            <div className="flex w-full flex-col items-center justify-center gap-8 sm:flex-row sm:gap-12 lg:justify-end">
              <div className="flex flex-col items-center sm:items-end">
                <span className="text-4xl font-bold text-white">
                  <CountUp
                    from={0}
                    to={3300}
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
              <div className="flex flex-col items-center sm:items-end">
                <span className="text-4xl font-bold text-white">
                  <span className="text-4xl font-bold text-white">
                    <CountUp
                      from={0}
                      to={500}
                      separator=""
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </span>
                </span>
                <span className="text-lg text-white/70">Total Events</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image Panels */}
          <div className="relative flex flex-1 justify-center lg:justify-end">
            {/* Grid of 3 Images */}
            <div className="z-10 grid h-[350px] w-full grid-cols-2 gap-2 sm:h-[500px] sm:grid-cols-3 sm:gap-4 lg:h-[600px] lg:w-11/12 lg:gap-0">
              <ImagePanel
                imageUrl={home_assets.home_img1}
                className="h-full w-full transform"
              />
              <ImagePanel
                imageUrl={home_assets.home_img2}
                className="h-full w-full transform"
              />
              <ImagePanel
                imageUrl={home_assets.home_img3}
                className="hidden h-full w-full transform sm:block"
              />
            </div>
            {/* Below Image */}
            <div className="absolute hidden lg:block -bottom-12 -right-12 z-0 h-full w-full overflow-hidden sm:-bottom-24 sm:-right-48 lg:-bottom-[100px] lg:-right-[300px]">
              <img
                loading="lazy"
                src={home_assets.home_img4}
                alt="No Image"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
