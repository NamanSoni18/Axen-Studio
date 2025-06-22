import { projects_assets } from "@/assets/Projects/projects_assets";

const achievements = [
  {
    id: 1,
    text: "Receiving industry awards for excellence in music production.",
  },
  {
    id: 2,
    text: "Collaborating with renowned artists on chart-topping hits.",
  },
  {
    id: 3,
    text: "Pioneering innovative sound design for film and interactive media.",
  },
];

export default function LatestProject() {
  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <h2 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">
                Latest Project
              </span>
            </h2>

            <p className="text-lg leading-relaxed text-white/80 sm:text-xl">
              Axen Studio offers high-quality music production, audio
              engineering, and video editing services. We are committed to
              delivering superior quality work that exceeds expectations.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
              <img
                src={projects_assets.section2_img2}
                className="h-48 w-48 flex-shrink-0 rounded-2xl object-cover sm:h-56 sm:w-56"
                alt="Achievement visual"
              />
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-start gap-4 text-left"
                  >
                    <div className="flex-shrink-0 pt-1">
                      <img
                        src={projects_assets.section2_vector}
                        className="h-6 w-6"
                        alt="Checkmark icon"
                      />
                    </div>
                    <span className="text-base text-white/80">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl sm:h-96 lg:h-[500px] lg:w-1/2">
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
