import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                News & <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Events</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay updated with the latest news, upcoming events, and success stories from WES Luxembourg for Education.
              </p>
            </div>
          </div>
        </section>

        {/* Featured News */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured News</h2>
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto bg-gradient-to-br from-purple-400 to-purple-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-24 h-24 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="p-8 md:p-12">
                    <div className="inline-block px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                      Latest News
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      WES Luxembourg Reaches 5,000 Students Milestone
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We're thrilled to announce that our programs have now reached over 5,000 students across 25 countries, marking a significant milestone in our mission to bridge education and industry.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-6">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      February 15, 2026
                    </div>
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Recent News</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold mb-3">
                      Partnership
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      New Partnership with Tech Giants
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      WES Luxembourg announces strategic partnerships with leading technology companies to expand mentorship opportunities.
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      February 10, 2026
                    </div>
                    <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
                      Read More →
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold mb-3">
                      Achievement
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Award for Educational Excellence
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Our organization receives recognition for outstanding contribution to bridging education and industry gaps.
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      February 5, 2026
                    </div>
                    <button className="text-green-600 font-semibold text-sm hover:text-green-700">
                      Read More →
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold mb-3">
                      Expansion
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Expanding to New Countries
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      WES Luxembourg announces expansion plans to reach students in 10 additional countries across Asia and Africa.
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      January 28, 2026
                    </div>
                    <button className="text-orange-600 font-semibold text-sm hover:text-orange-700">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Upcoming Events</h2>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                          <div className="text-2xl font-bold">15</div>
                          <div className="text-xs">MAR</div>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Annual Mentorship Summit 2026</h3>
                          <p className="text-sm text-gray-600">Virtual Event • 10:00 AM - 4:00 PM CET</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Join mentors, students, and partners for a day of networking, workshops, and inspiring talks about the future of education and mentorship.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">Mentorship</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">Networking</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">Virtual</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                      Register Now
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-center">
                          <div className="text-2xl font-bold">22</div>
                          <div className="text-xs">MAR</div>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Global Tech Connect Webinar</h3>
                          <p className="text-sm text-gray-600">Online • 2:00 PM - 3:30 PM CET</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Discover how students from different countries collaborate on tech projects and build global networks through our Global Tech Connect program.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">Technology</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">Global</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">Webinar</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 whitespace-nowrap">
                      Register Now
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-purple-600 text-white px-4 py-2 rounded-lg text-center">
                          <div className="text-2xl font-bold">05</div>
                          <div className="text-xs">APR</div>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Industrial Visit: Tech Hub Tour</h3>
                          <p className="text-sm text-gray-600">Luxembourg City • 9:00 AM - 5:00 PM</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Students will visit leading tech companies in Luxembourg to experience workplace culture and learn about career opportunities in the tech industry.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">Industrial Visit</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">In-Person</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">Limited Spots</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 whitespace-nowrap">
                      Register Now
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-600">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="bg-orange-600 text-white px-4 py-2 rounded-lg text-center">
                          <div className="text-2xl font-bold">18</div>
                          <div className="text-xs">APR</div>
                        </div>
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Partner Appreciation Day</h3>
                          <p className="text-sm text-gray-600">Hybrid Event • 3:00 PM - 6:00 PM CET</p>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">
                        Celebrating our partners and their contributions to student success. Join us for networking, recognition awards, and future collaboration discussions.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">Partnership</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">Networking</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">Hybrid</span>
                      </div>
                    </div>
                    <button className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 whitespace-nowrap">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated (add here past events--)</h2>
                <p className="text-gray-600 mb-8">
                  Subscribe to our newsletter to receive the latest news, event announcements, and success stories directly in your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
