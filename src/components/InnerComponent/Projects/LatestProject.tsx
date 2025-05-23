import { projects_assets } from "@/assets/Projects/projects_assets";
import { CheckCircle } from "lucide-react";

const achievements = [
  {
    id: 1,
    text: "Receiving industry awards for excellence in music production",
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

export default function LatestProject() {
  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* <div className="flex flex-col lg:flex-row items-center justify-between"></div> */}

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-6">
          <div className="flex-1">
            <h2 className="text-5xl font-bold sm:text-5xl lg:text-6xl mb-8 lg:mb-0">
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
                Latest Project
              </span>
            </h2>
            {/* Left Column */}
            <div className="space-y-8">
              <p className="text-2xl leading-relaxed text-white/80">
                Axen Studio offers high-quality music production, audio
                engineering, and video editing services. We are committed to
                delivering superior quality work that exceeds expectations. Axen
                Studio offers high-quality music production, audio engineering,
                and video editing services.
              </p>

              <div className="flex justify-around gap-8 items-start space-y-4">
                <img src={projects_assets.section2_img2} className="rounded-[20px] w-60 h-60"/>
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
          </div>

          {/* Right Column */}
          <div className="flex-1 relative overflow-hidden rounded-2xl">
            <img
              src={projects_assets.latest_project_img1}
              alt="Music studio setup with guitars and mixing console"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
