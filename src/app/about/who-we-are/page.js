import { Header, Footer } from '@/components';

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">We Are</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A diverse community of educators, professionals, and volunteers dedicated to transforming education.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Identity</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    WES Luxembourg for Education is a purpose-driven organization committed to transforming the educational landscape by connecting students with real-world opportunities and experienced mentors from various industries.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We are a diverse team of educators, industry professionals, volunteers, and partners who share a common goal: to empower the next generation of leaders, innovators, and changemakers.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our organization serves as a bridge between academic institutions and the professional world, ensuring that students gain practical skills, industry insights, and valuable connections that will shape their future careers.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Educational Focus</h3>
                        <p className="text-gray-600 text-sm">
                          We prioritize quality education and skill development for students at all levels.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Global Network</h3>
                        <p className="text-gray-600 text-sm">
                          We connect students with professionals and opportunities worldwide.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Community Driven</h3>
                        <p className="text-gray-600 text-sm">
                          Our success is built on strong partnerships and community engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our People */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our People</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Educators</h3>
                  <p className="text-gray-600">
                    Experienced teachers and academic professionals who understand student needs and learning pathways.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Professionals</h3>
                  <p className="text-gray-600">
                    Experts from various sectors who provide mentorship, insights, and real-world perspectives.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteers</h3>
                  <p className="text-gray-600">
                    Passionate individuals who dedicate their time and expertise to support student development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  At WES Luxembourg for Education, we believe in a holistic approach to student development. We combine academic excellence with practical experience, mentorship with real-world exposure, and local connections with global opportunities.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our approach is built on three pillars: <strong>Connect</strong> (building meaningful relationships), <strong>Empower</strong> (providing tools and opportunities), and <strong>Transform</strong> (creating lasting impact).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We work collaboratively with schools, companies, government organizations, and civil society partners to create a comprehensive ecosystem that supports student growth and aligns with the United Nations Sustainable Development Goals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Whether you're an educator, industry professional, student, or supporter, there's a place for you in our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/join-us/volunteer" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Become a Volunteer
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}