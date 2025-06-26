import { home_assets } from "@/assets/home_assets";

const capabilities = [
  {
    title: "Audio Production",
    description: "Our studio makes your music sound amazing",
    image: `${home_assets.section4_img1}`,
    gradient: "from-[#FFA500] to-[#FF1493]",
  },
  {
    title: "Video Production",
    description: "Creating visuals will blow up the mind of the viewer",
    image: `${home_assets.section4_img2}`,
    gradient: "from-[#FF1493] to-[#FF69B4]",
  },
  {
    title: "Pre Wedding Shoots",
    description: "Creating memories to cherish for a lifetime",
    image: `${home_assets.section4_img5}`,
    gradient: "from-[#FF69B4] to-[#FF8C00]",
  },
  {
    title: "Wedding Shoots",
    description: "Creating memories to cherish for a lifetime",
    image: `${home_assets.section4_img3}`,
    gradient: "from-[#FF69B4] to-[#FF8C00]",
  },
  // {
  //   title: "Graphics Design",
  //   description: "We deliver eye-catching visuals that enhance your brand",
  //   image: `${home_assets.section4_img4}`,
  //   gradient: "from-[#FF8C00] to-[#FFA500]",
  // },
  {
    title: "Digital Marketing",
    description: "We deliver eye-catching visuals that enhance your brand",
    image: `${home_assets.section4_img4}`,
    gradient: "from-[#FF8C00] to-[#FFA500]",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl md:text-6xl">
          <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
            Our Capabilities
          </span>
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="h-full w-full object-cover filter grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>

              {/* Arrow Icon */}
              <div className="absolute right-4 top-4 rounded-full bg-white p-2 transition-transform duration-300 group-hover:rotate-[30deg]">
                <img
                  src={home_assets.vector}
                  alt="Arrow Icon"
                  className="h-5 w-5"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className={`mb-2 text-2xl font-bold bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent`}
                >
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
