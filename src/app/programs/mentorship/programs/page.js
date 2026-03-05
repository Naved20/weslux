import { Header, Footer } from '@/components';
import Link from 'next/link';

export default function MentorshipProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                Mentorship Programs
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Mentorship <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Program Types</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Explore our Special and Anchor mentorship programs specifically designed for high school and college students, offering tailored support for academic challenges, college preparation, and career exploration.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Hub Navigation */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Link href="/programs/mentorship" className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Mentorship Hub
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose the Right Mentorship Program</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our mentorship programs are specifically designed for students at different academic stages. Whether you need short-term help with specific subjects or long-term guidance for college preparation and career planning, we have a program tailored to your educational journey.
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                Select based on your academic needs and timeline
              </div>
            </div>
          </div>
        </section>

        {/* Mentorship Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mentorship Types Explained</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Special Mentorship */}
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 border border-blue-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Special Mentorship</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Definition</h5>
                      <p className="text-gray-600 text-sm">
                        A short-term, focused mentorship program designed specifically for high school and college students to address immediate academic challenges, subject-specific difficulties, or career exploration within a limited timeframe.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Duration</h5>
                      <p className="text-gray-600 text-sm">
                        A few months with 3–4 structured sessions, ideal for high school students managing academic workloads while preparing for college applications or exploring career interests.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Use Cases</h5>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>College application essay review and interview preparation for high school students</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Guidance on challenging academic subjects, project work, or research assignments</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Career exploration and introduction to professional fields for academic students</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Focus</h5>
                      <p className="text-gray-600 text-sm">
                        A goal-oriented mentorship approach that provides targeted academic guidance, subject-specific support, and practical solutions for immediate student needs, particularly suitable for high school academic schedules.
                      </p>
                    </div>
                    <div className="pt-4">
                      <Link href="/programs/mentorship/mentee-journey" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm">
                        Learn about Mentee Journey
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Anchor Mentorship */}
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-6 border border-green-100">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">Anchor Mentorship</h4>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Definition</h5>
                      <p className="text-gray-600 text-sm">
                        A structured, long-term mentorship program designed for high school and college students seeking comprehensive academic development, college preparation, and career exploration through sustained guidance.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Duration</h5>
                      <p className="text-gray-600 text-sm">
                        Approximately 12 months with monthly sessions, providing consistent mentorship while accommodating academic schedules and allowing steady progress throughout the school year.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Academic & Career Roadmap</h5>
                      <ul className="text-gray-600 text-sm space-y-1">
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Comprehensive college preparation including application strategy, essay development, and interview skills</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Developing academic leadership, study skills, and time management for high school success</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>Long-term career exploration and preparation for academic competitions, scholarships, or specialized programs</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 mb-1">Continuous Development</h5>
                      <p className="text-gray-600 text-sm">
                        A holistic mentorship approach that emphasizes academic growth, personal development, and long-term educational planning through regular evaluation and guidance, specifically tailored for student academic journeys.
                      </p>
                    </div>
                    <div className="pt-4">
                      <Link href="/programs/mentorship/mentor-journey" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium text-sm">
                        Learn about Mentor Journey
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Program Comparison</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 text-left font-semibold text-gray-900 border-b">Feature</th>
                      <th className="p-4 text-center font-semibold text-blue-600 border-b">Special Mentorship</th>
                      <th className="p-4 text-center font-semibold text-green-600 border-b">Anchor Mentorship</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Duration</td>
                      <td className="p-4 text-center text-gray-600">A few months</td>
                      <td className="p-4 text-center text-gray-600">12+ months</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Session Frequency</td>
                      <td className="p-4 text-center text-gray-600">3-4 sessions total</td>
                      <td className="p-4 text-center text-gray-600">Monthly sessions</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Focus</td>
                      <td className="p-4 text-center text-gray-600">Immediate academic challenges & specific skills</td>
                      <td className="p-4 text-center text-gray-600">Comprehensive academic & career development</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-medium text-gray-900">Ideal For</td>
                      <td className="p-4 text-center text-gray-600">High school students with immediate academic needs</td>
                      <td className="p-4 text-center text-gray-600">Students seeking long-term educational planning</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium text-gray-900">Upgrade Path</td>
                      <td className="p-4 text-center text-gray-600">Can upgrade to Anchor</td>
                      <td className="p-4 text-center text-gray-600">Comprehensive program</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Program Selection Guidance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Which Program is Right for You?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Special Mentorship if:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You're a high school student needing help with specific subjects or challenging assignments</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You're preparing college applications, essays, or scholarship interviews</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You have a busy academic schedule and need focused, short-term guidance</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You want to explore mentorship before committing to a longer program</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Choose Anchor Mentorship if:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You're a student seeking comprehensive academic development and college preparation</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You want sustained guidance throughout your high school or college journey</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You're planning for academic competitions, specialized programs, or scholarship opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">You want to build a long-term mentoring relationship for educational and career planning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Choose Your Program?</h2>
              
              <p className="text-gray-600 mb-8">
                Whether you need short-term guidance or long-term development, our mentorship programs are designed to support your unique career journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://mentorship.weslux.lu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start Your Journey
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <Link 
                  href="/programs/mentorship"
                  className="inline-flex items-center px-6 py-3 border-2 border-purple-500 text-purple-600 font-medium rounded-lg hover:bg-purple-50 transition-colors duration-300"
                >
                  Back to Hub
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}