import { Header, Footer } from '@/components';

export default function MentorshipPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Program 1
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mentorship <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Program</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect with experienced professionals who guide you through your educational journey and career development.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Mentorship Program?</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our Mentorship Program pairs students with industry professionals who provide guidance, support, and insights into their chosen career paths. This one-on-one relationship helps students navigate academic challenges, develop professional skills, and make informed career decisions.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Mentors share their experiences, offer advice, and help mentees build confidence and competence in their field of interest.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">One-on-One Guidance</h3>
                        <p className="text-gray-600 text-sm">Personalized mentorship tailored to your goals and interests.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Insights</h3>
                        <p className="text-gray-600 text-sm">Learn from professionals with real-world experience.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Career Development</h3>
                        <p className="text-gray-600 text-sm">Build skills and confidence for your future career.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Program Benefits</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
                  <p className="text-gray-600">
                    Receive advice and support from experienced professionals in your field of interest.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Network Building</h3>
                  <p className="text-gray-600">
                    Expand your professional network and create valuable connections for your future.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Skill Development</h3>
                  <p className="text-gray-600">
                    Learn practical skills and gain insights that complement your academic education.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Apply & Match</h3>
                    <p className="text-gray-600">
                      Submit your application and get matched with a mentor based on your interests and career goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Connect & Plan</h3>
                    <p className="text-gray-600">
                      Meet your mentor and establish goals, expectations, and a meeting schedule that works for both of you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Learn & Grow</h3>
                    <p className="text-gray-600">
                      Engage in regular mentoring sessions, work on your development goals, and build your professional skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tutorial Videos Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mentor Connect App Tutorials</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Get started with our Mentor Connect platform using these step-by-step tutorial videos. Learn how to navigate the app and make the most of your mentorship experience.
              </p>
              
              {/* Row 1: Video Left, Content Right */}
              <div className="py-12 border-b border-gray-200">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Video Column */}
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        poster="/mentorship tutorial/mentor connect tutorial for mentor.mp4?thumbnail"
                      >
                        <source src="/mentorship tutorial/mentor connect tutorial for mentor.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                      For Mentors
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Guide the Next Generation</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn how to set up your mentor profile, connect with mentees, and provide effective guidance through our platform. Our comprehensive tutorial covers everything from profile optimization to session management.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Create and optimize your mentor profile</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Connect with mentees based on shared interests</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Schedule and manage mentoring sessions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Row 2: Video Right, Content Left */}
              <div className="py-12 border-b border-gray-200">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Content Column */}
                  <div className="space-y-6 order-2 md:order-1">
                    <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                      For Mentees
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Find Your Perfect Mentor</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Discover how to find the right mentor, schedule sessions, and track your progress in the mentorship program. This tutorial helps you maximize your learning experience and achieve your career goals.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Search and filter mentors by expertise</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Request and schedule mentoring sessions</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Track progress and set development goals</span>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Video Column */}
                  <div className="relative order-1 md:order-2">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        poster="/mentorship tutorial/mentor connect tutorial for mentee.mp4?thumbnail"
                      >
                        <source src="/mentorship tutorial/mentor connect tutorial for mentee.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3: Video Left, Content Right */}
              <div className="py-12">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Video Column */}
                  <div className="relative">
                    <div className="aspect-video rounded-xl overflow-hidden shadow-lg relative">
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        poster="/mentorship tutorial/mentor connect tutorial for institution.mp4?thumbnail"
                      >
                        <source src="/mentorship tutorial/mentor connect tutorial for institution.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute top-4 left-4 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                      For Institutions
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Manage Your Mentorship Program</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Learn how educational institutions can manage their mentorship programs and track student progress through the platform. Streamline program administration and enhance student outcomes.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Set up and customize institutional accounts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Monitor student-mentor matches and progress</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-600">Generate reports and track program effectiveness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-6">
                  Need additional help? Contact our support team for personalized assistance.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
              <p className="text-gray-600 mb-8">
                Join our Mentorship Program and take the first step towards achieving your career goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  <a href="https://mentorship.weslux.lu" target="_blank" rel="noopener noreferrer">
                  Apply Now
                  </a>
                </button>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
