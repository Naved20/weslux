import { Header, Footer } from '@/components';

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Vision & <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Mission</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our guiding principles that shape everything we do at WES Luxembourg for Education.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To bridge the gap between education and industry by providing students with mentorship, global connections, and real-world exposure that prepares them for successful careers.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We are committed to creating pathways that connect academic learning with professional practice, ensuring students gain the skills, confidence, and opportunities needed to thrive in today's competitive world.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg">
                  <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    To create a world where every student has access to quality mentorship and opportunities that unlock their full potential and contribute to sustainable development.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    We envision a future where education is not limited by geography or resources, where every student can connect with mentors, gain practical experience, and build the skills needed to become leaders and innovators in their chosen fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Achieve Our Mission */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How We Achieve Our Mission</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship Programs</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Connecting students with experienced professionals who provide guidance, support, and industry insights.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Global Connections</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Building international networks that provide students with diverse perspectives and opportunities.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Exposure</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Providing hands-on experience through industrial visits, internships, and practical projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We are committed to transforming education by making mentorship and real-world experience accessible to every student. Our vision and mission guide every program we develop, every partnership we form, and every student we serve.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-2xl shadow-lg">
                <p className="text-gray-700 italic text-lg">
                  "Education is not preparation for life; education is life itself. We believe in empowering students to learn, grow, and succeed through meaningful connections and practical experiences."
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