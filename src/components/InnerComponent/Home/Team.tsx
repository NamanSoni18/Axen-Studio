import { about_assets } from '@/assets/About/about_assets'
import { home_assets } from '@/assets/home_assets'
import ChromaGrid from '@/components/reactBits/ChromaGrid/ChromaGrid'

// interface TeamMember {
//   name: string
//   role: string
//   image: string
// }

const items = [
  {
    image: `${home_assets.aadarsh_yadav}`,
    title: "Aadarsh Yadav",
    subtitle: "Founder",
    // handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    // url: "https://github.com/sarahjohnson"
  },
  {
    image: `${about_assets.OurTeam1}`,
    title: "Anurag Yadav",
    subtitle: "Photography Lead",
    // handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    // url: "https://github.com/sarahjohnson"
  },
  {
    image: `${home_assets.sachin_yadav}`,
    title: "Sachin Yadav",
    subtitle: "Manager",
    // handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    // url: "https://github.com/sarahjohnson"
  },
  {
    image: `${home_assets.shubh_saini}`,
    title: "Shubh Saini",
    subtitle: "Editor",
    // handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    // url: "https://github.com/sarahjohnson"
  },
];

// const teamMembers: TeamMember[] = [
//   {
//     name: 'Aadarsh Yadav',
//     role: 'Founder',
//     image: `${home_assets.aadarsh_yadav}`
//   },
//   {
//     name: 'Anurag Yadav',
//     role: 'Photography Lead',
//     image: `${about_assets.OurTeam1}`
//   },
//   {
//     name: 'Sachin Yadav',
//     role: 'Manager',
//     image: `${home_assets.sachin_yadav}`
//   },
//   {
//     name: 'Shubh Saini',
//     role: 'Editor',
//     image: `${home_assets.shubh_saini}`
//   },
// ]

export default function Team() {
  // const [activeIndex, setActiveIndex] = useState<number | null>(null)
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect()
  //   setMousePos({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top
  //   })
  // }

  return (
    <section className="bg-black px-4 py-16">
      <div className="mx-auto max-w-full">
        <h2 className="mb-16 text-center text-5xl font-bold">
          <span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
            Our Team
          </span>
        </h2>

        <div className="relative py-4">
          <ChromaGrid
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

      </div>
    </section>
  )
}
