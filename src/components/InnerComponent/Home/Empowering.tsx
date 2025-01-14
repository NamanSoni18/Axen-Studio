import { home_assets } from '@/assets/home_assets';
import React from 'react'

const Empowering = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image Container */}
      <div className="absolute inset-0">
        <img
          src={home_assets.section3}
          alt="Two zebras in black and white"
          className="h-full w-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-4xl lg:text-5xl">
          Empowering Individuals to Capture Unforgettable Moment
        </h1>
      </div>
    </section>
  )
}

export default Empowering;
