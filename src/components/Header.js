"use client";

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProgramOpen, setMobileProgramOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileProgramOpen(false);
    setMobilePartnersOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileProgramOpen(false);
    setMobilePartnersOpen(false);
  };

  const toggleMobileProgram = () => {
    setMobileProgramOpen(!mobileProgramOpen);
  };

  const toggleMobilePartners = () => {
    setMobilePartnersOpen(!mobilePartnersOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-lg border-b border-gray-200/80 shadow-sm">
      <div className="container mx-auto px-3 py-2.5">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2.5 group cursor-pointer">
            <div className="w-10 h-10 relative">
              <div className="w-full h-full relative bg-white rounded-lg p-1">
                <Image 
                  src="/image.png" 
                  alt="WESLUX Logo" 
                  fill
                  className="object-contain p-0.5"
                  sizes="40px"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                WES
              </h1>
              <p className="text-[10px] font-medium text-gray-500 leading-tight">WES Luxembourg for Education</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0.5">
            <Link href="/" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 group">
              <span className="relative">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            
            <Link href="/about" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 group">
              <span className="relative">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            
            {/* Program Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 flex items-center space-x-1">
                <span>Program</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white/95 backdrop-blur-lg border border-gray-200/80 shadow-2xl rounded-xl py-3 w-64 z-50 animate-fadeIn">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Program Details</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Explore our programs</p>
                </div>
                
                <div className="py-2">
                  <Link href="/programs/mentorship" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group/item">
                    <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <span>Mentorship Program</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                  <Link href="/programs/tech-connect" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group/item">
                    <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-green-600">2</span>
                    </div>
                    <span>Global Tech Connect</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                  <Link href="/programs/industrial-visit" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group/item">
                    <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-purple-600">3</span>
                    </div>
                    <span>Industrial Exposure Visit</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Partners Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 flex items-center space-x-1">
                <span>Partners</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white/95 backdrop-blur-lg border border-gray-200/80 shadow-2xl rounded-xl py-3 w-72 z-50 animate-fadeIn">
                <div className="px-4 py-2 border-b border-gray-100">
                  <h3 className="text-sm font-bold text-gray-900">Partner Categories</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Collaborate with us</p>
                </div>
                
                <div className="py-2">
                  <Link href="/partners/schools" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group/item">
                    <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <span>Schools & Educational Institutions</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                  <Link href="/partners/companies" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group/item">
                    <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-green-600">2</span>
                    </div>
                    <span>Companies</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                  <Link href="/partners/government" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group/item">
                    <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-purple-600">3</span>
                    </div>
                    <span>Government Organizations</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  
                  <Link href="/partners/cso" className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 group/item">
                    <div className="w-6 h-6 rounded-md bg-orange-100 flex items-center justify-center mr-3">
                      <span className="text-xs font-bold text-orange-600">4</span>
                    </div>
                    <span>Social & Civil Society Organizations</span>
                    <svg className="w-4 h-4 ml-auto opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/impact" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 group">
              <span className="relative">
                Our Impact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>

            <Link href="/news" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 group">
              <span className="relative">
                News & Events
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            
            <Link href="/volunteer" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 group">
              <span className="relative">
                Become a Volunteer
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </Link>
            
            <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-[10px] rounded-lg hover:bg-blue-50/80 transition-all duration-200 group">
              <span className="relative">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </span>
            </a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 whitespace-nowrap">
              Support Us
            </button>
            
            <button className="px-4 py-2 border-2 border-blue-500 text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300 whitespace-nowrap">
              Mentorship App
            </button>
          </div>
            
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMobileMenu}
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 animate-fadeIn">
            <div className="space-y-2">
              <Link href="/" onClick={closeMobileMenu} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Home</Link>
              <Link href="/about" onClick={closeMobileMenu} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">About Us</Link>
              
              {/* Mobile Program Dropdown */}
              <div>
                <button 
                  onClick={toggleMobileProgram}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <span>Program</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileProgramOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {mobileProgramOpen && (
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                    <Link href="/programs/mentorship" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                      Mentorship Program
                    </Link>
                    <Link href="/programs/tech-connect" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                      Global Tech Connect
                    </Link>
                    <Link href="/programs/industrial-visit" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                      Industrial Exposure Visit
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Partners Dropdown */}
              <div>
                <button 
                  onClick={toggleMobilePartners}
                  className="w-full flex items-center justify-between px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <span>Partners</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobilePartnersOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {mobilePartnersOpen && (
                  <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-100 pl-4">
                    <Link href="/partners/schools" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                      Schools & Educational Institutions
                    </Link>
                    <Link href="/partners/companies" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                      Companies
                    </Link>
                    <Link href="/partners/government" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                      Government Organizations
                    </Link>
                    <Link href="/partners/cso" onClick={closeMobileMenu} className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                      Social & Civil Society Organizations
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/impact" onClick={closeMobileMenu} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Our Impact</Link>
              <Link href="/news" onClick={closeMobileMenu} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">News & Events</Link>
              <Link href="/volunteer" onClick={closeMobileMenu} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Become a Volunteer</Link>
              <a href="#contact" onClick={closeMobileMenu} className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">Contact</a>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2 border-t border-gray-200 mt-4">
                <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-sm rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md">
                  Support Us
                </button>
                
                <button className="w-full px-4 py-2.5 border-2 border-blue-500 text-blue-600 font-medium text-sm rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300">
                  Mentorship App
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}