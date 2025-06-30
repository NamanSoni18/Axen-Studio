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
  mainImage: string;
  galleryImages: string[];
  imagePosition: "left" | "right";
  logoIconSvg?: React.ReactNode;
  viewMoreIconSvg?: React.ReactNode;
}

const ServiceItemCard: React.FC<ServiceItemCardProps> = ({
  title,
  titleGradient,
  description,
  mainImage,
  yearlyProduction,
  activeCustomers,
  galleryImages,
  imagePosition,
  logoIconSvg,
  viewMoreIconSvg,
}) => {
  const imageOrderClass = imagePosition === "left" ? "lg:order-1" : "lg:order-2";
  const contentOrderClass =
    imagePosition === "left"
      ? "lg:order-2 lg:pl-12 text-center lg:text-left"
      : "lg:order-1 lg:pr-12 text-center lg:text-right";
  const iconPositionClass =
    imagePosition === "left"
      ? "top-[-20px] left-[-20px] lg:top-[-30px] lg:left-[-30px]"
      : "top-[-20px] right-[-20px] lg:top-[-30px] lg:right-[-30px]";

  // Add alignment classes for description and stats
  const descriptionAlignClass = imagePosition === "left" ? "mx-auto lg:mx-0" : "mx-auto lg:ml-auto lg:mr-0";
  const statsAlignClass = imagePosition === "left" ? "justify-center lg:justify-start" : "justify-center lg:justify-end";
  const galleryAlignClass = imagePosition === "left" ? "justify-center lg:justify-start" : "justify-center lg:justify-end";

  const galleryItemBaseClass = "w-[calc(50%-0.5rem)] sm:w-[calc(33.33%-0.66rem)] h-28 md:h-32 rounded-lg";

  const viewMoreButton = (
    <div className={`${galleryItemBaseClass} group bg-white flex flex-col items-center justify-center text-center p-2`}>
      {viewMoreIconSvg && (
        <div className="bg-gradient-to-r transition-transform duration-300 rotate-[-30deg] group-hover:rotate-0 from-pink-500 to-orange-500 p-2 rounded-full mb-1">
          {viewMoreIconSvg}
        </div>
      )}
      <button className="text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text">
        View More
      </button>
    </div>
  );

  const galleryImageElements = galleryImages.map((imgSrc, index) => (
    <div
      key={index}
      className={`${galleryItemBaseClass} overflow-hidden`}
    >
      <img
        src={imgSrc}
        alt={`Gallery image ${index + 1} for ${title}`}
        className="w-full h-full object-cover"
      />
    </div>
  ));

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 p-4 sm:p-8 rounded-xl mb-12 lg:mb-24">
      <div className={`relative w-full lg:w-5/12 group ${imageOrderClass}`}>
        <img
          src={mainImage}
          alt={`${title} Setup`}
          className="rounded-lg object-cover w-full aspect-[4/5]"
        />
        {logoIconSvg && (
          <div className={`absolute ${iconPositionClass} bg-black p-4 lg:p-6 rounded-full`}>
            <div className="rounded-full bg-white p-2 transition-transform duration-300 group-hover:rotate-[25deg]">
              <img
                src={home_assets.vector}
                alt="Arrow Icon"
                className="h-6 w-6 lg:h-8 lg:w-8"
              />
            </div>
          </div>
        )}
      </div>

      <div className={`w-full lg:w-7/12 ${contentOrderClass}`}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
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
        <p className={`text-gray-300 mb-8 text-base md:text-lg max-w-xl ${descriptionAlignClass}`}>{description}</p>

        <div className={`flex flex-col sm:flex-row gap-8 sm:gap-12 mb-10 ${statsAlignClass}`}>
          <div className={imagePosition === "right" ? "text-center lg:text-right" : "text-center lg:text-left"}>
            <span className="text-4xl md:text-5xl font-bold text-white">
              <CountUp
                from={0}
                to={parseInt(yearlyProduction)}
                separator=""
                direction="up"
                duration={1}
                className="count-up-text"
              />
              +
            </span>
            <p className="text-gray-400">Yearly Production</p>
          </div>
          <div className={imagePosition === "right" ? "text-center lg:text-right" : "text-center lg:text-left"}>
            <span className="text-4xl md:text-5xl font-bold text-white">
              <CountUp
                from={0}
                to={parseInt(activeCustomers)}
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

        <div className={`flex gap-4 ${galleryAlignClass}`}>
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
    className="text-black"
  >
    <path
      d="M3.125 10H16.875"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.25 4.375L16.875 10L11.25 15.625"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ServiceProvide = () => {
  return (
    <div className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Services We provide
        </h1>

        {/* Video Production Card - Image on Left */}
        <ServiceItemCard
          title="Video Production"
          titleGradient="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600"
          description="From cinematic storytelling to promotional content, we create visually stunning videos that captivate audiences. Our expert team handles everything from concept to post-production with state-of-the-art equipment."
          price="55"
          yearlyProduction="180"
          activeCustomers="100"
          mainImage={services_assets.frame_3054}
          galleryImages={[
            services_assets.frame_3068,
            services_assets.frame_3069,
          ]}
          imagePosition="left"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon}
        />

        {/* Audio Production Card - Image on Right */}
        <ServiceItemCard
          title="Audio Production"
          titleGradient="bg-gradient-to-r from-pink-500 to-purple-600"
          description="Professional music production, audio engineering, and sound design services. Our state-of-the-art studio delivers crystal-clear recordings and polished tracks that meet industry standards."
          price="55"
          yearlyProduction="320"
          activeCustomers="150"
          mainImage={services_assets.frame_3054_3}
          galleryImages={[
            services_assets.frame_3069_3,
            services_assets.frame_3070_3,
          ]}
          imagePosition="right"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon}
        />

        <ServiceItemCard
          title="Wedding Shoots"
          titleGradient="bg-gradient-to-r from-pink-500 to-purple-600"
          description="Capturing your most precious moments with artistic flair and emotional depth. From intimate ceremonies to grand celebrations, we preserve memories that last a lifetime with our signature wedding photography style."
          price="55"
          yearlyProduction="50"
          activeCustomers="500"
          mainImage={services_assets.frame_3054_4_1}
          galleryImages={[
            services_assets.frame_3068_4_2,
            services_assets.frame_3069_4_3,
          ]}
          imagePosition="left"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon}
        />
        <ServiceItemCard
          title="Digital Marketing"
          titleGradient="bg-gradient-to-r from-pink-500 to-purple-600"
          description="Comprehensive digital marketing strategies that amplify your brand presence. From social media management to content creation and SEO optimization, we help businesses grow their online footprint and reach target audiences effectively."
          price="55"
          yearlyProduction="100"
          activeCustomers="50"
          mainImage={services_assets.frame_3054_5_1}
          galleryImages={[
            services_assets.frame_3069_5_2,
            services_assets.frame_3070_5_3,
          ]}
          imagePosition="right"
          logoIconSvg={defaultLogoIcon}
          viewMoreIconSvg={defaultLogoIcon}
        />
      </div>
    </div>
  );
};

export default ServiceProvide;
