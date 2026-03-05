import { Header, Footer } from '@/components';
import Link from 'next/link';

export default function InstitutionJourneyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold mb-4">
                For Institutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Institution <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Journey</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A comprehensive guide for educational institutions to integrate mentorship programs and support student development.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Hub Navigation */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Link href="/programs/mentorship" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
                Back to Mentorship Hub
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works for Institutions</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership Setup</h3>
                    <p className="text-gray-600">
                      Establish a formal partnership agreement and integrate our mentorship platform with your institution's systems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Student Onboarding</h3>
                    <p className="text-gray-600">
                      Onboard your students to the mentorship program and provide them with access to our platform and resources.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Program Management</h3>
                    <p className="text-gray-600">
                      Monitor student progress, track mentorship outcomes, and manage institutional reporting through our dashboard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institution Flow Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Institution Journey</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A structured, step-by-step guide for educational institutions to integrate and manage mentorship programs effectively.
                </p>
              </div>

              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-orange-600">1</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership Agreement & Setup</h3>
                    <p className="text-gray-600 mb-4">
                      Establish a formal partnership with WES Luxembourg to bring mentorship opportunities to your institution.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-700 mb-1">Initial Consultation</h4>
                        <p className="text-sm text-gray-600">Discuss institutional needs, student demographics, and program goals</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-700 mb-1">Agreement Finalization</h4>
                        <p className="text-sm text-gray-600">Sign partnership agreement outlining roles, responsibilities, and expectations</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-700 mb-1">Technical Integration</h4>
                        <p className="text-sm text-gray-600">Set up platform access, SSO integration, and data sharing protocols</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Student Onboarding & Training</h3>
                    <p className="text-gray-600 mb-4">
                      Prepare your students for the mentorship program through comprehensive onboarding and training.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-1">Student Registration</h4>
                        <p className="text-sm text-gray-600">Bulk student registration and account creation on the platform</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-1">Orientation Sessions</h4>
                        <p className="text-sm text-gray-600">Conduct orientation workshops to introduce students to mentorship benefits</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-1">Profile Completion</h4>
                        <p className="text-sm text-gray-600">Guide students through profile setup and goal setting</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-green-600">3</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Program Implementation & Monitoring</h3>
                    <p className="text-gray-600 mb-4">
                      Implement the mentorship program and monitor student progress through our institutional dashboard.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-1">Mentor Matching</h4>
                        <p className="text-sm text-gray-600">Monitor mentor-student matching based on academic and career goals</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-1">Progress Tracking</h4>
                        <p className="text-sm text-gray-600">Track student engagement, session completion, and skill development</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-1">Institutional Dashboard</h4>
                        <p className="text-sm text-gray-600">Access comprehensive analytics and reporting for institutional assessment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-purple-600">4</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Outcome Assessment & Program Enhancement</h3>
                    <p className="text-gray-600 mb-4">
                      Evaluate program effectiveness and plan for continuous improvement and expansion.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-700 mb-1">Impact Assessment</h4>
                        <p className="text-sm text-gray-600">Evaluate student outcomes, skill development, and career readiness</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-700 mb-1">Feedback Collection</h4>
                        <p className="text-sm text-gray-600">Gather feedback from students, mentors, and institutional stakeholders</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-700 mb-1">Program Expansion</h4>
                        <p className="text-sm text-gray-600">Plan for scaling the program to more students and departments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Institution Tutorial Video</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Learn how educational institutions can integrate and manage mentorship programs through our platform.
              </p>
              
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
                    <div className="absolute top-4 right-4 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Content Column */}
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
                    For Institutions
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Integrate Mentorship at Your Institution</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Discover how educational institutions can seamlessly integrate mentorship programs, track student progress, and enhance career development outcomes through our comprehensive platform.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Set up institutional partnerships and student onboarding</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Monitor student progress and mentorship outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-600">Access institutional analytics and reporting tools</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institution Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits for Institutions</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Enhanced Student Outcomes</h3>
                  <p className="text-gray-600 text-sm">Improve student employability, career readiness, and academic performance through structured mentorship.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Analytics</h3>
                  <p className="text-gray-600 text-sm">Access detailed reports and analytics on student engagement, progress, and program effectiveness.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Connections</h3>
                  <p className="text-gray-600 text-sm">Connect your institution with industry professionals and expand your network of potential employers and partners.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-orange-50 via-white to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Partner with Us?</h2>
              
              <p className="text-gray-600 mb-8">
                Bring comprehensive mentorship opportunities to your institution and enhance student career development outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact for Partnership
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <Link 
                  href="/programs/mentorship"
                  className="inline-flex items-center px-6 py-3 border-2 border-orange-500 text-orange-600 font-medium rounded-lg hover:bg-orange-50 transition-colors duration-300"
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