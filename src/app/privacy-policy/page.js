import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
              <div className="prose prose-lg max-w-none">
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-4">
                    WES Luxembourg for Education ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website weslux.lu or use our services.
                  </p>
                  <p className="text-gray-600">
                    Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-600 mb-4">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>Register for an account</li>
                    <li>Apply for volunteer or ambassador positions</li>
                    <li>Submit internship or job applications</li>
                    <li>Contact us through our website</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Participate in our programs or events</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    This information may include your name, email address, phone number, educational background, professional experience, and other relevant details.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                  <p className="text-gray-600">
                    When you visit our website, we may automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">
                    We use the information we collect in the following ways:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>To provide and maintain our services</li>
                    <li>To process your applications and requests</li>
                    <li>To communicate with you about our programs and opportunities</li>
                    <li>To improve our website and services</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect the rights and safety of our users and organization</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>With your consent</li>
                    <li>With service providers who assist us in operating our website and services</li>
                    <li>With partner organizations for internship and job placement purposes (with your explicit consent)</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect and defend our rights and property</li>
                  </ul>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                  <p className="text-gray-600 mb-4">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <p className="text-gray-600">
                    However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                  <p className="text-gray-600 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
                    <li>The right to access your personal information</li>
                    <li>The right to correct inaccurate information</li>
                    <li>The right to request deletion of your information</li>
                    <li>The right to restrict or object to processing</li>
                    <li>The right to data portability</li>
                    <li>The right to withdraw consent</li>
                  </ul>
                  <p className="text-gray-600">
                    To exercise these rights, please contact us at privacy@weslux.lu.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600 mb-4">
                    We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
                  </p>
                  <p className="text-gray-600">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
                  <p className="text-gray-600">
                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
                  <p className="text-gray-600">
                    Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Privacy Policy</h2>
                  <p className="text-gray-600 mb-4">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                  <p className="text-gray-600">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                  </p>
                </div>

                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Us</h2>
                  <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy, please contact us:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-600 mb-2">
                      <strong>Email:</strong> info@weslux.lu
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Address:</strong> IN:CUBATOR 40, Boulevard Pierre Dupong L-1430 Luxembourg
                    </p>
                    <p className="text-gray-600">
                      <strong>Phone:</strong> +352 621 688 991 
                    </p>
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