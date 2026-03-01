import Link from 'next/link';

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partner <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">With Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our network of partners dedicated to transforming education and creating opportunities for students.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link href="/partners/schools" className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Schools</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Educational institutions partnership for student mentorship programs and career guidance.
              </p>
              <div className="mt-6 text-blue-600 font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/partners/companies" className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Companies</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Industry collaboration, employee mentorship programs, and talent development initiatives.
              </p>
              <div className="mt-6 text-green-600 font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/partners/government" className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Governments</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Public sector and government organization partnerships for community development and education.
              </p>
              <div className="mt-6 text-purple-600 font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/partners/cso" className="group bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all duration-300 cursor-pointer">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">For Civil Society Organizations</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Non-profit and community organization collaborations for social impact and educational outreach.
              </p>
              <div className="mt-6 text-orange-600 font-semibold text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Learn more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're an educational institution, corporation, government agency, or non-profit organization, 
            we have partnership opportunities that align with your goals and create meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us to Partner
            </a>
            <Link 
              href="/support" 
              className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}