import { about_assets } from "@/assets/About/about_assets";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Sonu raj",
    role: "Video And Production Manager",
    image: `${about_assets.OurTeam1}`,
  },
  {
    name: "Sonu raj",
    role: "Video And Production Manager",
    image: `${about_assets.OurTeam1}`,
  },
  {
    name: "Sonu raj",
    role: "Video And Production Manager",
    image: `${about_assets.OurTeam1}`,
  },
  {
    name: "Sonu raj",
    role: "Video And Production Manager",
    image: `${about_assets.OurTeam1}`,
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black min-h-full md:px-16 md:pt-16">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Gradient Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center">
          <span className="bg-gradient-to-r from-[#ff7b7b] via-[#ff4bdb] to-[#da4bdb] text-transparent bg-clip-text">
            Our Team
          </span>
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-gray-900"
            >
              {/* Image */}
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="object-cover grayscale transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
