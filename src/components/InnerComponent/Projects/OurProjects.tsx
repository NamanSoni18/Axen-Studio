import { useState } from "react"
import { cn } from "@/lib/utils"
import { projects_assets } from "@/assets/Projects/projects_assets"

const categories = ["Wedding shoot", "Video Production", "Digital Marketing"]

const projects = [
  {
    id: 1,
    image: `${projects_assets.OurProjects_img3}`,
    category: "Wedding shoot",
    className: "col-span-2 row-span-2",
  },
  {
    id: 2,
    image: `${projects_assets.OurProjects_img1}`,
    category: "Audio Production",
    className: "col-span-1 row-span-1",
  },
  {
    id: 3,
    image: `${projects_assets.OurProjects_img5}`,
    category: "Video Production",
    className: "col-span-1 row-span-2",
  },
  {
    id: 4,
    image: `${projects_assets.OurProjects_img2}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-1",
  },
  {
    id: 5,
    image: `${projects_assets.OurProjects_img4}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-1",
  },
  {
    id: 6,
    image: `${projects_assets.OurProjects_img7}`,
    category: "Audio Production",
    className: "col-span-2 row-span-2",
  },
  {
    id: 7,
    image: `${projects_assets.OurProjects_img9}`,
    category: "Video Production",
    className: "col-span-1 row-span-2",
  },
  {
    id: 8,
    image: `${projects_assets.OurProjects_img6}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-1",
  },
  {
    id: 9,
    image: `${projects_assets.OurProjects_img8}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-1",
  },
  {
    id: 10,
    image: `${projects_assets.OurProjects_img10}`,
    category: "Audio Production",
    className: "col-span-2 row-span-2",
  },
  {
    id: 11,
    image: `${projects_assets.OurProjects_img11}`,
    category: "Video Production",
    className: "col-span-1 row-span-1",
  },
  {
    id: 12,
    image: `${projects_assets.OurProjects_img3}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-1",
  },
  {
    id: 13,
    image: `${projects_assets.OurProjects_img5}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-2",
  },
  {
    id: 14,
    image: `${projects_assets.OurProjects_img7}`,
    category: "Audio Production",
    className: "col-span-2 row-span-1",
  },
  {
    id: 15,
    image: `${projects_assets.OurProjects_img2}`,
    category: "Video Production",
    className: "col-span-1 row-span-1",
  },
  {
    id: 16,
    image: `${projects_assets.OurProjects_img4}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-2",
  },
  {
    id: 17,
    image: `${projects_assets.OurProjects_img6}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-2",
  },
  {
    id: 18,
    image: `${projects_assets.OurProjects_img8}`,
    category: "Audio Production",
    className: "col-span-2 row-span-1",
  },
  {
    id: 19,
    image: `${projects_assets.OurProjects_img10}`,
    category: "Video Production",
    className: "col-span-1 row-span-1",
  },
  {
    id: 20,
    image: `${projects_assets.OurProjects_img1}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-2",
  },
  {
    id: 21,
    image: `${projects_assets.OurProjects_img3}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-1",
  },
  {
    id: 22,
    image: `${projects_assets.OurProjects_img5}`,
    category: "Audio Production",
    className: "col-span-2 row-span-1",
  },
  {
    id: 23,
    image: `${projects_assets.OurProjects_img7}`,
    category: "Video Production",
    className: "col-span-1 row-span-2",
  },
  {
    id: 24,
    image: `${projects_assets.OurProjects_img9}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-1",
  },
  {
    id: 25,
    image: `${projects_assets.OurProjects_img11}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-1",
  },
  {
    id: 26,
    image: `${projects_assets.OurProjects_img2}`,
    category: "Audio Production",
    className: "col-span-2 row-span-2",
  },
  {
    id: 27,
    image: `${projects_assets.OurProjects_img4}`,
    category: "Video Production",
    className: "col-span-1 row-span-2",
  },
  {
    id: 28,
    image: `${projects_assets.OurProjects_img6}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-1",
  },
  {
    id: 29,
    image: `${projects_assets.OurProjects_img8}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-1",
  },
  {
    id: 30,
    image: `${projects_assets.OurProjects_img10}`,
    category: "Audio Production",
    className: "col-span-2 row-span-2",
  },
  {
    id: 31,
    image: `${projects_assets.OurProjects_img1}`,
    category: "Video Production",
    className: "col-span-1 row-span-1",
  },
  {
    id: 32,
    image: `${projects_assets.OurProjects_img3}`,
    category: "Digital Marketing",
    className: "col-span-2 row-span-1",
  },
  {
    id: 33,
    image: `${projects_assets.OurProjects_img5}`,
    category: "Wedding shoot",
    className: "col-span-1 row-span-2",
  },
  {
    id: 34,
    image: `${projects_assets.OurProjects_img7}`,
    category: "Audio Production",
    className: "col-span-2 row-span-1",
  },
  {
    id: 35,
    image: `${projects_assets.OurProjects_img9}`,
    category: "Video Production",
    className: "col-span-1 row-span-1",
  },
]

export default function OurProjects() {
  const [activeCategory, setActiveCategory] = useState("Audio Production")

  return (
    <section className="bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          <span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
            Our projects
          </span>
        </h2>

        {/* Category Tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-all sm:px-6 sm:text-sm",
                activeCategory === category
                  ? "bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] text-white"
                  : "text-white hover:bg-white/10",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gradient Line */}
        <div className="mb-12 h-[2px] w-full bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a]"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-4 auto-rows-[150px] md:grid-cols-4 md:auto-rows-[200px]">
          {projects
            .filter((project) => activeCategory === project.category || activeCategory === "all")
            .map((project) => (
              <div key={project.id} className={cn("group relative overflow-hidden rounded-lg", project.className)}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`Project ${project.id}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

