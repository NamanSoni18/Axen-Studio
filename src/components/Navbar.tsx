import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Connect Us", href: "/connect" },
  { name: "Services", href: "/services" },
];

function Navbar() {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleClick = (href: string) => {
    setActiveItem(href);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black shadow-md z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-lg font-bold">
                Axen Studio
              </Link>
            </div>

            {/* Right side navigation links */}
            <div className="hidden sm:flex sm:space-x-4">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  className={`py-2 px-3 mx-2 rounded-md ${
                    activeItem === item.href
                      ? "bg-white"
                      : "hover:bg-white focus:bg-white"
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`text-lg font-medium transition-all duration-300 ease-in-out ${
                      activeItem === item.href
                        ? "text-gradient"
                        : "text-white hover:text-gradient focus:text-gradient"
                    }`}
                  >
                    {item.name}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* This is where child routes will render */}
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;
