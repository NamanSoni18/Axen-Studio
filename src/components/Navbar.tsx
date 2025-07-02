import { useState, useEffect } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import MobileMenu from "./mobile-menu"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/connect" },
  { name: "Services", href: "/services" },
]

function Navbar() {
  const location = useLocation()
  const [activeItem, setActiveItem] = useState(location.pathname)

  // Update active item when location changes
  useEffect(() => {
    setActiveItem(location.pathname)
  }, [location.pathname])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleClick = (href: string) => {
    setActiveItem(href)
    // Scroll to top when navigating
    window.scrollTo(0, 0)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

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

            {/* Right side navigation links - Desktop */}
            <div className="hidden sm:flex sm:space-x-4">
              {navItems.map((item) => (
                <span
                  key={item.name}
                  className={`py-2 px-3 mx-2 rounded-md ${
                    activeItem === item.href ? "bg-white" : "hover:bg-white focus:bg-white"
                  }`}
                >
                  <Link
                    to={item.href}
                    onClick={() => handleClick(item.href)}
                    className={`text-lg font-medium transition-all duration-300 ease-in-out ${
                      activeItem === item.href ? "text-gradient" : "text-white hover:text-gradient focus:text-gradient"
                    }`}
                  >
                    {item.name}
                  </Link>
                </span>
              ))}
            </div>

            {/* Hamburger menu button - Mobile */}
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
        activeItem={activeItem}
        onItemClick={handleClick}
      />

      {/* This is where child routes will render */}
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Navbar
