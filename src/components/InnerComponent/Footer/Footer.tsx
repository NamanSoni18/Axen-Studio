import { Youtube, Instagram, Facebook, Camera } from "lucide-react";
import { footer_assets } from "@/assets/Footer/footer_assets";
import { Link } from "react-router-dom";

const teamMembers = [
  "Kumar Sanu",
  "Aashish Sharma",
  "Raju Kumar Das",
  "Aditya Kumar Sharmna",
  "Fermi Court Carlsbad, CA 92008",
];

const aboutLinks = [
  { text: "Our Story", href: "#" },
  { text: "Music App", href: "#" },
  { text: "Outlet", href: "#" },
  { text: "Our Partners", href: "#" },
];

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Camera, href: "#", label: "Snapchat" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative mb-[40px]">
      {/* Top Section with Image and Lines */}
      <div className="flex items-center w-full py-6">
        <div className="flex-1 h-[1px] bg-gray-300" />
        <div className="mx-6">
          <img
            src={footer_assets.footer_img1}
            alt="Axen Studios Logo"
            className="w-32 h-32  object-contain animate-spin [animation-duration:10s]"
          />
        </div>
        <div className="flex-1 h-[1px] bg-gray-300" />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Team Members */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Team Members</h3>
            <ul className="space-y-2">
              {teamMembers.map((member, index) => (
                <li
                  key={index}
                  className={`text-gray-400 ${
                    index === teamMembers.length - 1 ? "text-sm mt-4" : ""
                  }`}
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

            {/* Social Icons */}
            <div className="flex gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  to={href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </Link>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div className="md:text-right">
            <h3 className="text-xl font-semibold mb-6">About Us</h3>
            <ul className="space-y-2">
              {aboutLinks.map(({ text, href }) => (
                <li key={text}>
                  <Link
                    to={href}
                    className="text-gray-400 hover:text-white transition-colors"
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
