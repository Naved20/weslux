import { Header, Footer } from '@/components';

export default function BecomeAmbassadorPage() {
  const ambassadorRoles = [
    {
      title: "Campus Ambassador",
      description: "Represent WES at your university or college, organize events, and connect students with opportunities.",
      requirements: ["Current student", "Active on campus", "Leadership experience"],
      icon: "🏫"
    },
    {
      title: "Industry Ambassador",
      description: "Connect WES with companies in your industry, facilitate partnerships, and create internship opportunities.",
      requirements: ["5+ years industry experience", "Professional network", "Passion for education"],
      icon: "💼"
    },
    {
      title: "Community Ambassador",
      description: "Represent WES in your local community, organize workshops, and connect with local organizations.",
      requirements: ["Community involvement", "Event organization skills", "Local network"],
      icon: "🤝"
    },
    {
      title: "Youth Ambassador",
      description: "Represent student perspectives, provide feedback on programs, and engage with fellow students.",
      requirements: ["Age 18-25", "Student status", "Communication skills"],
      icon: "🎓"
    }
  ];

  const benefits = [
    {
      title: "Professional Development",
      description: "Gain leadership, communication, and project management skills."
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry professionals, educators, and other ambassadors."
    },
    {
      title: "Recognition & Certificates",
      description: "Receive official recognition and certificates for your contributions."
    },
    {
      title: "Exclusive Access",
      description: "Get early access to events, programs, and opportunities."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Become a <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">WES Ambassador</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our global network of passionate ambassadors and help us transform education through mentorship and opportunity.
              </p>
              <a 
                href="#apply-form"
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>

        {/* What is an Ambassador */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">What is a WES Ambassador?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  WES Ambassadors are passionate individuals who represent our organization in their communities, 
                  campuses, and industries. They help us expand our reach, connect with students and professionals, 
                  and create meaningful impact.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Your Role</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Promote WES programs in your community</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Organize and host events</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Connect students with opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Provide feedback and insights</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment to You</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Comprehensive training and resources</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Regular support from our team</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Recognition and certificates</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="text-gray-600">Networking opportunities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ambassador Roles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ambassador Roles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ambassadorRoles.map((role, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-3xl mb-4">{role.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{role.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{role.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-700">Requirements:</h4>
                      <ul className="space-y-1">
                        {role.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-xs text-gray-600 flex items-start">
                            <svg className="w-3 h-3 text-blue-500 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits of Being an Ambassador</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-form" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ambassador Application</h2>
              
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="roleInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ambassador Role Interest *
                    </label>
                    <select
                      id="roleInterest"
                      name="roleInterest"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a role</option>
                      <option value="campus">Campus Ambassador</option>
                      <option value="industry">Industry Ambassador</option>
                      <option value="community">Community Ambassador</option>
                      <option value="youth">Youth Ambassador</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="background" className="block text-sm font-semibold text-gray-700 mb-2">
                      Background & Experience *
                    </label>
                    <textarea
                      id="background"
                      name="background"
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your background, experience, and why you want to become a WES Ambassador..."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="ideas" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Ideas for WES *
                    </label>
                    <textarea
                      id="ideas"
                      name="ideas"
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="What ideas do you have for promoting WES in your community/network?"
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">What is the time commitment?</h3>
                  <p className="text-gray-600">
                    Ambassadors typically commit 5-10 hours per month, depending on the role and activities. We offer flexible scheduling to accommodate your availability.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Is there any training provided?</h3>
                  <p className="text-gray-600">
                    Yes! All ambassadors receive comprehensive training, resources, and ongoing support from our team.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Can I be an ambassador if I'm a student?</h3>
                  <p className="text-gray-600">
                    Absolutely! We have specific Campus Ambassador and Youth Ambassador roles designed for students.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">How long is the ambassador term?</h3>
                  <p className="text-gray-600">
                    Ambassador terms are typically 6-12 months, with the option to renew based on mutual interest and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}