import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ComplaintsReportsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Complaints & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Reports</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our commitment to transparency, accountability, and continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment to Accountability</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At WES Luxembourg for Education, we are committed to maintaining the highest standards of integrity, transparency, and accountability. We value feedback from all stakeholders and take all complaints and concerns seriously.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic text-lg">
                  "We believe that open communication and responsive action are essential to building trust and ensuring the effectiveness of our programs."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Submit a Complaint */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How to Submit a Complaint or Report</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-blue-600">1</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Identify the Issue</h3>
                  <p className="text-gray-600">
                    Clearly describe the concern, including relevant details such as dates, people involved, and specific incidents.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-green-600">2</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Submit Your Report</h3>
                  <p className="text-gray-600">
                    Use our online form, email, or contact information below to submit your complaint or report.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Receive Response</h3>
                  <p className="text-gray-600">
                    We will acknowledge your submission within 48 hours and provide regular updates on our investigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Concerns */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Types of Concerns We Address</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Program-Related Concerns</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Program delivery or quality issues</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Mentor-mentee relationship concerns</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Accessibility or inclusion issues</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Operational Concerns</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Financial transparency questions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Staff or volunteer conduct</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Data privacy or security concerns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reporting Channels */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Reporting Channels</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                  <p className="text-gray-600 mb-4">
                    Send detailed complaints to our dedicated email address:
                  </p>
                  <a href="mailto:complaints@weslux.lu" className="text-blue-600 font-medium hover:text-blue-700">
                    complaints@weslux.lu
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Online Form</h3>
                  <p className="text-gray-600 mb-4">
                    Use our secure online complaint form for structured reporting:
                  </p>
                  <a href="/contact" className="text-green-600 font-medium hover:text-green-700">
                    Submit Online Form
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Complaint Handling Process</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>1. Acknowledgment:</strong> All complaints are acknowledged within 48 hours of receipt.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>2. Assessment:</strong> Each complaint is assessed by our complaints committee to determine the appropriate course of action.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>3. Investigation:</strong> We conduct thorough, impartial investigations while maintaining confidentiality.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  <strong>4. Resolution:</strong> We work towards fair and appropriate resolutions, which may include corrective actions, policy changes, or other measures.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  <strong>5. Follow-up:</strong> We provide feedback to complainants and implement learnings to prevent similar issues in the future.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality & Protection */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Confidentiality & Protection</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We treat all complaints with strict confidentiality. Individuals who submit complaints in good faith are protected from retaliation. Anonymous complaints are also accepted, though they may limit our ability to conduct thorough investigations.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic text-lg">
                  "Our commitment to addressing concerns is matched by our commitment to protecting those who bring them forward."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Annual Reports */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Annual Reports & Transparency</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Annual Reports</h3>
                  <p className="text-gray-600">
                    Comprehensive reports on our activities, impact, and financial performance.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Complaint Statistics</h3>
                  <p className="text-gray-600">
                    Annual summaries of complaints received, types, and resolution outcomes.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Policy Updates</h3>
                  <p className="text-gray-600">
                    Documentation of policy changes made in response to feedback and complaints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Need to Report a Concern?</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We encourage you to bring any concerns to our attention. Your feedback helps us improve and maintain the highest standards in all our operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Submit a Complaint
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300"
                >
                  Request a Report
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