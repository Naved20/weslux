import { Header, Footer } from '@/components';

export default function FindInternshipPage() {
  const internshipTypes = [
    {
      title: "Summer Internships",
      duration: "2-3 months",
      description: "Full-time internships during summer break",
      icon: "☀️"
    },
    {
      title: "Semester Internships",
      duration: "4-6 months",
      description: "Part-time during academic semesters",
      icon: "📅"
    },
    {
      title: "Virtual Internships",
      duration: "Flexible",
      description: "Remote opportunities from anywhere",
      icon: "💻"
    },
    {
      title: "Research Internships",
      duration: "3-12 months",
      description: "Academic and industry research projects",
      icon: "🔬"
    }
  ];

  const featuredInternships = [
    {
      title: "Software Development Intern",
      company: "TechInnovate Solutions",
      location: "Luxembourg City",
      duration: "3 months",
      stipend: "€1,200/month",
      requirements: "Computer Science student, Python/JavaScript",
      posted: "1 week ago"
    },
    {
      title: "Marketing Intern",
      company: "Global Education Partners",
      location: "Remote",
      duration: "4 months",
      stipend: "€1,000/month",
      requirements: "Marketing/Business student, social media skills",
      posted: "3 days ago"
    },
    {
      title: "Data Science Intern",
      company: "LuxData Analytics",
      location: "Esch-sur-Alzette",
      duration: "6 months",
      stipend: "€1,500/month",
      requirements: "Data Science/Statistics, Python/R",
      posted: "5 days ago"
    },
    {
      title: "Education Program Intern",
      company: "WES Luxembourg",
      location: "Luxembourg",
      duration: "3 months",
      stipend: "€1,200/month",
      requirements: "Education/Social Sciences, communication skills",
      posted: "2 days ago"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Your <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Internship</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Discover valuable internship opportunities with our partner companies and gain real-world experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#internship-listings"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Browse Internships
                </a>
                <a 
                  href="#apply-internship"
                  className="inline-block px-8 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internship Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Internships</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {internshipTypes.map((type, index) => (
                  <div key={index} className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-2xl mb-4">{type.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{type.title}</h3>
                    <div className="mb-3">
                      <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                        {type.duration}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{type.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Internships */}
        <section id="internship-listings" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Internship Opportunities</h2>
              <div className="space-y-6">
                {featuredInternships.map((internship, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-green-600">
                              {internship.company.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{internship.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="text-gray-600">{internship.company}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600">{internship.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                                {internship.duration}
                              </span>
                              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                                {internship.stipend}
                              </span>
                              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-semibold">
                                {internship.requirements}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500 mb-2">Posted {internship.posted}</span>
                        <button className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply-internship" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Apply for Internship</h2>
              
              <div className="bg-gradient-to-br from-green-50 to-white p-8 md:p-12 rounded-2xl shadow-xl">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="internName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="internName"
                        name="internName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="internEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="internEmail"
                        name="internEmail"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="university" className="block text-sm font-semibold text-gray-700 mb-2">
                        University/College *
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="University of Luxembourg"
                      />
                    </div>

                    <div>
                      <label htmlFor="major" className="block text-sm font-semibold text-gray-700 mb-2">
                        Major/Field of Study *
                      </label>
                      <input
                        type="text"
                        id="major"
                        name="major"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Computer Science"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="internshipType" className="block text-sm font-semibold text-gray-700 mb-2">
                      Internship Type Preference *
                    </label>
                    <select
                      id="internshipType"
                      name="internshipType"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="">Select type</option>
                      <option value="summer">Summer Internship</option>
                      <option value="semester">Semester Internship</option>
                      <option value="virtual">Virtual Internship</option>
                      <option value="research">Research Internship</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="skills" className="block text-sm font-semibold text-gray-700 mb-2">
                      Skills & Qualifications *
                    </label>
                    <textarea
                      id="skills"
                      name="skills"
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="List your technical skills, languages, software proficiency, and relevant coursework..."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="motivation" className="block text-sm font-semibold text-gray-700 mb-2">
                      Why are you interested in this internship? *
                    </label>
                    <textarea
                      id="motivation"
                      name="motivation"
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your career goals, what you hope to learn, and why you're a good fit..."
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="internshipUpload" className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Documents (Resume, Transcript) *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors duration-300">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="text-gray-600 mb-2">Drag & drop your documents here</p>
                      <p className="text-gray-500 text-sm mb-4">or</p>
                      <label htmlFor="internshipFileInput" className="px-6 py-2 bg-green-100 text-green-600 font-medium rounded-lg hover:bg-green-200 transition-colors duration-300 cursor-pointer">
                        Browse Files
                      </label>
                      <input type="file" id="internshipFileInput" className="hidden" accept=".pdf,.doc,.docx" multiple />
                      <p className="text-gray-500 text-sm mt-4">Maximum file size: 10MB total</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Internships */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Benefits of Internships</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real-World Experience</h3>
                  <p className="text-gray-600 text-sm">
                    Apply classroom knowledge to real projects and gain practical skills.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Network</h3>
                  <p className="text-gray-600 text-sm">
                    Build connections with industry professionals and potential employers.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Career Exploration</h3>
                  <p className="text-gray-600 text-sm">
                    Discover your interests and clarify career goals through hands-on experience.
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