import { Header, Footer } from '@/components';

// Helper function for section titles
function getSectionTitle(sectionNumber) {
  const titles = {
    1: "Introduction",
    2: "Information We Collect",
    3: "How We Use Your Information",
    4: "Data Sharing and Disclosure",
    5: "Data Security",
    6: "Your Rights",
    7: "GDPR Compliance",
    8: "Cookies and Tracking Technologies",
    9: "Third-Party Links",
    10: "Children's Privacy",
    11: "Changes to This Privacy Policy",
    12: "Contact Us"
  };
  return titles[sectionNumber] || `Section ${sectionNumber}`;
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Privacy <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">Policy</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Your privacy is important to us. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: March 1, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Legal Document Header */}
              <div className="mb-12 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">WES Luxembourg for Education</h2>
                    <p className="text-gray-600">Privacy Policy Document</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Document ID: PP-2026-001</div>
                    <div className="text-sm text-gray-500">Version: 2.0</div>
                  </div>
                </div>
                <div className="border-t border-gray-300 pt-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Effective Date</h3>
                      <p className="text-gray-900">March 1, 2026</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700 mb-2">Applicable To</h3>
                      <p className="text-gray-900">All website visitors, users, and program participants</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Table of Contents */}
              <div className="mb-12 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
                  </svg>
                  Table of Contents
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[1,2,3,4,5,6,7,8,9,10,11,12].map((num) => (
                    <a key={num} href={`#section-${num}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                      {num}. {getSectionTitle(num)}
                    </a>
                  ))}
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {/* Section 1 */}
                <div id="section-1" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-600 mb-4">
                      WES Luxembourg for Education ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website weslux.lu or use our services.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                      <p className="text-gray-700">
                        <strong>Important:</strong> Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div id="section-2" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
                  </div>
                  <div className="ml-14">
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        We may collect personal information that you voluntarily provide to us when you:
                      </p>
                      <div className="bg-gray-50 p-4 rounded-lg mb-4">
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Register for an account</li>
                          <li>Apply for volunteer or ambassador positions</li>
                          <li>Submit internship or job applications</li>
                          <li>Contact us through our website</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Participate in our programs or events</li>
                        </ul>
                      </div>
                      <p className="text-gray-600 mb-4">
                        This information may include your name, email address, phone number, educational background, professional experience, and other relevant details.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-3">
                        <div className="w-6 h-6 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Automatically Collected Information</h3>
                      </div>
                      <p className="text-gray-600">
                        When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Section 3 */}
                <div id="section-3" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-600 mb-4">
                      We use the information we collect in the following ways:
                    </p>
                    <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                      <ul className="list-disc pl-6 text-gray-600 space-y-3">
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>To provide and maintain our services</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>To process your applications and requests</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>To communicate with you about our programs and opportunities</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>To improve our website and services</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>To comply with legal obligations</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>To protect the rights and safety of our users and organization</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div id="section-4" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
                  </div>
                  <div className="ml-14">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
                      <p className="text-gray-700">
                        <strong>Important:</strong> We do not sell, trade, or rent your personal information to third parties.
                      </p>
                    </div>
                    <p className="text-gray-600 mb-4">
                      We may share your information in the following circumstances:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-800">With Your Consent</h3>
                        </div>
                        <p className="text-gray-600 text-sm">When you explicitly agree to share your information</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-800">Service Providers</h3>
                        </div>
                        <p className="text-gray-600 text-sm">Companies that help us operate our website and services</p>
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <p className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>With partner organizations for internship and job placement purposes (with your explicit consent)</span>
                      </p>
                      <p className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>To comply with legal obligations</span>
                      </p>
                      <p className="flex items-start">
                        <svg className="w-5 h-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>To protect and defend our rights and property</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Section 5 */}
                <div id="section-5" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
                  </div>
                  <div className="ml-14">
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Security Measures</h3>
                        <p className="text-gray-600">
                          We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <div className="flex items-start">
                        <svg className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.346 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                        <p className="text-gray-700">
                          <strong>Important Notice:</strong> No method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div id="section-6" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-indigo-600 font-bold">6</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-600 mb-6">
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {[
                        { title: "Right to Access", desc: "Access your personal information" },
                        { title: "Right to Correct", desc: "Correct inaccurate information" },
                        { title: "Right to Delete", desc: "Request deletion of your information" },
                        { title: "Right to Restrict", desc: "Restrict or object to processing" },
                        { title: "Right to Portability", desc: "Data portability rights" },
                        { title: "Right to Withdraw", desc: "Withdraw consent at any time" }
                      ].map((right, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center mb-2">
                            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                              <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800">{right.title}</h3>
                          </div>
                          <p className="text-gray-600 text-sm">{right.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-gray-700">
                        <strong>To exercise these rights:</strong> Please contact us at <a href="mailto:info@weslux.lu" className="text-indigo-600 hover:underline">info@weslux.lu</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7 - GDPR */}
                <div id="section-7" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">7</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">GDPR Compliance</h2>
                  </div>
                  <div className="ml-14">
                    <div className="mb-6">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">GDPR Compliance Statement</h3>
                      </div>
                      <p className="text-gray-600 mb-4">
                        WES Luxembourg for Education complies with the General Data Protection Regulation (GDPR) (EU) 2016/679, which provides data protection and privacy for individuals within the European Union and the European Economic Area.
                      </p>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Legal Basis for Processing</h3>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        {[
                          { title: "Consent", desc: "Clear consent for specific purposes" },
                          { title: "Contract", desc: "Necessary for contract performance" },
                          { title: "Legal Obligation", desc: "Compliance with legal requirements" },
                          { title: "Legitimate Interests", desc: "Our legitimate interests unless overridden" }
                        ].map((basis, index) => (
                          <div key={index} className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-1">{basis.title}</h4>
                            <p className="text-gray-600 text-sm">{basis.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Protection Officer</h3>
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-1">Role</h4>
                            <p className="text-gray-600">Data Protection Officer</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-1">Email</h4>
                            <p className="text-gray-600">info@weslux.lu</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-1">Address</h4>
                            <p className="text-gray-600">18, Rue Nicolas Meyers, L-4918 Bascharage, Luxembourg</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">International Data Transfers</h3>
                      <p className="text-gray-600 mb-4">
                        As an organization operating in Luxembourg with international programs, we may transfer personal data to countries outside the European Economic Area (EEA). When we do so, we ensure appropriate safeguards are in place.
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Adequacy decisions by the European Commission</li>
                          <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
                          <li>Binding Corporate Rules (BCRs)</li>
                          <li>Other legally approved transfer mechanisms</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Data Breach Notification</h3>
                      <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <p className="text-gray-700">
                          In the event of a personal data breach, we will notify the relevant supervisory authority without undue delay and, where feasible, within 72 hours of becoming aware of the breach, unless the breach is unlikely to result in a risk to the rights and freedoms of individuals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section 8 - Cookies */}
                <div id="section-8" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-yellow-600 font-bold">8</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking Technologies</h2>
                  </div>
                  <div className="ml-14">
                    <div className="flex items-start mb-6">
                      <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-4">
                          We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <p className="text-gray-700">
                            <strong>Cookie Control:</strong> You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 9 - Third-Party Links */}
                <div id="section-9" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-teal-600 font-bold">9</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Third-Party Links</h2>
                  </div>
                  <div className="ml-14">
                    <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
                      <p className="text-gray-700">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 10 - Children's Privacy */}
                <div id="section-10" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-pink-600 font-bold">10</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Children's Privacy</h2>
                  </div>
                  <div className="ml-14">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-4">
                          Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16.
                        </p>
                        <div className="bg-pink-50 p-4 rounded-lg">
                          <p className="text-gray-700">
                            <strong>Parental Notice:</strong> If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 11 - Changes */}
                <div id="section-11" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-gray-600 font-bold">11</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Changes to This Privacy Policy</h2>
                  </div>
                  <div className="ml-14">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-600 mb-4">
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                      </p>
                      <div className="border-t border-gray-300 pt-4">
                        <p className="text-gray-700">
                          <strong>Your Responsibility:</strong> You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 12 - Contact */}
                <div id="section-12" className="mb-12 scroll-mt-20">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold">12</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                  </div>
                  <div className="ml-14">
                    <p className="text-gray-600 mb-6">
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                          <p className="text-gray-600">info@weslux.lu</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                          <p className="text-gray-600">IN:CUBATOR 40, Boulevard Pierre Dupong L-1430 Luxembourg</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                          <p className="text-gray-600">+352 621 688 991</p>
                        </div>
                      </div>
                    </div>
                  </div>
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