import { Header, Footer } from '@/components';

export default function OurDonorsPage() {
  const majorDonors = [
    {
      name: "Luxembourg Education Foundation",
      category: "Foundation",
      support: "Core Program Funding",
      logoColor: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      name: "European Union Education Initiative",
      category: "Government",
      support: "International Partnership Grant",
      logoColor: "bg-green-100",
      textColor: "text-green-600"
    },
    {
      name: "TechForGood Alliance",
      category: "Corporate",
      support: "Technology Infrastructure",
      logoColor: "bg-purple-100",
      textColor: "text-purple-600"
    },
    {
      name: "Global Youth Empowerment Fund",
      category: "Foundation",
      support: "Student Scholarship Program",
      logoColor: "bg-orange-100",
      textColor: "text-orange-600"
    }
  ];

  const corporatePartners = [
    {
      name: "InnovateTech Solutions",
      category: "Technology",
      partnership: "Mentorship Program Sponsor"
    },
    {
      name: "Future Leaders Inc.",
      category: "Consulting",
      partnership: "Career Development Workshops"
    },
    {
      name: "EduConnect International",
      category: "Education",
      partnership: "Global Network Access"
    },
    {
      name: "Sustainable Growth Partners",
      category: "Social Enterprise",
      partnership: "Impact Measurement Support"
    }
  ];

  const individualDonors = [
    {
      level: "Visionary Circle",
      description: "Donors contributing €10,000+ annually",
      count: "15+"
    },
    {
      level: "Leadership Circle",
      description: "Donors contributing €5,000 - €9,999 annually",
      count: "30+"
    },
    {
      level: "Impact Circle",
      description: "Donors contributing €1,000 - €4,999 annually",
      count: "100+"
    },
    {
      level: "Supporters",
      description: "Donors contributing up to €999 annually",
      count: "500+"
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
                Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Donors</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Recognizing the generous supporters who make our work possible through their contributions and partnerships.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Support Network</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The generosity of our donors and partners enables us to provide mentorship, educational programs, and opportunities to students who need them most. Together, we are building a brighter future through education.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic text-lg">
                  "Every contribution, no matter the size, helps us create meaningful change in students' lives. We are deeply grateful for the trust and support of our donor community."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Major Donors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Major Donors & Foundations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {majorDonors.map((donor, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-16 h-16 ${donor.logoColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <div className={`text-xl font-bold ${donor.textColor}`}>
                            {donor.name.split(' ').map(word => word[0]).join('')}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-1">{donor.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{donor.category}</p>
                          <p className="text-gray-600 text-sm">{donor.support}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Partners */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Corporate Partners</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {corporatePartners.map((partner, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        {partner.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{partner.partnership}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Individual Donors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Individual Donor Circles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {individualDonors.map((circle, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{circle.count}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{circle.level}</h3>
                    <p className="text-gray-600 text-sm">{circle.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Donations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Donations Make an Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship Programs</h3>
                  <p className="text-gray-600">
                    €500 supports one student for a full year of mentorship, including training, materials, and program coordination.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Visits</h3>
                  <p className="text-gray-600">
                    €1,000 enables 20 students to participate in industrial exposure visits, including transportation and coordination.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Access</h3>
                  <p className="text-gray-600">
                    €2,500 provides digital infrastructure for virtual mentorship sessions and online learning resources.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recognition & Transparency */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recognition & Transparency</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  We believe in transparency and accountability in all our financial operations. All donations are used exclusively to support our educational programs and student initiatives.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Our annual financial reports are available upon request, and we regularly update our donors on the impact of their contributions through detailed impact reports and success stories.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We recognize our donors through various channels, including our annual report, website recognition, and special appreciation events. However, we also respect donor privacy and offer anonymous giving options for those who prefer them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Official Documents */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Official Documents & Agreements</h2>
              
              {/* Funding Agreement Details */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg mb-8">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2025 Partial Agreement - CRE</h3>
                    <p className="text-gray-600 mb-4">
                      Official partial agreement document between WES Luxembourg for Education and relevant authorities, outlining funding arrangements and program implementation details for the year 2025.
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      Document Date: 2025
                    </div>
                    <a 
                      href="/doner/2025AID201%20WES%20Luxembourg%20for%20Education%20(accord%20partiel%20-%20CRE).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View PDF Document
                    </a>
                  </div>
                </div>
              </div>

              {/* Agreement Summary */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Funding Agreement Summary</h3>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Grant Approval</h4>
                    <p className="text-gray-600">
                      The National Relief Fund (Œuvre Nationale de Secours Grande-Duchesse Charlotte) has approved partial financial support of <strong>€22,000</strong> (twenty-two thousand euros) for the "Mentorship Program - WES Lux Career Guidance Program".
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Key Conditions</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-bold text-purple-600">1</span>
                        </div>
                        <span>Funds must be used exclusively for the approved project activities</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-bold text-purple-600">2</span>
                        </div>
                        <span>A final project report with financial accounting must be submitted within 6 weeks after August 30, 2027</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-bold text-purple-600">3</span>
                        </div>
                        <span>The National Relief Fund logo must be displayed on all project-related communication materials</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-sm font-bold text-purple-600">4</span>
                        </div>
                        <span>Project documentation (photos/videos) must be provided for communication purposes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Project Timeline</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-1">Dec 2025</div>
                        <div className="text-sm text-gray-600">Grant Approval</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600 mb-1">2025-2027</div>
                        <div className="text-sm text-gray-600">Project Implementation</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">Oct 2027</div>
                        <div className="text-sm text-gray-600">Final Report Due</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Become a Donor */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Become a Donor</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Join our community of supporters and help us create more opportunities for students through mentorship and education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/support" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Make a Donation
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300"
                >
                  Learn About Partnership
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