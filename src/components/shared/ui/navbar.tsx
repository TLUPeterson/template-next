'use client';
import { useState } from 'react';
import { AlignJustify, X } from 'lucide-react';
import { NavItem } from './navItem';
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavItem href="/">
              <Image src="/static/images/githubLogo.svg" alt="Logo" width={40} height={40} />
            </NavItem>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavItem href="/">
                  Home
                </NavItem>
                <NavItem href="/about">
                  About
                </NavItem>
                <NavItem href="/services">
                  Services
                </NavItem>
                <NavItem href="/contact">
                  Contact
                </NavItem>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <AlignJustify className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavItem href="/">
            Home
          </NavItem>
          <NavItem href="/about">
            About
          </NavItem>
          <NavItem href="/services">
            Services
          </NavItem>
          <NavItem href="/contact">
            Contact
          </NavItem>
        </div>
      </div>
    </nav>
  );
}
