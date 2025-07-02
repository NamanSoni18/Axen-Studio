import { Youtube, Instagram, Facebook, Mail } from "lucide-react";
import { footer_assets } from "@/assets/Footer/footer_assets";
import { Link } from "react-router-dom";

const teamMembers = [
  "Aadarsh Yadav",
  "Anurag Yadav",
  "Sachin Yadav",
  "Shubh Saini",
];

const aboutLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Services", href: "/services" },
  { text: "Projects", href: "/projects" },
  { text: "Contact Us", href: "/connect" },
];

const socialLinks = [
  { icon: Youtube, href: "https://www.youtube.com/@teamaxenstudio", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/axenstudio", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100093608952540", label: "Facebook" },
  { icon: Mail, href: "mailto:axenstudioteam@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative mb-[20px] sm:mb-[40px]">
      {/* Top Section with Image and Lines */}
      <div className="flex items-center w-full py-4 sm:py-6 px-4">
        <div className="flex-1 h-[1px] bg-gray-300" />
        <div className="mx-3 sm:mx-6">
          <img
            src={footer_assets.footer_img1}
            alt="Axen Studios Logo"
            loading="lazy"
            className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-contain animate-spin [animation-duration:10s]"
          />
        </div>
        <div className="flex-1 h-[1px] bg-gray-300" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Team Members */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Team Members
            </h3>
            <ul className="space-y-2">
              {teamMembers.map((member, index) => (
                <li
                  key={index}
                  className={`text-gray-400 text-sm sm:text-base ${
                    index === teamMembers.length - 1
                      ? "text-xs sm:text-sm mt-3 sm:mt-4"
                      : ""
                  }`}
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center text-center order-3 sm:order-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Contact Us
            </h3>

            {/* Social Icons */}
            <div className="flex gap-4 sm:gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  to={href}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="text-center sm:text-left lg:text-right order-2 sm:order-3">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Navigation
            </h3>
            <ul className="space-y-2">
              {aboutLinks.map(({ text, href }) => (
                <li key={text}>
                  <Link
                    to={href}
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base inline-block hover:bg-white/10 px-2 py-1 rounded"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-300" />
    </footer>
  );
}
