import { CheckCircle } from "lucide-react";
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
    <div className="relative w-screen bg-black text-white overflow-hidden">
      <div className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="z-10 pl-12">
            <h1 className="text-8xl md:text-8xl leading-tight">
              Where
              <br />
              Artists Meet
              <br />
              <span className="bg-gradient-to-r font-semibold from-orange-400 to-pink-600 text-transparent bg-clip-text">
                Innovation
              </span>
            </h1>

            <p className="mt-6 text-xl text-gray-300 max-w-lg">
              From music and video production to capturing your special moments,
              we bring your vision to life. Book now and create magic with us.
            </p>

            <div className="flex pt-8 gap-8 items-start space-y-4">
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={projects_assets.section2_vector}
                          className="h-9 w-9"
                        />
                      </div>
                      <span className="text-md text-white/80">
                        {achievement.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </div>

          {/* Right Content with Image and Stats */}
          <div className="relative md:h-auto absolute right-0">
            <img 
              src={connect_assets.section2_img1} 
              alt="Innovation" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
