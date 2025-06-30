import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Instagram } from "lucide-react"

const reviews = [
	{
		name: 'Divesh Davda',
		title: 'Client - Wedding',
		content: "We Enjoyed the shoot with You Aadarsh Sir, I wish to god every customer have Photographer Like You & Your Team Specially Cinemetographer is Too much Good for Couple",
		instagram: "https://www.instagram.com/axenstudio"
	},
	{
		name: 'Shubham Kasaundhan',
		title: 'Client - Pre Wedding',
		content: "We are really lucky we have found you. You are an amazing photographer and wonderful person. Thank you so much for being part of our pre - wedding and capturing these precious moments that we will never forget. We must say you have made everything so easy for us - before, during and after the pre - wedding.",
		instagram: "https://www.instagram.com/axenstudio"
	},
	{
		name: 'Sapna',
		title: 'Client - Wedding',
		content: "They provide a very good service in our budget... I had a very good experience .. Definitely go ahead with them",
		instagram: "https://www.instagram.com/axenstudio"
	},
	{
		name: 'Saurabh Digha',
		title: 'Client - Pre Wedding',
		content: "Words cannot express how grateful we are for the amazing pre-wedding photoshoot experience! From start to finish, the entire process was smooth and enjoyable.",
		instagram: "https://www.instagram.com/axenstudio"
	},
];

export default function PeopleReview() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const reviewsPerPage = 2
	const totalPages = Math.ceil(reviews.length / reviewsPerPage)

	const nextReviews = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex + reviewsPerPage >= reviews.length ? 0 : prevIndex + reviewsPerPage
		)
	}

	const prevReviews = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage
		)
	}

	const currentReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage)

	return (
		<section className="bg-black px-2 xs:px-4 py-10 sm:px-6 lg:px-8">
			<div className="mx-auto max-w-6xl w-full">
				{/* Header with Navigation */}
				<div className="mb-8 sm:mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
					<h2 className="text-center text-2xl xs:text-3xl sm:text-4xl font-bold sm:text-5xl lg:text-left">
						<span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
							People Reviews
						</span>
					</h2>
					{/* Navigation Arrows */}
					<div className="flex items-center gap-2 sm:gap-4">
						<button
							onClick={prevReviews}
							className="group p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] hover:shadow-lg transition-all duration-300 hover:scale-110"
						>
							<svg 
								className="w-5 h-5 sm:w-6 sm:h-6 text-white transform rotate-180 group-hover:scale-110 transition-transform" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
						<span className="text-white/70 text-xs sm:text-sm">
							{Math.floor(currentIndex / reviewsPerPage) + 1} / {totalPages}
						</span>
						<button
							onClick={nextReviews}
							className="group p-2 sm:p-3 rounded-full bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] hover:shadow-lg transition-all duration-300 hover:scale-110"
						>
							<svg 
								className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" 
								fill="none" 
								stroke="currentColor" 
								viewBox="0 0 24 24"
							>
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>

				{/* Reviews Container */}
				<div className="relative overflow-x-hidden">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentIndex}
							initial={{ opacity: 0, x: 300 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -300 }}
							transition={{ duration: 0.5, ease: "easeInOut" }}
							className="grid gap-6 xs:gap-8 grid-cols-1 md:grid-cols-2"
						>
							{currentReviews.map((review, index) => (
								<motion.div
									key={currentIndex + index}
									initial={{ opacity: 0, y: 50 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.1 }}
									className="overflow-hidden rounded-xl bg-white p-4 xs:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
								>
									<div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between rounded-xl bg-black px-3 xs:px-4 py-3 xs:py-4 gap-3 xs:gap-4">
										<div className="flex items-center gap-3 xs:gap-4">
											<div className="h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#ff8a00] to-[#800080] flex-shrink-0">
												<span className="text-xl xs:text-2xl sm:text-3xl font-bold text-white">
													{review.name.split(' ').map(n => n[0]).join('')}
												</span>
											</div>
											<div className="min-w-0 flex-1">
												<h3 className="text-lg xs:text-xl sm:text-2xl font-bold">
													<span className="bg-gradient-to-r from-[#ff8a00] to-[#800080] bg-clip-text text-transparent">
														{review.name}
													</span>
												</h3>
												<p className="text-xs xs:text-sm sm:text-lg text-white/70 truncate">{review.title}</p>
											</div>
										</div>
										<a
											href={review.instagram}
											target="_blank"
											rel="noopener noreferrer"
											className="group rounded-full bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] p-1.5 xs:p-2 transition-all duration-300 hover:scale-110 hover:shadow-lg self-center sm:self-auto flex-shrink-0"
											aria-label="Follow on Instagram"
										>
											<Instagram className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 text-white group-hover:scale-110 transition-transform" />
										</a>
									</div>
									<p className="text-black text-xs xs:text-sm sm:text-base leading-relaxed">{review.content}</p>
								</motion.div>
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Pagination Dots */}
				<div className="flex justify-center mt-6 xs:mt-8 gap-1.5 xs:gap-2">
					{Array.from({ length: totalPages }, (_, i) => (
						<button
							key={i}
							onClick={() => setCurrentIndex(i * reviewsPerPage)}
							className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-all duration-300 ${
								Math.floor(currentIndex / reviewsPerPage) === i
									? 'bg-gradient-to-r from-[#ff8a00] to-[#ff007a] scale-125'
									: 'bg-white/30 hover:bg-white/50'
							}`}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
