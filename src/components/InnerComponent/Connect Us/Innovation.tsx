import { connect_assets } from "@/assets/ConnectUs/connect_assets";
import { projects_assets } from "@/assets/Projects/projects_assets";

const achievements = [
  {
    id: 1,
    text: "Receiving industry awards for music production",
  },
  {
    id: 2,
    text: "Receiving industry awards for excellence in music production",
  },
  {
    id: 3,
    text: "Receiving industry awards for excellence in music production",
  },
];

const Innovation = () => {
  return (
    <section className="bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Where
              <br />
              Artists Meet
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text">
                Innovation
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
              From music and video production to capturing your special moments,
              we bring your vision to life. Book now and create magic with us.
            </p>

            <div className="flex flex-col items-center lg:items-start gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center gap-4"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={projects_assets.section2_vector}
                      className="h-7 w-7 sm:h-8 sm:w-8"
                      alt="Checkmark icon"
                    />
                  </div>
                  <span className="text-base text-white/80 text-left">
                    {achievement.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content with Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={connect_assets.section2_img1}
              alt="Innovation"
              className="w-full max-w-md lg:max-w-none h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
