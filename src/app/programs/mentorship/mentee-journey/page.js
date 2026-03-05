import { Header, Footer } from '@/components';
import Link from 'next/link';

export default function MenteeJourneyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Mentee Journey
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complete <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Mentee Journey</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                A structured, step-by-step process designed specifically for mentees to guide you from registration to mentorship completion and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Back to Hub Navigation */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Link href="/programs/mentorship" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works for Mentees</h2>
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

        {/* Mentee Flow Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Mentee Journey</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  A structured, step-by-step process designed specifically for mentees to guide you from registration to mentorship completion and beyond.
                </p>
              </div>

              {/* Detailed 6-Step Flow */}
              <div className="space-y-8">
                {/* Step 1 */}
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Mentee ID Creation & Registration</h3>
                      <p className="text-gray-600 mb-3">
                        Begin your mentorship journey by creating your unique mentee profile. This initial step establishes your identity on our platform and grants you access to the mentorship ecosystem.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-blue-700 mb-1">Registration</h4>
                          <p className="text-sm text-gray-600">Sign up with basic details including name, email, and password to create your account.</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-blue-700 mb-1">Email/OTP Verification</h4>
                          <p className="text-sm text-gray-600">Verify your email address through OTP confirmation to ensure account security and authenticity.</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-blue-700 mb-1">Dashboard Access</h4>
                          <p className="text-sm text-gray-600">Gain immediate access to your personalized dashboard with limited features until profile completion.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-xl font-bold text-green-600">2</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Profile Completion & Personalization</h3>
                      <p className="text-gray-600 mb-3">
                        Complete your professional profile to enable intelligent mentor matching. This detailed profile helps our algorithm find mentors who align perfectly with your goals and aspirations.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-green-700 mb-1">Skills Assessment</h4>
                          <p className="text-sm text-gray-600">Document your current skills, expertise areas, and technical competencies for accurate matching.</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-green-700 mb-1">Career Goals</h4>
                          <p className="text-sm text-gray-600">Define short-term and long-term career objectives to guide your mentorship direction.</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-green-700 mb-1">Interests & Preferences</h4>
                          <p className="text-sm text-gray-600">Specify industry interests, learning preferences, and professional development areas.</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-green-700 mb-1">Mentorship Type</h4>
                          <p className="text-sm text-gray-600">Choose between short-term or Anchor mentorship based on your immediate needs and availability.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-xl font-bold text-purple-600">3</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Browse & Select Your Mentor</h3>
                      <p className="text-gray-600 mb-3">
                        Explore our curated network of experienced mentors using advanced filtering tools. Review detailed profiles, expertise areas, and availability to find your ideal match.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-purple-700 mb-1">Advanced Filters</h4>
                          <p className="text-sm text-gray-600">Filter mentors by industry, experience level, expertise, availability, and mentorship style.</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-purple-700 mb-1">Profile Review</h4>
                          <p className="text-sm text-gray-600">View detailed mentor profiles including background, achievements, and previous mentee feedback.</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-purple-700 mb-1">Request Submission</h4>
                          <p className="text-sm text-gray-600">Send personalized mentorship requests outlining your goals and expectations for the relationship.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-indigo-500">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-xl font-bold text-indigo-600">4</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Approval & Scheduling</h3>
                      <p className="text-gray-600 mb-3">
                        Once your mentor accepts your request, establish the foundation for your mentorship relationship through structured planning and scheduling.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <h4 className="font-medium text-indigo-700 mb-1">Request Acceptance</h4>
                          <p className="text-sm text-gray-600">Receive mentor approval or feedback on your request, with options for modification if needed.</p>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <h4 className="font-medium text-indigo-700 mb-1">Session Scheduling</h4>
                          <p className="text-sm text-gray-600">Coordinate meeting times using integrated calendar tools with timezone support and availability matching.</p>
                        </div>
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <h4 className="font-medium text-indigo-700 mb-1">Confirmation & Setup</h4>
                          <p className="text-sm text-gray-600">Finalize mentorship terms, set up communication channels, and prepare for your first session.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                      <span className="text-xl font-bold text-orange-600">5</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Active Mentorship Engagement</h3>
                      <p className="text-gray-600 mb-3">
                        Engage in meaningful mentorship through regular sessions, structured learning, and continuous progress tracking to maximize your development.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-orange-700 mb-1">Regular Sessions</h4>
                          <p className="text-sm text-gray-600">Participate in scheduled mentoring meetings with agenda setting, note-taking, and follow-up actions.</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-orange-700 mb-1">Task Assignments</h4>
                          <p className="text-sm text-gray-600">Receive and complete learning tasks, projects, and skill-building exercises assigned by your mentor.</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-orange-700 mb-1">Feedback Exchange</h4>
                          <p className="text-sm text-gray-600">Provide and receive constructive feedback to continuously improve the mentorship experience.</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-orange-700 mb-1">Progress Tracking</h4>
                          <p className="text-sm text-gray-600">Monitor your development through milestone tracking, skill assessments, and goal achievement metrics.</p>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Completion & Future Planning</h3>
                      <p className="text-gray-600 mb-3">
                        Conclude your current mentorship cycle with comprehensive evaluation and plan for continued growth through renewal or advanced mentorship options.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-medium text-red-700 mb-1">Ratings & Reviews</h4>
                          <p className="text-sm text-gray-600">Provide detailed feedback about your mentorship experience and rate your mentor's effectiveness.</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-medium text-red-700 mb-1">Upgrade Options</h4>
                          <p className="text-sm text-gray-600">Transition from short-term to Anchor mentorship for continued development and deeper engagement.</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-medium text-red-700 mb-1">Renewal Planning</h4>
                          <p className="text-sm text-gray-600">Plan for mentorship renewal with updated goals, or explore new mentor relationships for different skill areas.</p>
                        </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mentee Tutorial Video</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Learn how to navigate the Mentor Connect platform as a mentee with this step-by-step tutorial.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Video Column */}
                <div className="relative">
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
                
                {/* Content Column */}
                <div className="space-y-6">
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
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Begin Your Mentee Journey?</h2>
              
              <p className="text-gray-600 mb-8">
                Start your mentorship journey today and connect with experienced professionals who can guide you toward your career goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://mentorship.weslux.lu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Start as Mentee
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
                <Link 
                  href="/programs/mentorship"
                  className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
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