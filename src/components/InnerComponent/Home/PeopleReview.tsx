import { home_assets } from "@/assets/home_assets"

const reviews = [
  {
    name: 'Nicolas Cage',
    title: 'CEO Starbucks',
    image: `${home_assets.section6_review}`,
    content: "The editing was seamless, with perfect transitions and a great choice of music that matched the mood of our day. They truly went above and beyond to ensure our video was perfect. If you're looking for top-notch wedding video production, look no further than Axen Studios. Highly recommended!"
  },
  {
    name: 'Nicolas Cage',
    title: 'CEO Starbucks',
    image: `${home_assets.section6_review}`,
    content: "The editing was seamless, with perfect transitions and a great choice of music that matched the mood of our day. They truly went above and beyond to ensure our video was perfect. If you're looking for top-notch wedding video production, look no further than Axen Studios. Highly recommended!"
  },
];

export default function PeopleReview() {
  return (
    <section className="bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          <span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
            People Reviews
          </span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div key={index} className="overflow-hidden rounded-md bg-white p-6">
              <div className="mb-2 flex items-center justify-between rounded-md bg-black px-4">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">
                      <span className="bg-gradient-to-r from-[#ff8a00] to-[#800080] bg-clip-text text-transparent">
                        {review.name}
                      </span>
                    </h3>
                    <p className="text-lg text-white/70">{review.title}</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="rounded-full bg-white p-2 transition-transform hover:scale-110"
                >
                  <img src={home_assets.instagram} alt="No Image" className="h-7 w-7" />
                  {/* <Instagram className="h-5 w-5 text-black" /> */}
                </a>
              </div>
              <p className="text-black ">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

