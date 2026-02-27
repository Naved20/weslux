import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VolunteerPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-orange-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Become a <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">Volunteer</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Make a lasting impact on students' lives by sharing your knowledge, experience, and passion. Join our community of dedicated volunteers today.
              </p>
              <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now
              </button>
            </div>
          </div>
        </section>

        {/* Why Volunteer */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Volunteer With Us?</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Volunteering with WES Luxembourg is more than giving back-it's about creating meaningful connections and shaping the future of education.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Make a Difference</h3>
                  <p className="text-gray-600">
                    Directly impact students' lives by sharing your expertise and helping them navigate their educational and career journeys.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Expand Your Network</h3>
                  <p className="text-gray-600">
                    Connect with like-minded professionals, educators, and organizations committed to educational excellence.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Develop New Skills</h3>
                  <p className="text-gray-600">
                    Enhance your leadership, communication, and mentoring skills while gaining fresh perspectives from students.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Volunteer Opportunities</h2>
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Mentor</h3>
                      <p className="text-gray-600 mb-4">
                        Guide students through their academic and career journeys. Share your professional experience, provide advice, and help them develop essential skills for success.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">One-on-One</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">Flexible Hours</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">Virtual</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Time Commitment:</strong> 2-4 hours per month
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Guest Speaker</h3>
                      <p className="text-gray-600 mb-4">
                        Share your expertise and industry insights through virtual or in-person presentations. Inspire students with your career journey and professional experiences.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">Presentations</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">Q&A Sessions</span>
                        <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">Hybrid</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Time Commitment:</strong> 1-2 hours per session
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial Visit Host</h3>
                      <p className="text-gray-600 mb-4">
                        Open your workplace to students for industrial exposure visits. Provide tours, explain operations, and give students a firsthand look at your industry.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">Company Tours</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">In-Person</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">Group Sessions</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Time Commitment:</strong> Half-day per visit
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Workshop Facilitator</h3>
                      <p className="text-gray-600 mb-4">
                        Lead hands-on workshops on topics like resume writing, interview skills, technical skills, or industry-specific knowledge.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">Interactive</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">Skill Building</span>
                        <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">Virtual/In-Person</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Time Commitment:</strong> 2-3 hours per workshop
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Content Creator</h3>
                      <p className="text-gray-600 mb-4">
                        Help create educational content, blog posts, videos, or resources that benefit students and the wider community.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">Writing</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">Creative</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-semibold">Remote</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        <strong>Time Commitment:</strong> Flexible
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We're Looking For</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Passion for Education</h3>
                    <p className="text-gray-600">
                      A genuine interest in helping students succeed and grow.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Experience</h3>
                    <p className="text-gray-600">
                      Relevant industry or academic experience to share with students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Good Communication</h3>
                    <p className="text-gray-600">
                      Ability to communicate effectively and connect with students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Time Commitment</h3>
                    <p className="text-gray-600">
                      Willingness to commit to regular engagement with students.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Open Mindedness</h3>
                    <p className="text-gray-600">
                      Respect for diverse backgrounds and perspectives.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Reliability</h3>
                    <p className="text-gray-600">
                      Dependability and follow-through on commitments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Apply</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Complete the Application</h3>
                    <p className="text-gray-600">
                      Fill out our online volunteer application form with your details, experience, and areas of interest.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Interview & Orientation</h3>
                    <p className="text-gray-600">
                      Participate in a brief interview and attend our volunteer orientation session to learn about our programs and expectations.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Get Matched & Start</h3>
                    <p className="text-gray-600">
                      We'll match you with opportunities that align with your skills and interests, and you'll begin making an impact!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Volunteers Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      D
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">David Chen</h3>
                      <p className="text-sm text-gray-600">Software Engineer & Mentor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Mentoring students through WES has been incredibly rewarding. Seeing them grow and achieve their goals makes every moment worthwhile. It's also helped me develop my own leadership skills."
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      L
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Lisa Martinez</h3>
                      <p className="text-sm text-gray-600">Marketing Director & Guest Speaker</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Speaking to students about my career journey has been amazing. Their enthusiasm and questions remind me why I love what I do. I always leave these sessions feeling energized."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-lg mb-8 text-orange-100">
                Join our community of volunteers and help shape the future of education. Your time and expertise can change lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Apply to Volunteer
                </button>
                <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                  Learn More
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
