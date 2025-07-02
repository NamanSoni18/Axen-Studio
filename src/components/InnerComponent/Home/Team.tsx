import { about_assets } from '@/assets/About/about_assets'
import { home_assets } from '@/assets/home_assets'
import { useState } from 'react'

interface TeamMember {
  name: string
  role: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Aadarsh Yadav',
    role: 'Founder',
    image: `${home_assets.aadarsh_yadav}`
  },
  {
    name: 'Anurag Yadav',
    role: 'Photography Lead',
    image: `${about_assets.OurTeam1}`
  },
  {
    name: 'Sachin Yadav',
    role: 'Manager',
    image: `${home_assets.sachin_yadav}`
  },
  {
    name: 'Shubh Saini',
    role: 'Editor',
    image: `${home_assets.shubh_saini}`
  },
]

export default function Team() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-full">
        <h2 className="mb-16 text-center text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
            Our Team
          </span>
        </h2>

        <div
          className="relative z-10"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setActiveIndex(null)}
        >
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative border-b border-white/10 cursor-pointer transition-all duration-300"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Hover effect applied to the entire div */}
              <div
                className="group-hover:bg-white group-hover:text-black group-hover:font-bold transition-all duration-300 p-4"
              >
                <h3 className="text-4xl font-bold text-white group-hover:text-black group-hover:bg-white group-hover:font-bold transition-colors duration-300">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}

          {/* Popup */}
          <div
            className={`pointer-events-none absolute w-72 transition-all duration-300 ${activeIndex !== null ? 'opacity-100' : 'opacity-0'}`}
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            {activeIndex !== null && (
              <div className="overflow-hidden rounded-lg bg-white/5 backdrop-blur-sm">
                <img
                  src={teamMembers[activeIndex].image}
                  alt={teamMembers[activeIndex].name}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <div className="">
                  <h4 className="mb-1 text-3xl font-medium text-white">
                    {teamMembers[activeIndex].name}
                  </h4>
                  <p className="text-xl text-white/70">
                    {teamMembers[activeIndex].role}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
