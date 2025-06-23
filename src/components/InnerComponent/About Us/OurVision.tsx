import { useState } from "react";
import { about_assets } from "@/assets/About/about_assets";

interface VisionSlide {
  title: string;
  description: string;
}

const slides: VisionSlide[] = [
  {
    title: "Quality",
    description:
      "Axen Studio offers high-quality audio production, video production, wedding/pre-wedding shoots and digital marketing services. We are committed to delivering superior quality work that exceeds expectations.",
  },
  {
    title: "Innovation",
    description:
      "We push the boundaries of creativity with cutting-edge technology and innovative approaches to bring your vision to life.",
  },
  {
    title: "Excellence",
    description:
      "Our team of experienced professionals ensures excellence in every project, from concept to final delivery.",
  },
];

export default function VisionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-black min-h-screen p-8 md:p-16 md:mb-0 mb-[-400px] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#ff7b7b] to-[#da4bdb] text-transparent bg-clip-text">
              Our Vision
            </h2>
            <div className="min-h-[160px] space-y-4">
              <h3 className="text-3xl font-bold text-white">
                {slides[currentSlide].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {slides[currentSlide].description}
              </p>
            </div>
            {/* Navigation Arrows */}
            <div className="flex gap-4 items-center pt-4">
              {/* Arrow Icon */}
              <div className="right-4 top-4 rounded-full bg-white p-2 transition-transform duration-300 group-hover:rotate-[30deg]">
                <img
                  src={about_assets.Vector_left_arrow}
                  alt="Arrow Icon"
                  onClick={previousSlide}
                  className="h-6 w-6"
                />
              </div>
              <div className="right-4 top-4 rounded-full bg-white p-2 transition-transform duration-300 group-hover:rotate-[30deg]">
                <img
                  src={about_assets.Vector_right_arrow}
                  alt="Arrow Icon"
                  onClick={nextSlide}
                  className="h-6 w-6"
                />
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Background decorative elements */}
            <div className="absolute right-0 bottom-0 w-48 h-48 rounded-full border border-dashed border-gray-700 opacity-30" />
            <div className="absolute right-12 bottom-12 text-gray-700 text-2xl">+</div>
            <div className="absolute right-24 bottom-24 text-gray-700 text-2xl">+</div>

            {/* Image */}
            <div className="absolute hidden md:block right-4 top-8 w-128 h-80 rounded-2xl shadow-xl">
              <img
                src={about_assets.Frame_3089}
                alt="Studio work"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
