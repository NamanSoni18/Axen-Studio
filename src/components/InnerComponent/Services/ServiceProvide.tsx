import { home_assets } from "@/assets/home_assets";
import { services_assets } from "@/assets/Services/services_assets";
import CountUp from "@/components/reactBits/CountUp/CountUp";

interface ServiceItemCardProps {
  title: string;
  titleGradient: string;
  description: string;
  price: string;
  yearlyProduction: string;
  activeCustomers: string;
  mainImage: string; // Changed from StaticImageData to string for flexibility
  galleryImages: string[]; // Changed from StaticImageData[] to string[]
  imagePosition: "left" | "right";
  logoIconSvg?: React.ReactNode; // Optional SVG for the top-left icon
  viewMoreIconSvg?: React.ReactNode; // Optional SVG for the view more icon
}

const ServiceItemCard: React.FC<ServiceItemCardProps> = ({
  title,
  titleGradient,
  description,
  price,
  mainImage,
  yearlyProduction,
  activeCustomers,
  galleryImages,
  imagePosition,
  logoIconSvg,
  viewMoreIconSvg,
}) => {
  const imageOrderClass =
    imagePosition === "left" ? "lg:order-1" : "lg:order-2";
  const contentOrderClass =
    imagePosition === "left" ? "lg:order-2 lg:pl-8 lg:text-left" : "lg:order-1 lg:pr-8 lg:text-right";
  const pricePositionClass =
    imagePosition === "left"
      ? "bottom-6 md:bottom-10 -right-20 transform -translate-x-1/2 md:translate-x-0 md:right-6"
      : "bottom-6 md:bottom-10 right-12 transform translate-x-1/2 md:translate-x-0 md:right-6";

  const viewMoreButton = (
    <div className="w-[calc(33.33%-0.75rem)] group h-28 md:h-32 rounded-lg bg-white flex flex-col items-center justify-center text-center p-2">
      {viewMoreIconSvg && (
        <div className="bg-gradient-to-r transition-transform duration-300 rotate-[-30deg] group-hover:rotate-0 from-pink-500 to-orange-500 p-2 rounded-full mb-1">
          {viewMoreIconSvg}
        </div>
      )}
      <button className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
        View More
      </button>
    </div>
  );

  const galleryImageElements = galleryImages.map((imgSrc, index) => (
    <div
      key={index}
      className="w-[calc(33.33%-0.75rem)] h-28 md:h-32 rounded-lg overflow-hidden"
    >
      <img
        src={imgSrc}
        alt={`Gallery image ${index + 1} for ${title}`}
        width={200}
        height={150}
        className="w-full h-full object-cover"
      />
    </div>
  ));

  return (
    <div className="flex min-h-screen flex-col justify-center lg:flex-row items-center p-6 md:p-24 rounded-xl mb-6">
      <div
        className={`relative w-full group relative lg:w-2/5 ${imageOrderClass}`}
      >
        <img
          src={mainImage}
          alt={`${title} Setup`}
          width={600}
          height={750}
          className="rounded-lg object-cover w-full h-auto md:h-[500px] lg:h-[600px]"
        />
        {logoIconSvg && (
          <div
            className={`absolute top-[-15px] ${
              imagePosition === "left" ? "left-[-15px]" : "right-[-15px]"
            } bg-black p-8 rounded-full`}
          >
            <div className=" rounded-full bg-white p-2 transition-transform duration-300 group-hover:rotate-[25deg]">
              <img
                src={home_assets.vector}
                alt="Arrow Icon"
                className="h-8 w-8"
              />
            </div>
          </div>
        )}
        <div
          className={`absolute bg-black bg-opacity-70 px-6 py-3 rounded-lg text-center ${pricePositionClass}`}
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">
            ${price}
          </span>
          <span className="text-2xl text-white">/hr</span>
        </div>
      </div>

      <div className={`w-full lg:w-[600px] ${contentOrderClass}`}>
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className={`${titleGradient} text-transparent bg-clip-text`}>
            {title.includes(' ') ? (
              <>
                {title.split(' ')[0]}
                <br />
                {title.split(' ').slice(1).join(' ')}
              </>
            ) : (
              title
            )}
          </span>
        </h2>
        <p className="text-gray-300 mb-8 text-base md:text-lg">{description}</p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-10">
          <div>
            <span className="text-4xl md:text-5xl font-bold text-white">
              <CountUp
                from={0}
                to={yearlyProduction}
                separator=""
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </span>
            <p className="text-gray-400">Yearly Production</p>
          </div>
          <div>
          <span className="text-4xl md:text-5xl font-bold  text-white">
              <CountUp
                from={0}
                to={activeCustomers}
                separator=""
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </span>
            <p className="text-gray-400">Active customers</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {imagePosition === 'right' && viewMoreButton}
          {galleryImageElements}
          {imagePosition === 'left' && viewMoreButton}
        </div>
      </div>
    </div>
  );
};

const defaultLogoIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.125 10H16.875"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 4.375L16.875 10L11.25 15.625"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ServiceProvide = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Services We provide
        </h1>

        {/* Video Production Card - Image on Left */}
        <ServiceItemCard
          title="Video Production"
          titleGradient="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
          description="Axen Studio offers high-quality music production, audio engineering, and video editing services. We are committed to delivering superior quality work that exceeds expectations"
          price="55"
          yearlyProduction="250"
          activeCustomers="100"
          mainImage={services_assets.frame_3054}
          galleryImages={[
            services_assets.frame_3068, // Assuming these are StaticImageData
            services_assets.frame_3069,
          ]}
          imagePosition="left"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon} // Can be a different icon
        />

        {/* Music Production Card - Image on Right */}
        <ServiceItemCard
          title="Music Production"
          titleGradient="bg-gradient-to-r from-pink-500 to-purple-600" // Adjust gradient as needed
          description="Axen Studio offers high-quality music production, audio engineering, and video editing services. We are committed to delivering superior quality work that exceeds expectations" // Update description
          price="55" // Update price if different
          yearlyProduction="250" // Update stats
          activeCustomers="100" // Update stats
          mainImage={services_assets.frame_3054_3} // Replace with actual music production main image from assets
          galleryImages={[
            services_assets.frame_3069_3, // Replace with actual music gallery images
            services_assets.frame_3070_3,
          ]}
          imagePosition="right"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon} // Can be a different icon
        />

        <ServiceItemCard
          title="Wedding Shoots"
          titleGradient="bg-gradient-to-r from-pink-500 to-purple-600" // Adjust gradient as needed
          description="Axen Studio offers high-quality music production, audio engineering, and video editing services. We are committed to delivering superior quality work that exceeds expectations" // Update description
          price="55" // Update price if different
          yearlyProduction="250" // Update stats
          activeCustomers="100" // Update stats
          mainImage={services_assets.frame_3054_4_1} // Replace with actual music production main image from assets
          galleryImages={[
            services_assets.frame_3068_4_2, // Replace with actual music gallery images
            services_assets.frame_3069_4_3,
          ]}
          imagePosition="left"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon} // Can be a different icon
        />
        <ServiceItemCard
          title="Digital Marketing"
          titleGradient="bg-gradient-to-r from-pink-500 to-purple-600" // Adjust gradient as needed
          description="Axen Studio offers high-quality music production, audio engineering, and video editing services. We are committed to delivering superior quality work that exceeds expectations" // Update description
          price="55" // Update price if different
          yearlyProduction="250" // Update stats
          activeCustomers="100" // Update stats
          mainImage={services_assets.frame_3054_5_1} // Replace with actual music production main image from assets
          galleryImages={[
            services_assets.frame_3069_5_2, // Replace with actual music gallery images
            services_assets.frame_3070_5_3,
          ]}
          imagePosition="right"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon} // Can be a different icon
        />
      </div>
    </div>
  );
};

export default ServiceProvide;
