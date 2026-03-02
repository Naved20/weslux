'use client';

import { Header, Footer } from '@/components';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function CompaniesPage() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    organizationType: '',
    interests: [],
    message: ''
  });
  const fileInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prev => ({
          ...prev,
          interests: [...prev.interests, value]
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          interests: prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = ['fullName', 'organization', 'email', 'phone', 'organizationType'];
    const isValid = requiredFields.every(field => formData[field].trim());
    
    if (!isValid) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Here you would typically send the form data to a server
    // For now, we'll just show the success modal
    console.log('Form data:', formData);
    console.log('Files:', selectedFiles);
    
    // Reset form
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      phone: '',
      organizationType: '',
      interests: [],
      message: ''
    });
    setSelectedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    
    // Show success message
    setShowForm(false);
    setShowSuccess(true);
  };

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);
  const closeSuccess = () => setShowSuccess(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-600 font-semibold text-sm">Partner Category 2</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Companies
              </h1>
              <p className="text-xl text-gray-600">
                Partner with us to shape the future workforce and give back to the community
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Partner With Us?</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Corporate partnerships are at the heart of our mission to connect education with industry. 
                  By partnering with WES Luxembourg, your company can make a lasting impact on the next generation 
                  while building a pipeline of skilled talent.
                </p>
                <p>
                  We offer flexible partnership opportunities that align with your corporate social responsibility 
                  goals and business objectives.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Talent Pipeline</h3>
                <p className="text-gray-600">
                  Connect with motivated students and identify future talent for your organization.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Employee Engagement</h3>
                <p className="text-gray-600">
                  Engage your employees as mentors and volunteers, boosting morale and retention.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Brand Visibility</h3>
                <p className="text-gray-600">
                  Enhance your corporate reputation through meaningful community engagement and CSR initiatives.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Access</h3>
                <p className="text-gray-600">
                  Gain fresh perspectives and innovative ideas from the next generation of professionals.
                </p>
              </div>
            </div>

            {/* How to Partner With Us Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Partner With Us</h2>
              <p className="text-gray-600 mb-8">
                Partnering with WES Luxembourg is a straightforward process designed to create meaningful impact. 
                We work closely with companies to develop partnerships that align with your goals and our mission.
              </p>

              {/* Partner Onboarding Steps */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Partner Onboarding Steps</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-blue-600">1</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Discussion</h4>
                    <p className="text-sm text-gray-600">Initial meeting to understand mutual goals and opportunities</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-green-600">2</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">MOU</h4>
                    <p className="text-sm text-gray-600">Memorandum of Understanding outlining partnership terms</p>
                    <a 
                      href="/MOU/WES Lux_MoU_With Companies.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm text-green-600 hover:text-green-700 font-medium"
                    >
                      View Sample MOU →
                    </a>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-purple-600">3</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Onboarding</h4>
                    <p className="text-sm text-gray-600">Integration into our partner network and program setup</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-orange-600">4</div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">Documentation</h4>
                    <p className="text-sm text-gray-600">Final document submission and partnership activation</p>
                  </div>
                </div>
              </div>

              {/* Partnership Form Trigger */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Do you want to become a partner with us?</h3>
                    <p className="text-gray-600">Start your partnership journey by submitting your details</p>
                  </div>
                  <button 
                    onClick={openForm}
                    className="px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Partnership Process
                  </button>
                </div>
              </div>
            </div>

            {/* Partnership Form Modal */}
            {showForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Glassmorphism Background with Blur */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-md backdrop-saturate-150"></div>
                
                {/* Modal Container with Pop-up Animation */}
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20 animate-scaleIn">
                  {/* Modal Header */}
                  <div className="sticky top-0 bg-white/80 backdrop-blur-sm z-10 border-b border-gray-200/50 p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">Partnership Application</h3>
                        <p className="text-sm text-gray-600 mt-1">Join us in creating meaningful impact through education</p>
                      </div>
                      <button 
                        onClick={closeForm}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-300 hover:scale-110"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Modal Content */}
                  <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-transparent focus:bg-white transition-all duration-300"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Organization Name *
                          </label>
                          <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-transparent focus:bg-white transition-all duration-300"
                            placeholder="Enter organization name"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-transparent focus:bg-white transition-all duration-300"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-transparent focus:bg-white transition-all duration-300"
                            placeholder="Enter phone number"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Organization Type *
                        </label>
                        <select
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-transparent focus:bg-white transition-all duration-300"
                        >
                          <option value="">Select organization type</option>
                          <option value="corporation">Corporation</option>
                          <option value="sme">Small & Medium Enterprise</option>
                          <option value="startup">Startup</option>
                          <option value="nonprofit">Non-profit Organization</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Partnership Interest *
                        </label>
                        <div className="space-y-2 bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200/30">
                          <label className="flex items-center p-2 hover:bg-white/50 rounded-lg transition-all duration-300">
                            <input 
                              type="checkbox" 
                              name="interests" 
                              value="mentorship" 
                              checked={formData.interests.includes('mentorship')}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500/50" 
                            />
                            <span className="ml-3 text-gray-700">Mentorship Program</span>
                          </label>
                          <label className="flex items-center p-2 hover:bg-white/50 rounded-lg transition-all duration-300">
                            <input 
                              type="checkbox" 
                              name="interests" 
                              value="internships" 
                              checked={formData.interests.includes('internships')}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500/50" 
                            />
                            <span className="ml-3 text-gray-700">Internship Placements</span>
                          </label>
                          <label className="flex items-center p-2 hover:bg-white/50 rounded-lg transition-all duration-300">
                            <input 
                              type="checkbox" 
                              name="interests" 
                              value="visits" 
                              checked={formData.interests.includes('visits')}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500/50" 
                            />
                            <span className="ml-3 text-gray-700">Industrial Visits</span>
                          </label>
                          <label className="flex items-center p-2 hover:bg-white/50 rounded-lg transition-all duration-300">
                            <input 
                              type="checkbox" 
                              name="interests" 
                              value="sponsorship" 
                              checked={formData.interests.includes('sponsorship')}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500/50" 
                            />
                            <span className="ml-3 text-gray-700">Sponsorship/CSR</span>
                          </label>
                          <label className="flex items-center p-2 hover:bg-white/50 rounded-lg transition-all duration-300">
                            <input 
                              type="checkbox" 
                              name="interests" 
                              value="other" 
                              checked={formData.interests.includes('other')}
                              onChange={handleInputChange}
                              className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500/50" 
                            />
                            <span className="ml-3 text-gray-700">Other (please specify in message)</span>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows="4"
                          className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 rounded-xl focus:ring-2 focus:ring-green-500/50 focus:border-transparent focus:bg-white transition-all duration-300"
                          placeholder="Tell us about your partnership goals and how you'd like to collaborate..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Upload Documents (Optional)
                        </label>
                        <div className="border-2 border-dashed border-gray-300/50 rounded-xl p-6 text-center bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300">
                          <input
                            ref={fileInputRef}
                            type="file"
                            name="documents"
                            multiple
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.txt"
                            className="hidden"
                            id="fileUpload"
                          />
                          <label htmlFor="fileUpload" className="cursor-pointer">
                            {selectedFiles.length > 0 ? (
                              <>
                                <svg className="w-10 h-10 text-green-600 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="text-gray-700 font-medium mb-1">{selectedFiles.length} file(s) selected</p>
                                <p className="text-sm text-gray-500 truncate px-4">
                                  {selectedFiles.map(f => f.name).join(', ')}
                                </p>
                                <button 
                                  type="button"
                                  onClick={() => {
                                    setSelectedFiles([]);
                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                  }}
                                  className="mt-2 text-sm text-red-500 hover:text-red-700"
                                >
                                  Clear files
                                </button>
                              </>
                            ) : (
                              <>
                                <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                                <p className="text-gray-700 font-medium mb-2">Click to upload documents or proposals</p>
                                <p className="text-sm text-gray-500">PDF, DOC, DOCX, TXT (Max 10MB)</p>
                              </>
                            )}
                          </label>
                        </div>
                      </div>

                      <div className="flex items-start bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200/30">
                        <input
                          type="checkbox"
                          id="privacyPolicy"
                          required
                          className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500/50 mt-1"
                        />
                        <label htmlFor="privacyPolicy" className="ml-3 text-sm text-gray-600">
                          I agree to the <a href="/privacy-policy" className="text-green-600 hover:text-green-700 font-medium">Privacy Policy</a> and consent to being contacted regarding partnership opportunities
                        </label>
                      </div>

                      <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200/30">
                        <button
                          type="button"
                          onClick={closeForm}
                          className="px-6 py-3 bg-white/50 backdrop-blur-sm border border-gray-300/50 text-gray-700 font-medium rounded-xl hover:bg-white hover:border-gray-300 transition-all duration-300 hover:scale-105"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="px-6 py-3 bg-gradient-to-r from-green-600/90 to-blue-600/90 backdrop-blur-sm text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Submit Application
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {/* Success Message Modal */}
            {showSuccess && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in partnering with WES Luxembourg. Our team will review your application and contact you within 3-5 business days.
                  </p>
                  <button
                    onClick={closeSuccess}
                    className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}

            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help or Have a Question?</h2>
              <p className="text-lg mb-6 text-green-100">
                If you have any queries, concerns, or need more information about partnerships, feel free to reach out to us. Our team is here to assist you.
              </p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Add CSS for animations */}
      <style jsx global>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        /* Ensure the main content is blurred when modal is open */
        .fixed + main {
          filter: blur(4px);
          transition: filter 0.3s ease;
        }
      `}</style>
    </div>
  );
}