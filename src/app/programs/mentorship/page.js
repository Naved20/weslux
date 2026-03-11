import { Header, Footer } from '@/components';
import Link from 'next/link';

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

        {/* Explore Mentorship Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Explore Mentorship</h2>
              <div className="flex justify-center">
                {/* Mentorship Programs Card */}
                <Link href="/programs/mentorship/programs" className="block max-w-md">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-purple-100">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mentorship Programs</h3>
                    <p className="text-gray-600 text-center mb-6">
                      Explore our Special and Anchor mentorship programs designed for different needs and timelines.
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center text-purple-600 font-medium">
                        View Programs
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Journey</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {/* Mentee Journey Card */}
                <Link href="/programs/mentorship/mentee-journey" className="block">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-blue-100">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mentee Journey</h3>
                    <p className="text-gray-600 text-center mb-6">
                      Step-by-step guide for mentees from registration to mentorship completion with detailed process flow.
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center text-blue-600 font-medium">
                        Explore Journey
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Mentor Journey Card */}
                <Link href="/programs/mentorship/mentor-journey" className="block">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-green-100">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Mentor Journey</h3>
                    <p className="text-gray-600 text-center mb-6">
                      Comprehensive guide for mentors with support resources and step-by-step mentorship delivery process.
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center text-green-600 font-medium">
                        Explore Journey
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Institution Journey Card */}
                <Link href="/programs/mentorship/institution-journey" className="block">
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-orange-100">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Institution Journey</h3>
                    <p className="text-gray-600 text-center mb-6">
                      Guide for educational institutions to integrate mentorship programs and support student development.
                    </p>
                    <div className="text-center">
                      <span className="inline-flex items-center text-orange-600 font-medium">
                        Explore Guide
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-center mb-12">
                Find answers to common questions about our mentorship program.
              </p>
              
              <div className="space-y-6">
                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    What is the difference between Special and Anchor mentorship?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Special mentorship (3-11 months) is ideal for specific goals like interview preparation, resume review, or learning a particular skill. Anchor mentorship (12+ months) focuses on comprehensive career development, leadership growth, and sustained professional transformation with regular weekly or bi-weekly sessions.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    How often will I meet with my mentor?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Meeting frequency depends on the mentorship type and mutual agreement. Special mentorships typically involve 10-20 sessions over 3-11 months, while Anchor mentorships include weekly or bi-weekly sessions. You and your mentor will establish a schedule that works for both parties during the initial planning phase.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    Can I switch from Special to Anchor mentorship?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Yes, you can upgrade from Special to Anchor mentorship at any time. Many mentees start with Special mentorship to address immediate needs and then transition to Anchor mentorship for long-term development. The upgrade process is seamless and can be initiated through your dashboard.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    What if I'm not satisfied with my mentor match?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    We have a rematching policy to ensure you have the best possible mentorship experience. If you're not satisfied with your mentor match, you can request a rematch through your dashboard. Our team will work with you to find a better match based on your feedback and preferences.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    Is there a cost associated with the mentorship program?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Our mentorship program is currently offered free of charge to students and young professionals as part of our educational initiative. We believe in making professional guidance accessible to everyone regardless of financial background.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    What qualifications do mentors have?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Our mentors are experienced professionals with at least 5 years of industry experience in their respective fields. They undergo a rigorous selection process including background checks, interviews, and training to ensure they can provide quality guidance to mentees.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    How are mentors and mentees matched?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    We use an intelligent matching algorithm that considers factors like industry, skills, career goals, personality traits, and availability. You can also browse mentor profiles and request specific mentors based on your preferences.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    What support is provided during the mentorship?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    We provide comprehensive support including session planning tools, progress tracking, goal setting frameworks, and regular check-ins with our program coordinators. Both mentors and mentees have access to resources and training materials.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    Can I have more than one mentor?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    Yes, you can have multiple mentors for different skill areas or career goals. Our platform allows you to manage multiple mentorship relationships simultaneously, though we recommend starting with one mentor to ensure you can fully commit to the relationship.
                  </p>
                </details>

                <details className="bg-gray-50 rounded-xl p-6">
                  <summary className="text-lg font-semibold text-gray-900 cursor-pointer">
                    What happens after the mentorship program ends?
                  </summary>
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    After completing a mentorship program, you can choose to renew with the same mentor, find a new mentor for different goals, or become a mentor yourself. We also provide alumni networking opportunities and continued access to resources.
                  </p>
                </details>
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
                Whether you're looking for guidance as a mentee or want to share your expertise as a mentor, our platform provides the structure and support for meaningful professional relationships.
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
        </section>
      </main>

      <Footer />
    </div>
  );
}