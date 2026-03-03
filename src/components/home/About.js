import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why <span className="text-green-600">Luxembourg?</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Luxembourg offers a unique ecosystem for education and career development, 
                making it the perfect hub for our mission.
              </p>
              
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-1.13.402-2.165 1.07-2.964.668-.8 1.6-1.36 2.93-1.36h.5M7 20v2a2 2 0 002 2h6a2 2 0 002-2v-2m-8-8a3 3 0 100-6 3 3 0 000 6z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Diverse International Environment</h4>
                      <p className="text-gray-600">Luxembourg's education system and workforce bring together diverse cultures, languages, and innovative ideas.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m4.343-5.657l-.707-.707m12.728 0l-.707.707M5.636 5.636l-.707.707m0 12.728l.707.707m12.728 0l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Need for Career Guidance</h4>
                      <p className="text-gray-600">Many students face uncertainty in making career choices. We provide the guidance needed for informed decisions.</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14-8H3m4-4H3m4 8H3m4-4H3m4 4H3m4-8H3m4-4H3m4 4H3m4 4H3m4-8H3m4 4H3m4 4H3m4-8H3m4 4H3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">Strong Educational Ecosystem</h4>
                      <p className="text-gray-600">Schools, universities, and global companies concentrated in a small, interconnected ecosystem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-3xl p-8 shadow-xl">
              {/* Header Section */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-3xl flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-transform duration-300 p-3">
                  <div className="w-full h-full relative">
                    <Image 
                      src="/image.png" 
                      alt="WESLUX Logo" 
                      width={104}
                      height={104}
                      className="object-contain w-full h-full"
                      priority
                      quality={100}
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Education Excellence in Luxembourg</h3>
                <p className="text-gray-600 text-lg">A vibrant hub connecting students with global opportunities</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-2">50+</div>
                  <div className="text-sm font-medium text-gray-600">Educational Institutions</div>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mb-2">100+</div>
                  <div className="text-sm font-medium text-gray-600">Global Companies</div>
                </div>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-green-600 mb-1">5,000+</div>
                  <div className="text-xs text-gray-600">Students Reached</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                  <div className="text-xs text-gray-600">Partner Schools</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="text-2xl font-bold text-purple-600 mb-1">50+</div>
                  <div className="text-xs text-gray-600">Company Partners</div>
                </div>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 blur-2xl"></div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}