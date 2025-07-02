import { home_assets } from '@/assets/home_assets';

const Empowering = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src={home_assets.section3}
          alt="Two zebras in black and white"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="absolute z-10 left-1/2 top-[20%] flex w-full -translate-x-1/2 justify-center px-4">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-4xl lg:text-5xl text-center">
          Empowering Individuals to Capture Unforgettable Moments
        </h1>
      </div>
    </section>
  )
}

export default Empowering;
