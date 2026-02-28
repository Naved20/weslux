'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SupportPage() {
  const scrollToForm = () => {
    const formSection = document.getElementById('donation-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Support <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">Our Mission</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Your generous support helps us empower students, connect them with mentors, and create opportunities that transform lives. Every contribution makes a difference.
              </p>
              <button 
                onClick={scrollToForm}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Donate Now
              </button>
            </div>
          </div>
        </section>

        {/* Impact of Donations */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Your Impact</h2>
              <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                See how your donation directly supports students and creates lasting change in education.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold text-blue-600">€50+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sponsor a Student</h3>
                  <p className="text-gray-600">
                    Provides one student with access to our mentorship program for three months, including resources and support materials.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold text-green-600">€150+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Fund a Workshop</h3>
                  <p className="text-gray-600">
                    Covers the cost of organizing a skill-building workshop for 20-30 students, including materials and facilitator fees.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg text-center">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-xl font-bold text-purple-600">€500+</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Support a Program</h3>
                  <p className="text-gray-600">
                    Enables us to organize an industrial visit or global tech connect session, benefiting 50+ students with real-world exposure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ways to Support */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Ways to Support</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">One-Time Donation</h3>
                      <p className="text-gray-600 mb-4">
                        Make a single contribution to support our programs. Every amount helps us reach more students and create more opportunities.
                      </p>
                      <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200">
                        Donate Once
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Monthly Giving</h3>
                      <p className="text-gray-600 mb-4">
                        Become a sustaining supporter with a recurring monthly donation. Provide consistent support that helps us plan and grow our programs.
                      </p>
                      <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                        Give Monthly
                      </button>
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Sponsorship</h3>
                      <p className="text-gray-600 mb-4">
                        Partner with us as a corporate sponsor. Support our mission while gaining visibility and demonstrating your commitment to education.
                      </p>
                      <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">In-Kind Donations</h3>
                      <p className="text-gray-600 mb-4">
                        Donate goods or services such as technology equipment, software licenses, venue space, or professional services.
                      </p>
                      <button className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200">
                        <Link href="/contact">
                        Contact Us
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Form */}
        <section id="donation-form" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 md:p-12 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Make a Donation</h2>
                <p className="text-gray-600 text-center mb-8">
                  Choose your donation amount and help us continue our mission to empower students worldwide.
                </p>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">Donation Type</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button type="button" className="px-6 py-3 border-2 border-green-600 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                        One-Time
                      </button>
                      <button type="button" className="px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200">
                        Monthly
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-4">Select Amount</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <button type="button" className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-green-600 hover:bg-green-50 transition-colors duration-200">
                        €25
                      </button>
                      <button type="button" className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-green-600 hover:bg-green-50 transition-colors duration-200">
                        €50
                      </button>
                      <button type="button" className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-green-600 hover:bg-green-50 transition-colors duration-200">
                        €100
                      </button>
                      <button type="button" className="px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-green-600 hover:bg-green-50 transition-colors duration-200">
                        €250
                      </button>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="custom-amount" className="block text-sm font-semibold text-gray-700 mb-2">
                      Or Enter Custom Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-4 top-3 text-gray-500 font-semibold">€</span>
                      <input
                        type="number"
                        id="custom-amount"
                        placeholder="0.00"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="donor-name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="donor-name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="donor-email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="donor-email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="anonymous"
                      className="mt-1 mr-3 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="anonymous" className="text-sm text-gray-600">
                      Make my donation anonymous
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg"
                  >
                    Complete Donation
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Your donation is secure and tax-deductible. You will receive a receipt via email.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Other Ways to Help */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Other Ways to Help</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
                  <p className="text-gray-600 mb-4">
                    Share your time and expertise as a mentor, speaker, or workshop facilitator.
                  </p>
                  <a href="/join-us/volunteer" className="text-blue-600 font-semibold hover:text-blue-700">
                    Learn More →
                  </a>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Spread the Word</h3>
                  <p className="text-gray-600 mb-4">
                    Share our mission with your network and help us reach more students and supporters.
                  </p>
                  <button className="text-green-600 font-semibold hover:text-green-700">
                    Share Now →
                  </button>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Partner With Us</h3>
                  <p className="text-gray-600 mb-4">
                    Explore partnership opportunities for your organization or institution.
                  </p>
                  <a href="/partners/companies" className="text-purple-600 font-semibold hover:text-purple-700">
                    Explore Options →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Transparency */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Commitment to Transparency</h2>
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-600 mb-6">
                  We believe in complete transparency with our donors. Your contributions are used responsibly to maximize impact on students' lives.
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">Program Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">10%</div>
                    <div className="text-sm text-gray-600">Administrative</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">5%</div>
                    <div className="text-sm text-gray-600">Fundraising</div>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  Annual reports and financial statements are available upon request.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Donors Say</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      R
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Robert Johnson</h3>
                      <p className="text-sm text-gray-600">Monthly Donor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Supporting WES Luxembourg has been one of the most rewarding decisions. Knowing that my monthly contribution helps students access mentorship and opportunities is incredibly fulfilling."
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      E
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Emily Watson</h3>
                      <p className="text-sm text-gray-600">Corporate Sponsor</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Our company's partnership with WES has been transformative. We've seen firsthand the impact on students and are proud to support such a vital mission in education."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Every Contribution Counts</h2>
              <p className="text-lg mb-8 text-green-100">
                Whether it's €10 or €1,000, your support helps us create opportunities that change lives. Join us in empowering the next generation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={scrollToForm}
                  className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Donate Now
                </button>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
