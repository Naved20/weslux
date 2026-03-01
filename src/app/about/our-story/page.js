import { Header, Footer } from '@/components';

export default function OurStoryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Story</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                The journey of WES Luxembourg for Education - from a simple idea to a transformative force in education.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
                
                {/* Timeline items */}
                <div className="space-y-16">
                  {/* 2018 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
                          2018
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">The Beginning</h3>
                        <p className="text-gray-600">
                          WES Luxembourg for Education was founded with a simple yet powerful belief: that every student deserves access to quality mentorship and real-world learning opportunities.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2"></div>
                  </div>

                  {/* 2019 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-3">
                          2019
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">First Programs Launch</h3>
                        <p className="text-gray-600">
                          We launched our first mentorship program, connecting 50 students with industry professionals. The positive impact was immediate and profound.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-3">
                          2020
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Expanding Reach</h3>
                        <p className="text-gray-600">
                          Despite global challenges, we expanded our programs to include virtual mentorship and launched the Global Tech Connect initiative.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2"></div>
                  </div>

                  {/* 2021 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-3">
                          2021
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership Growth</h3>
                        <p className="text-gray-600">
                          We established partnerships with schools, companies, and government organizations, creating a robust ecosystem for student development.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 2022 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-medium mb-3">
                          2022
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Industrial Visits</h3>
                        <p className="text-gray-600">
                          Launched the Industrial Exposure Visit program, providing students with hands-on experience in various industries and sectors.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2"></div>
                  </div>

                  {/* 2023 */}
                  <div className="relative flex items-center">
                    <div className="w-1/2"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2 pl-8">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-3">
                          2023
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
                        <p className="text-gray-600">
                          Developed the Mentorship App, making our programs more accessible and scalable across different regions and demographics.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Today */}
                  <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-sm font-medium mb-3">
                          Today
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Continuing Impact</h3>
                        <p className="text-gray-600">
                          We continue to grow, innovate, and impact thousands of students through our three core programs and extensive network of partners.
                        </p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                    <div className="w-1/2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Founding Story */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">The Founding Vision</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  WES Luxembourg for Education was born from a recognition of the growing gap between academic education and industry requirements. Our founders, a group of educators and industry professionals, noticed that many students were graduating with excellent academic records but lacked the practical skills, industry insights, and professional networks needed to succeed in their careers.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  They envisioned an organization that would bridge this gap - one that would connect students with mentors, provide real-world exposure, and create pathways to professional success. What started as a small initiative has grown into a comprehensive platform that impacts thousands of students each year.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we remain true to our founding vision while continuously adapting to meet the evolving needs of students and the changing landscape of education and industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Milestones</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5,000+</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Students Impacted</h3>
                  <p className="text-gray-600 text-sm">
                    Through our mentorship and educational programs
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Active Mentors</h3>
                  <p className="text-gray-600 text-sm">
                    Industry professionals guiding students
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Partner Organizations</h3>
                  <p className="text-gray-600 text-sm">
                    Schools, companies, and institutions
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Core Programs</h3>
                  <p className="text-gray-600 text-sm">
                    Mentorship, Tech Connect, Industrial Visits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking Ahead</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our story continues to unfold as we work towards our vision of creating a world where every student has access to quality mentorship and opportunities. We remain committed to innovation, collaboration, and impact as we write the next chapters of our journey.
              </p>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic text-lg">
                  "The story of WES Luxembourg for Education is not just about what we've accomplished, but about the countless stories of students whose lives have been transformed through mentorship, connection, and opportunity."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}