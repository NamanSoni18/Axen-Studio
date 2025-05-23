import { about_assets } from "@/assets/About/about_assets";

export default function OurStudio() {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-8 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Image Grid Section - Takes up roughly half the space */}
          <div className="w-full lg:w-1/2 relative">
            <img
              src={about_assets.frame_3082} // Top-left image
              alt="Studio Image 1"
              className="w-full rounded-lg shadow-lg"
            />
            {/* Record Your Own Hit Section - Positioned at bottom-left of the image grid container */}
            <div className="absolute bottom-12 left-12 md:left-16 bg-white text-black p-4 rounded-xl flex flex-col items-center justify-center shadow-xl w-[250px] max-w-[400px]">
              <p className="font-bold text-xl mb-2 text-gray-800">Record Your own hit</p>
              <div className="flex items-center text-xl justify-center">
                {/* Gradient Phone Icon */}
                  <img src={about_assets.vector} className="w-5 h-5" alt="no vector" />
                <span className="font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                  91-2432566556
                </span>
              </div>
            </div>
          </div>

          {/* Text Content Section - Takes up roughly half the space */}
          <div className="w-full lg:w-1/2 lg:pl-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Where Music Takes <br /> Shape
            </h2>
            <p className="text-gray-300 mb-8 text-base md:text-lg">
              Axen Studio brings over six years of expertise in music
              production, video creation, graphic design, and digital marketing.
              We craft stunning visuals, timeless memories, and unique designs
              while helping grow your online presence.
            </p>
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-colors group">
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text group-hover:bg-none group-hover:text-black">
                Book Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
