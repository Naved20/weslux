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
                          <p className="text-sm text-gray-600">Choose between short-term or long-term mentorship based on your immediate needs and availability.</p>
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
                          <p className="text-sm text-gray-600">Transition from short-term to long-term mentorship for continued development and deeper engagement.</p>
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

              {/* Mentorship Types Subsection */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mentorship Types Explained</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Short-Term Mentorship */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 border border-blue-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Short-Term Mentorship</h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Definition</h5>
                        <p className="text-gray-600 text-sm">
                          A focused, time-bound engagement designed to address specific challenges or achieve particular goals within a condensed timeframe.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Duration</h5>
                        <p className="text-gray-600 text-sm">
                          Typically 3-11 months with 10-20 sessions, ideal for immediate problem-solving and quick skill acquisition.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Use Cases</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Resume review and interview preparation</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Specific skill coaching or project guidance</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Quick career advice and networking introductions</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Focus</h5>
                        <p className="text-gray-600 text-sm">
                          Task-oriented with immediate results, providing targeted solutions for specific professional challenges.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Long-Term Mentorship */}
                  <div className="bg-gradient-to-br from-green-50 to-white rounded-xl shadow-lg p-6 border border-green-100">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">Long-Term Mentorship</h4>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Definition</h5>
                        <p className="text-gray-600 text-sm">
                          A structured, ongoing relationship focused on comprehensive professional development and holistic growth over an extended period.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Duration</h5>
                        <p className="text-gray-600 text-sm">
                          12 months with regular weekly or bi-weekly sessions, allowing for deep relationship building and sustained progress.
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Career Roadmap</h5>
                        <ul className="text-gray-600 text-sm space-y-1">
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Career transition planning and strategy development</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Leadership development and executive coaching</span>
                          </li>
                          <li className="flex items-start">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span>Skill mastery and professional certification preparation</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">Continuous Development</h5>
                        <p className="text-gray-600 text-sm">
                          Holistic approach focusing on personal growth, professional identity, and long-term career strategy with regular progress assessments.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin Your Mentorship Journey?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Whether you need quick guidance or long-term development, our platform provides the structure and support for your professional growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://mentorship.weslux.lu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Start Your Journey
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentor Flow Section */}
        <section className="py-16 bg-white">
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

              {/* Mentor Support & Resources */}
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Mentor Support & Resources</h3>
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
