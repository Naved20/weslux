import { Header, Footer } from '@/components';

export default function LegalComplianceReportsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Legal Compliance & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Reports</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our formal process for addressing legal grievances and maintaining regulatory compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Legal Compliance Framework</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At WES Luxembourg for Education, we maintain rigorous legal compliance standards and provide formal channels for legal grievances. We take all legal Compliance seriously and ensure proper investigation and resolution in accordance with applicable laws and regulations.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic text-lg">
                  "We uphold the highest standards of legal compliance and provide transparent processes for addressing formal legal grievances."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Submit a Legal Compliance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Submit a Legal Compliance or Report</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-blue-600">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Document the Legal Issue</h3>
                  <p className="text-gray-600">
                    Provide detailed documentation including dates, parties involved, specific legal concerns, and any supporting evidence.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-green-600">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Formal Grievance</h3>
                  <p className="text-gray-600">
                    Use our formal legal Compliance channels to submit your grievance with proper documentation and legal basis.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Legal Response</h3>
                  <p className="text-gray-600">
                    We will acknowledge your legal Compliance within 48 hours and provide updates on our formal investigation process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Legal Concerns */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Legal Concerns We Address</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Regulatory & Compliance Issues</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Regulatory compliance violations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Contractual disputes and breaches</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Legal liability and negligence claims</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Governance & Ethical Issues</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Governance and fiduciary duty concerns</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Ethical violations and misconduct</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Data protection and privacy law violations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Official Registration Documents */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Official Registration & Legal Documents</h2>
              
              {/* PDF Documents Section */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">RCS Extract</h3>
                      <p className="text-gray-600 text-sm">Official registration extract from the Trade and Companies Register</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      Registered: February 14, 2025
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      Registration Number: F14791
                    </div>
                    <a 
                      href="/Compliance/RCS%20Extrait_gratuit_D_25_169699-1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg w-full justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View RCS Extract PDF
                    </a>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Articles of Association</h3>
                      <p className="text-gray-600 text-sm">Official statutes and governing documents</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      Established: January 1, 2025
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                      Deposit Reference: L250052546
                    </div>
                    <a 
                      href="/Compliance/RCS_AOA%20DossierDepot_25_52546-1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg w-full justify-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      View Articles of Association PDF
                    </a>
                  </div>
                </div>
              </div>

              {/* Organization Details */}
              <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Organization Registration Details</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Legal Information</h4>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span><strong>Name:</strong> WES Luxembourg for Education</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span><strong>Legal Form:</strong> Non-profit Association (ASBL)</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span><strong>RCS Number:</strong> F14791</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span><strong>Registration Date:</strong> February 14, 2025</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Registered Address</h4>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-600">18, Rue Nicolas Meyers</p>
                        <p className="text-gray-600">L-4918 Bascharage</p>
                        <p className="text-gray-600">Luxembourg</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Organization Purpose</h4>
                      <p className="text-gray-600">
                        The association is established as a non-profit organization in accordance with the law of August 8, 2023 relating to non-profit associations and foundations. The main objective of the association is to promote and support quality education for disadvantaged communities, particularly in rural and tribal areas, including marginalized communities in Luxembourg and other developing countries, especially in India, where education remains a privilege.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Key Activities</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Support for digital literacy and computer education programs</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Teacher training and mentorship programs</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Provision of resources for schools and educational institutions</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>Community awareness and engagement activities</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Board of Directors */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Board of Directors</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="font-bold text-gray-900">Mohmmad Arif</div>
                      <div className="text-sm text-gray-600">Administrator</div>
                      <div className="text-xs text-gray-500 mt-2">Term: 01/01/2025 - 01/01/2028</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="font-bold text-gray-900">Rohit Pandey</div>
                      <div className="text-sm text-gray-600">Administrator</div>
                      <div className="text-xs text-gray-500 mt-2">Term: 01/01/2025 - 01/01/2028</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                      <div className="font-bold text-gray-900">Keshar Singh</div>
                      <div className="text-sm text-gray-600">Administrator</div>
                      <div className="text-xs text-gray-500 mt-2">Term: 01/01/2025 - 01/01/2028</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Confidentiality & Protection */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Confidentiality & Whistleblower Protection</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We treat all legal Compliance with strict attorney-client confidentiality where applicable. Individuals who submit legal Compliance in good faith are protected from retaliation under whistleblower protection laws. Anonymous legal Compliance are accepted, though they may limit our ability to conduct thorough legal investigations.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic text-lg">
                  "Our commitment to legal compliance is matched by our commitment to protecting those who report legal concerns in good faith."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Compliance Reports */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Legal Compliance & Transparency Reports</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Compliance Reports</h3>
                  <p className="text-gray-600">
                    Comprehensive reports on our legal compliance activities and regulatory adherence.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Compliance Statistics</h3>
                  <p className="text-gray-600">
                    Annual summaries of legal Compliance received, types, and legal resolution outcomes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Policy Updates</h3>
                  <p className="text-gray-600">
                    Documentation of legal policy changes made in response to legal feedback and compliance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Contact Information */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need to Report a Legal Concern?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We encourage you to bring any legal concerns to our attention. Your legal feedback helps us maintain the highest standards of legal compliance and regulatory adherence in all our operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit a Legal Compliance
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300"
                >
                  Request Legal Compliance Report
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