import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

        {/* How to Submit a Legal Complaint */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Submit a Legal Complaint or Report</h2>
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
                    Use our formal legal complaint channels to submit your grievance with proper documentation and legal basis.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Legal Response</h3>
                  <p className="text-gray-600">
                    We will acknowledge your legal complaint within 48 hours and provide updates on our formal investigation process.
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

        {/* Legal Reporting Channels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Legal Reporting Channels</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Department Email</h3>
                  <p className="text-gray-600 mb-4">
                    Submit formal legal complaints to our legal department:
                  </p>
                  <a href="mailto:legal.complaints@weslux.lu" className="text-blue-600 font-medium hover:text-blue-700">
                    legal.complaints@weslux.lu
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Grievance Form</h3>
                  <p className="text-gray-600 mb-4">
                    Use our secure legal grievance form for formal submissions:
                  </p>
                  <a href="/contact" className="text-green-600 font-medium hover:text-green-700">
                    Submit Legal Grievance Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Legal Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Legal Complaint Process</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>1. Formal Acknowledgment:</strong> All legal Compliance are formally acknowledged within 48 hours of receipt.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>2. Legal Assessment:</strong> Each legal complaint is assessed by our legal committee to determine the appropriate legal course of action.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>3. Formal Investigation:</strong> We conduct thorough, impartial investigations while maintaining strict confidentiality and legal compliance.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>4. Legal Resolution:</strong> We work towards legally sound resolutions, which may include corrective actions, policy changes, or other legal remedies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>5. Legal Follow-up:</strong> We provide formal responses to complainants and implement systemic changes to prevent similar legal issues.
                </p>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Legal Complaint Statistics</h3>
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
                  Submit a Legal Complaint
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