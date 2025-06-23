"use client"

import { Link } from "react-router-dom"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ name: string; href: string }>
  activeItem: string
  onItemClick: (href: string) => void
}

function MobileMenu({ isOpen, onClose, navItems, activeItem, onItemClick }: MobileMenuProps) {
  const handleItemClick = (href: string) => {
    onItemClick(href)
    onClose() // Close menu after clicking an item
  }

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={onClose} />}

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close button */}
          <div className="flex justify-end p-4">
            <button onClick={onClose} className="text-white hover:text-gray-300 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation items */}
          <nav className="flex-1 px-4">
            {navItems.map((item) => (
              <div key={item.name} className="mb-2">
                <Link
                  to={item.href}
                  onClick={() => handleItemClick(item.href)}
                  className={`block py-3 px-4 rounded-md text-lg font-medium transition-all duration-300 ease-in-out ${
                    activeItem === item.href
                      ? "bg-white text-gradient"
                      : "text-white hover:bg-white hover:text-gradient focus:bg-white focus:text-gradient"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
