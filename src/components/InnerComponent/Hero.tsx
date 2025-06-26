interface HeroProps {
  title: string;
  bottomTitle: string;
  gradientText: string;
  image1: string;
  image2: string;
  image1Alt?: string;
  image2Alt?: string;
  gradientColors?: {
    from: string;
    via: string;
    to: string;
  };
}

export default function Hero({
  title,
  bottomTitle,
  gradientText,
  image1,
  image2,
  image1Alt = "Featured image 1",
  image2Alt = "Featured image 2",
  gradientColors = {
    from: "#ff8a00",  // Warm Orange
    via: "#ff2e7a",   // Hot Pink
    to: "#ff007a"     // Deep Pink
  }
}: HeroProps) {
  return (
    <section className="mt-[40px] bg-black min-h-screen p-4 sm:p-8 md:p-16">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
        {/* Main Content Flex */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 
              className="text-6xl sm:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`
              }}
            >
              {title}
            </h1>
          </div>

          {/* Right Image */}
          <div className="relative h-[250px] sm:h-[300px] w-full md:w-1/2 rounded-2xl overflow-hidden">
            <img
              src={image1}
              alt={image1Alt}
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Bottom Flex */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
          {/* Bottom Left Image */}
          <div className="relative h-[300px] sm:h-[450px] w-full md:w-1/2 rounded-2xl overflow-hidden">
            <img
              src={image2}
              alt={image2Alt}
              className="w-full h-full object-cover grayscale"
            />
          </div>
          {/* Bottom Right Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {bottomTitle}{" "}
              <span 
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`
                }}
              >
                {gradientText}
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
