import { Header, Footer } from '@/components';
import Link from 'next/link';

export default function MentorJourneyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
                Mentor Journey
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Mentor Journey</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A structured, step-by-step guide for mentors to effectively guide and support their mentees through the mentorship journey.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Hub Navigation */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Link href="/programs/mentorship" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works for Mentors</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Apply & Match</h3>
                    <p className="text-gray-600">
                      Submit your mentor profile and get matched with mentees based on your expertise and availability.
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
                      Meet your mentee and establish goals, expectations, and a meeting schedule that works for both of you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Guide & Support</h3>
                    <p className="text-gray-600">
                      Provide regular guidance, share insights, and support your mentee's professional development journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Flow Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Mentor Journey</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A structured, step-by-step guide for mentors to effectively guide and support their mentees through the mentorship journey.
                </p>
              </div>

              {/* Step 1 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Account Creation & Onboarding</h3>
                    <p className="text-gray-600 mb-4">
                      Begin your mentorship journey by creating your mentor profile. Complete the registration with your professional details, verify your email, and set up your account security.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-1">Sign Up & Verification</h4>
                        <p className="text-sm text-gray-600">Create account, verify email, and set up 2FA</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-1">Profile Setup</h4>
                        <p className="text-sm text-gray-600">Complete professional profile with expertise</p>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-700 mb-1">Agreements</h4>
                        <p className="text-sm text-gray-600">Accept terms, code of conduct, and privacy policy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Profile Setup & Configuration</h3>
                    <p className="text-gray-600 mb-4">
                      Build a comprehensive mentor profile that showcases your expertise and availability to potential mentees.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-1">Expertise Setup</h4>
                        <p className="text-sm text-gray-600">Define skills, industry focus, and specialization areas</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-1">Availability</h4>
                        <p className="text-sm text-gray-600">Set working hours, timezone, and session preferences</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-1">Mentorship Style</h4>
                        <p className="text-sm text-gray-600">Define your mentoring approach and communication style</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-700 mb-1">Mentorship Goals</h4>
                        <p className="text-sm text-gray-600">Set objectives and expected outcomes for mentees</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Mentorship Request Management</h3>
                    <p className="text-gray-600 mb-4">
                      Review and manage mentorship requests from potential mentees. Evaluate compatibility and alignment with your expertise.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-700 mb-1">Request Review</h4>
                        <p className="text-sm text-gray-600">Evaluate mentee profiles and mentorship requests</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-700 mb-1">Compatibility Check</h4>
                        <p className="text-sm text-gray-600">Assess alignment with your expertise and availability</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-700 mb-1">Decision Making</h4>
                        <p className="text-sm text-gray-600">Accept, request more info, or decline with feedback</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-indigo-600">4</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Session Planning & Scheduling</h3>
                    <p className="text-gray-600 mb-4">
                      Plan and schedule mentoring sessions with your mentee, set clear agendas, and establish communication protocols.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <h4 className="font-medium text-indigo-700 mb-1">Calendar Integration</h4>
                        <p className="text-sm text-gray-600">Sync with your calendar and set availability</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <h4 className="font-medium text-indigo-700 mb-1">Agenda Setting</h4>
                        <p className="text-sm text-gray-600">Define session goals and discussion topics</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <h4 className="font-medium text-indigo-700 mb-1">Resource Preparation</h4>
                        <p className="text-sm text-gray-600">Prepare materials and resources for sessions</p>
                      </div>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        <h4 className="font-medium text-indigo-700 mb-1">Communication Setup</h4>
                        <p className="text-sm text-gray-600">Establish communication channels and tools</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-orange-600">5</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Active Mentorship Delivery</h3>
                    <p className="text-gray-600 mb-4">
                      Conduct effective mentoring sessions, provide guidance, and track progress through structured engagement.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-700 mb-1">Session Facilitation</h4>
                        <p className="text-sm text-gray-600">Lead productive mentoring sessions with clear objectives</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-700 mb-1">Progress Tracking</h4>
                        <p className="text-sm text-gray-600">Monitor mentee progress and skill development</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-700 mb-1">Feedback Loop</h4>
                        <p className="text-sm text-gray-600">Provide constructive feedback and guidance</p>
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-700 mb-1">Skill Development</h4>
                        <p className="text-sm text-gray-600">Focus on specific skill development areas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <span className="text-xl font-bold text-red-600">6</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Progress Review & Program Completion</h3>
                    <p className="text-gray-600 mb-4">
                      Evaluate the mentorship journey, assess outcomes, and plan for continued growth and development.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-medium text-red-700 mb-1">Outcome Assessment</h4>
                        <p className="text-sm text-gray-600">Evaluate achievement of mentorship goals</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-medium text-red-700 mb-1">Feedback Exchange</h4>
                        <p className="text-sm text-gray-600">Gather and provide constructive feedback</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-medium text-red-700 mb-1">Future Planning</h4>
                        <p className="text-sm text-gray-600">Create roadmap for continued development</p>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mentor Tutorial Video</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Learn how to navigate the Mentor Connect platform as a mentor with this step-by-step tutorial.
              </p>
              
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
          </div>
        </section>

        {/* Mentor Support & Resources */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mentor Support & Resources</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Mentor Resources</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Mentor Training Materials</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Best Practices Library</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Community Forum Access</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Success Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-sm text-gray-600">Mentor Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">4.8/5</div>
                      <div className="text-sm text-gray-600">Mentor Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Guide the Next Generation?</h2>
              
              <p className="text-gray-600 mb-8">
                Share your expertise and make a meaningful impact on students' careers by becoming a mentor in our program.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://mentorship.weslux.lu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Become a Mentor
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <Link 
                  href="/programs/mentorship"
                  className="inline-flex items-center px-6 py-3 border-2 border-green-500 text-green-600 font-medium rounded-lg hover:bg-green-50 transition-colors duration-300"
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