import { useState } from "react"
import { cn } from "@/lib/utils"
// import { projects_assets } from "@/assets/Projects/projects_assets"
import { wedding_assets } from "@/assets/Wedding Shoots/wedding_assets"
import { prewedding_assets } from "@/assets/Pre Wedding Shoots/prewedding_assets"

const categories = [
  "Wedding shoot",
  "Pre Wedding Shoot",
  "Video Production",
]

// Helper to convert asset objects to project entries
function assetsToProjects(
  assetsObj: Record<string, string>,
  category: string,
  startId = 1000
): { id: number; image: string; category: string; className: string }[] {
  return Object.entries(assetsObj).map(([, value], idx) => ({
    id: startId + idx,
    image: String(value),
    category,
    className: "col-span-1 row-span-1",
  }))
}

// Add this array for YouTube video links (user can fill in their links)
const youtubeVideos: string[] = [
  "https://youtu.be/aG8sIGbOolI?si=ZxQTET-LtYO49Rb_",
  "https://youtu.be/WKV2Yx5FO2M?si=W8cx71mVn9lmrCvD",
  "https://youtu.be/yO_GGER7fRg?si=svjvHkTPcRlSxK07",
  "https://youtu.be/QGaiUN0hDDM?si=hJgYhMPyl4DAhSav",
  "https://youtu.be/0ZC3NOi2RI8?si=T2-MvozrwjEbxZcs",
  "https://youtu.be/DpemXxKmUhA?si=-PsqpA06RXnAjZbd",
  "https://youtu.be/tqi_1Wk6W1w?si=t9DUozXKVw3h5bp-",
]

// Helper to extract YouTube video ID from URL
function getYoutubeId(url: string): string | null {
  // Handles both youtube.com and youtu.be links
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([\w-]{11})/);
  return match ? match[1] : null;
}

export default function OurProjects() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [videoModal, setVideoModal] = useState<{ open: boolean; videoId: string | null }>({ open: false, videoId: null });

  // Dynamically merge assets for Wedding and Pre Wedding categories
  let displayProjects: { id: number; image: string; category: string; className: string }[] = [];
  if (activeCategory === "Wedding shoot") {
    displayProjects = assetsToProjects(wedding_assets, "Wedding shoot", 10000);
  } else if (activeCategory === "Pre Wedding Shoot") {
    displayProjects = assetsToProjects(prewedding_assets, "Pre Wedding Shoot", 20000);
  }

  // For Video Production, show only YouTube videos
  let videoProductionItems: any[] = [];
  if (activeCategory === "Video Production") {
    videoProductionItems = youtubeVideos.map((url, idx) => ({
      id: 90000 + idx,
      image: getYoutubeId(url)
        ? `https://img.youtube.com/vi/${getYoutubeId(url)}/hqdefault.jpg`
        : "/placeholder.svg",
      category: "Video Production",
      className: "col-span-1 row-span-1",
      youtube: url,
    }));
  }

  return (
    <section className="bg-black px-2 sm:px-4 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-8 sm:mb-10 md:mb-12 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
            Our projects
          </span>
        </h2>
        {/* Category Tabs */}
        <div className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] text-white shadow-md"
                  : "text-white hover:bg-white/10 border border-white/10",
              )}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Gradient Line */}
        <div className="mb-8 sm:mb-12 h-[2px] w-full bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a]" />
        {/* Projects Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[140px] xs:auto-rows-[150px] sm:auto-rows-[180px] md:auto-rows-[200px]">
          {(activeCategory === "Video Production" ? videoProductionItems : displayProjects).map((project) => (
            <div
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-lg cursor-pointer border border-white/5",
                project.className
              )}
              onClick={() => {
                if ((project as any).youtube) {
                  const id = getYoutubeId((project as any).youtube);
                  if (id) setVideoModal({ open: true, videoId: id });
                }
              }}
            >
              <img
                src={project.image || "/placeholder.svg"}
                alt={`Project ${project.id}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {(project as any).youtube && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <svg width="48" height="48" viewBox="0 0 60 60" fill="none">
                    <circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7" />
                    <polygon points="25,20 45,30 25,40" fill="#ff2e7a" />
                  </svg>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
        {/* Video Modal */}
        {videoModal.open && videoModal.videoId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-2 sm:px-4">
            <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl aspect-video">
              <button
                className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-2 hover:bg-white focus:outline-none"
                onClick={() => setVideoModal({ open: false, videoId: null })}
                aria-label="Close video"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoModal.videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

