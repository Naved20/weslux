import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/image.png" 
                  alt="WESLUX Logo" 
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">WESLUX</h1>
                <p className="text-xs text-gray-600">Mentorship for Education</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About Us</a>
              <a href="#program" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Program</a>
              <div className="relative group">
                <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center">
                  Our Partners and With Us
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block hover:block bg-white shadow-lg rounded-lg mt-2 py-2 w-64 z-50">
                  <a href="#schools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">1. For Schools</a>
                  <a href="#companies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">2. For Companies</a>
                  <a href="#government" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">3. For Government & Social Organizations</a>
                  <a href="#cso" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">4. Civil Society Organizations</a>
                  <a href="#corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">5. Corporate Partners</a>
                  <a href="#education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600">6. Educational Institutions</a>
                </div>
              </div>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            </nav>
            
            <div className="flex space-x-3">
              <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Support Us
              </button>
              <button className="px-5 py-2.5 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-colors">
                Mentorship App
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Mentorship • Education • Community
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              We create paths where talent meets opportunity.
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              WESLUX (WES Luxembourg for Education) is a non-profit association based in Luxembourg, dedicated to creating opportunities for personal and professional growth by developing a Mentorship Program that bridges education and professional reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg">
                Apply as a Student
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium text-lg">
                Become a Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision & Mission</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">The Mentorship Program</h3>
                  <p className="text-gray-700">
                    We search, select, and introduce children, students, and young professionals in Luxembourg to experienced mentors who guide and prepare them for their academic, professional, and career paths.
                  </p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-indigo-700 mb-2">The Mentor's Role</h3>
                  <p className="text-gray-700">
                    Mentors help mentees discover interests, identify potential career opportunities, develop study plans, and work toward their goals.
                  </p>
                </div>
                <div className="bg-purple-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Our Vision</h3>
                  <p className="text-gray-700">
                    To build a supportive network that helps the next generation learn, grow, and thrive in Luxembourg.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Luxembourg?</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Diverse International Environment</h4>
                    <p className="text-gray-600 text-sm">Luxembourg's education system and workforce bring together cultures, languages, and ideas.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Need for Career Guidance</h4>
                    <p className="text-gray-600 text-sm">Many students face uncertainty in making choices beyond academics.</p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h4 className="font-semibold text-gray-900">Strong Ecosystem</h4>
                    <p className="text-gray-600 text-sm">Schools, universities, and global companies concentrated in a small country.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Mentorship Program Details</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Schools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• All details of organization</li>
                <li>• Two programs small form</li>
                <li>• Financial details</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Companies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Industrial exposure visit</li>
                <li>• For any query</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Government & Organizations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Mentorship program</li>
                <li>• Civil society organization</li>
                <li>• All details about mentorship program</li>
              </ul>
            </div>
          </div>

          {/* Mentorship Types */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Anchor Mentorship</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Long term for 10 months</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>About 5 meetings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Focused on special remedial support</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Special Mentorship</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Short term for 3 months</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>About 20 meetings, twice a month</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm">✓</span>
                  </div>
                  <span>Focused on career development guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How the Mentorship Program Works</h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Start & Profiles</h3>
              <p className="text-sm text-gray-600">Registration and profile creation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Apply & Review</h3>
              <p className="text-sm text-gray-600">Application and approval process</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Journey</h3>
              <p className="text-sm text-gray-600">Meetings and progress tracking</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Evaluate</h3>
              <p className="text-sm text-gray-600">Feedback and program assessment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Partners and With Us</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Schools</h3>
              </div>
              <p className="text-gray-600">Educational institutions partnership for student mentorship programs</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Companies</h3>
              </div>
              <p className="text-gray-600">Industry collaboration and employee mentorship programs</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">For Government & Social Organizations</h3>
              </div>
              <p className="text-gray-600">Public sector and social organization partnerships</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Civil Society Organizations</h3>
              </div>
              <p className="text-gray-600">Non-profit and community organization collaborations</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-red-600 font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Corporate Partners</h3>
              </div>
              <p className="text-gray-600">Business sector partnerships for mentorship initiatives</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-indigo-600 font-bold">6</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Educational Institutions</h3>
              </div>
              <p className="text-gray-600">Universities, colleges, and training centers collaboration</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">Partner Logos</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-24">
                  <div className="text-center">
                    <div className="text-gray-400 font-bold">Partner {i}</div>
                    <div className="text-xs text-gray-500 mt-1">Logo</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SDG Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Supporting Sustainable Development Goals</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-3">Quality Education</h3>
              <p className="text-blue-100">Ensuring inclusive and equitable quality education</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-4">8</div>
              <h3 className="text-xl font-bold mb-3">Decent Work</h3>
              <p className="text-blue-100">Promoting sustained economic growth and productive employment</p>
            </div>
            
            <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
              <div className="text-5xl font-bold mb-4">10</div>
              <h3 className="text-xl font-bold mb-3">Reduced Inequalities</h3>
              <p className="text-blue-100">Reducing inequality within and among countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your support changes a learner's life</h2>
            <p className="text-xl text-gray-600 mb-10">
              Partner, volunteer, or contribute — every action strengthens mentorship and education access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                Support WES Lux
              </button>
              <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
                Download Flow Chart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 relative">
                  <Image 
                    src="/image.png" 
                    alt="WESLUX Logo" 
                    fill
                    className="object-contain"
                    sizes="40px"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">WESLUX</h3>
                  <p className="text-sm text-gray-400">Mentorship for Education</p>
                </div>
              </div>
              <p className="text-gray-400">
                Registered Office: 18 rue de Nicolas Meyers, Bascharage, Luxembourg 4918
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Information</h4>
              <p className="text-gray-400 mb-2">Email: weslux4edu@gmail.com</p>
              <p className="text-gray-400">Mentorship App: mentorship.weslux.lu</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">Mentorship App</a>
                <a href="#" className="block text-gray-400 hover:text-white">Support Our Work</a>
                <a href="#" className="block text-gray-400 hover:text-white">Partner With Us</a>
                <a href="#" className="block text-gray-400 hover:text-white">Privacy Policy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 WESLUX - WES Luxembourg for Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}