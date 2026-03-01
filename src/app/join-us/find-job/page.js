import { Header, Footer } from '@/components';

export default function FindJobPage() {
  const jobCategories = [
    {
      title: "Technology",
      count: "12",
      description: "Software development, IT, data science, cybersecurity",
      icon: "💻"
    },
    {
      title: "Education",
      count: "8",
      description: "Teaching, administration, curriculum development",
      icon: "📚"
    },
    {
      title: "Business",
      count: "15",
      description: "Marketing, finance, HR, management",
      icon: "💼"
    },
    {
      title: "Engineering",
      count: "9",
      description: "Mechanical, electrical, civil, software",
      icon: "⚙️"
    },
    {
      title: "Healthcare",
      count: "7",
      description: "Medical, nursing, research, administration",
      icon: "🏥"
    },
    {
      title: "Creative",
      count: "6",
      description: "Design, writing, media, arts",
      icon: "🎨"
    }
  ];

  const featuredJobs = [
    {
      title: "Frontend Developer",
      company: "TechInnovate Solutions",
      location: "Luxembourg City",
      type: "Full-time",
      experience: "2+ years",
      salary: "€45,000 - €60,000",
      posted: "2 days ago"
    },
    {
      title: "Marketing Manager",
      company: "Global Education Partners",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "€50,000 - €65,000",
      posted: "1 week ago"
    },
    {
      title: "Data Analyst",
      company: "LuxData Analytics",
      location: "Esch-sur-Alzette",
      type: "Full-time",
      experience: "1+ years",
      salary: "€40,000 - €55,000",
      posted: "3 days ago"
    },
    {
      title: "Educational Coordinator",
      company: "WES Luxembourg",
      location: "Luxembourg",
      type: "Full-time",
      experience: "2+ years",
      salary: "€42,000 - €58,000",
      posted: "5 days ago"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Your <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Dream Job</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Connect with career opportunities from our partner companies and organizations across Luxembourg and Europe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#job-listings"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Browse Jobs
                </a>
                <a 
                  href="#upload-resume"
                  className="inline-block px-8 py-3 border-2 border-purple-500 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-300"
                >
                  Upload Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Job Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Browse by Category</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobCategories.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-2xl">{category.icon}</div>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
                        {category.count} jobs
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section id="job-listings" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Job Opportunities</h2>
              <div className="space-y-6">
                {featuredJobs.map((job, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-grow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-bold text-purple-600">
                              {job.company.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              <span className="text-gray-600">{job.company}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600">{job.location}</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                                {job.type}
                              </span>
                              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                                {job.experience} experience
                              </span>
                              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-semibold">
                                {job.salary}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm text-gray-500 mb-2">Posted {job.posted}</span>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300">
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

        {/* Upload Resume */}
        <section id="upload-resume" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Get Matched with Opportunities</h2>
              
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-12 rounded-2xl shadow-xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Upload Your Resume</h3>
                  <p className="text-gray-600">
                    Share your resume with our partner companies and get matched with relevant job opportunities.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="jobName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="jobName"
                        name="jobName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="jobEmail" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="jobEmail"
                        name="jobEmail"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="jobCategory" className="block text-sm font-semibold text-gray-700 mb-2">
                      Job Category Interest *
                    </label>
                    <select
                      id="jobCategory"
                      name="jobCategory"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select category</option>
                      <option value="technology">Technology</option>
                      <option value="education">Education</option>
                      <option value="business">Business</option>
                      <option value="engineering">Engineering</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="creative">Creative</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experienceLevel" className="block text-sm font-semibold text-gray-700 mb-2">
                      Experience Level *
                    </label>
                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      <option value="">Select experience</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (3-5 years)</option>
                      <option value="senior">Senior Level (5+ years)</option>
                      <option value="executive">Executive</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="resumeUpload" className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload Resume (PDF/DOC) *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors duration-300">
                      <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                      <p className="text-gray-600 mb-2">Drag & drop your resume here</p>
                      <p className="text-gray-500 text-sm mb-4">or</p>
                      <label htmlFor="fileInput" className="px-6 py-2 bg-purple-100 text-purple-600 font-medium rounded-lg hover:bg-purple-200 transition-colors duration-300 cursor-pointer">
                        Browse Files
                      </label>
                      <input type="file" id="fileInput" className="hidden" accept=".pdf,.doc,.docx" />
                      <p className="text-gray-500 text-sm mt-4">Maximum file size: 5MB</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Submit Resume
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Job Search Tips */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Job Search Tips</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tailor Your Resume</h3>
                  <p className="text-gray-600 text-sm">
                    Customize your resume for each job application to highlight relevant skills and experience.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Network Effectively</h3>
                  <p className="text-gray-600 text-sm">
                    Connect with professionals in your field and attend industry events to expand your opportunities.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Prepare for Interviews</h3>
                  <p className="text-gray-600 text-sm">
                    Research companies, practice common questions, and prepare thoughtful questions to ask.
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