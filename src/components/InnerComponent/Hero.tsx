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
    <section className="bg-black min-h-screen p-8 md:p-16">
      <div className="space-y-12">
        {/* Main Content Flex */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Text */}
          <h1 
            className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text md:w-full"
            style={{
              backgroundImage: `linear-gradient(to right, ${gradientColors.from}, ${gradientColors.via}, ${gradientColors.to})`
            }}
          >
            {title}
          </h1>

          {/* Right Image */}
          <div className="relative h-[280px] w-full md:w-1/2 rounded-2xl overflow-hidden flex justify-end">
            <img
              src={image1}
              alt={image1Alt}
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Flex */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Bottom Left Image */}
          <div className="relative h-[400px] w-full md:w-1/2 rounded-2xl overflow-hidden flex flex-row items-center">
            <img
              src={image2}
              alt={image2Alt}
              className="object-cover object-right"
            />
          </div>

          {/* Bottom Right Text */}
          <div className="flex items-center">
            <h2 className="text-4xl md:text-7xl lg:text-7xl font-bold text-white leading-tight">
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
