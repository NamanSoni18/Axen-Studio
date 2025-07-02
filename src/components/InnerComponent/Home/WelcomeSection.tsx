import { Youtube, Instagram, Facebook } from 'lucide-react';
import { home_assets } from '@/assets/home_assets';
import { Link } from 'react-router-dom';

const WelcomeSection = () => {
  return (
    <div>
      <section className="flex min-h-screen items-center justify-center bg-black px-4 py-4">
        <div className="max-w-4xl text-center">
          <h1 className="mb-8 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-[#ff8a00] via-[#ff2e7a] to-[#ff007a] bg-clip-text text-transparent">
              Axen Studios{' '}
            </span>
          </h1>

          <p className="mb-4 text-center text-lg leading-relaxed text-white/90 sm:text-lg">
            Axen Studio brings over seven years of expertise in audio production, video
            creation, wedding shoots, and digital marketing. We craft stunning
            visuals, timeless memories, and unique designs while helping grow your
            online presence. With a focus on quality, creativity, and customer
            satisfaction, we transform your vision into reality. Let's create
            something extraordinary together!
          </p>

          <div className="text-right">
            <span className="text-lg font-medium">
              Founder{' '}
              <span className="bg-gradient-to-r from-[#ff8a00] to-[#800080] bg-clip-text text-transparent font-bold">
                Aadarsh Yadav
              </span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <Link
              to="https://www.youtube.com/@axenstudio"
              className="rounded-full bg-white p-3 transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="w-6 h-6 text-red-600" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link
              to="https://www.instagram.com/axenstudio"
              className="rounded-full bg-white p-3 transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-pink-500" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=100093608952540"
              className="rounded-full bg-white p-3 transition-transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="w-6 h-6 text-blue-600" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>

          {/* Image Section */}
          <div className="mt-8">
            <img
              src={home_assets.section2}
              alt="Featured Axen Studio"
              loading="lazy"
              className="mx-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeSection;
