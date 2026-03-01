"use client";
import { Header, Footer } from '@/components';
import Image from 'next/image';

export default function OurTeamPage() {
  const foundingTeam = [
    {
      name: "Mohmmad Arif",
      role: "Founder & President",
      bio: "Founder of WES Luxembourg for Education with extensive experience in the financial industry. Passionate about providing quality education to disadvantaged communities and bridging educational gaps.",
      image: "/team/Founding Team/arif.png",
      initials: "MA"
    },
    {
      name: "Rohit Pandey",
      role: "Co-Founder & Administrator",
      bio: "Technology professional with expertise in IT systems and digital transformation. Committed to leveraging technology for educational advancement and mentorship programs.",
      image: "/team/Founding Team/Rohit.png",
      initials: "RP"
    },
    {
      name: "Keshar Singh",
      role: "Co-Founder & Administrator",
      bio: "Financial industry professional dedicated to nonprofit management and educational initiatives. Focuses on sustainable development and community empowerment through education.",
      image: "/team/Founding Team/Keshar.png",
      initials: "KS"
    }
  ];

  const boardOfGovernance = [
    {
      name: "Isabel Rabadan Mosseray",
      role: "Business Development Director",
      bio: "Business development professional with international experience. Focuses on strategic partnerships, organizational growth, and international collaboration.",
      image: "/team/isabel-raba.jpg",
      initials: "IR"
    },
    {
      name: "Prof. Elena Rodriguez",
      role: "Education Policy Advisor",
      bio: "Professor of Education Policy at University of Luxembourg. Provides guidance on educational frameworks and international standards.",
      image: "/team/elena-rodriguez.jpg",
      initials: "ER"
    },
    {
      name: "Thomas Schmidt",
      role: "Technology & Innovation Advisor",
      bio: "CEO of European Tech Council. Advises on STEM education initiatives and industry-academia collaboration strategies.",
      image: "/team/thomas-schmidt.jpg",
      initials: "TS"
    },
    {
      name: "Dr. Fatima Al-Mansoori",
      role: "International Development Advisor",
      bio: "Director at UNESCO Education Division. Expert in international education policy and sustainable development goals.",
      image: "/team/fatima-al-mansoori.jpg",
      initials: "FA"
    },
    {
      name: "James Wilson",
      role: "Financial Governance Advisor",
      bio: "Former CFO of major European bank. Specializes in nonprofit financial management, compliance, and sustainability.",
      image: "/team/james-wilson.jpg",
      initials: "JW"
    }
  ];

  const coreTeam = [
    {
      name: "Amina Diallo",
      role: "Community Outreach Lead",
      bio: "Passionate about creating inclusive programs that reach underserved student communities across Europe.",
      image: "/team/amina-diallo.jpg",
      initials: "AD"
    },
    {
      name: "Robert Kim",
      role: "Mentorship Program Manager",
      bio: "Former HR director with expertise in talent development and mentor-mentee matching algorithms.",
      image: "/team/robert-kim.jpg",
      initials: "RK"
    },
    {
      name: "Sophie Martin",
      role: "Technology Director",
      bio: "Leads development of digital platforms and mentorship app infrastructure. Former software engineer at Amazon.",
      image: "/team/sophie-martin.jpg",
      initials: "SM"
    },
    {
      name: "Carlos Rodriguez",
      role: "Program Coordinator",
      bio: "Manages industrial visits and student placement programs. Background in event management and logistics.",
      image: "/team/carlos-rodriguez.jpg",
      initials: "CR"
    },
    {
      name: "Lisa Wang",
      role: "Communications Manager",
      bio: "Handles media relations, social media, and stakeholder communications. Former journalist at BBC.",
      image: "/team/lisa-wang.jpg",
      initials: "LW"
    },
    {
      name: "Mohammed Ali",
      role: "Finance & Operations Manager",
      bio: "Manages budgeting, grants, and operational efficiency. CPA with 10+ years nonprofit experience.",
      image: "/team/mohammed-ali.jpg",
      initials: "MA"
    }
  ];

  const ambassadors = [
    {
      name: "Emma Laurent",
      role: "Youth Ambassador",
      bio: "University student and former mentee. Represents student perspectives in program development.",
      image: "/team/emma-laurent.jpg",
      initials: "EL"
    },
    {
      name: "Kenji Tanaka",
      role: "Industry Ambassador",
      bio: "Tech entrepreneur and angel investor. Connects startups with student talent and mentorship opportunities.",
      image: "/team/kenji-tanaka.jpg",
      initials: "KT"
    },
    {
      name: "Maria Silva",
      role: "Education Ambassador",
      bio: "High school principal. Bridges gap between secondary education and industry requirements.",
      image: "/team/maria-silva.jpg",
      initials: "MS"
    },
    {
      name: "Ahmed Hassan",
      role: "Community Ambassador",
      bio: "Community leader focused on immigrant and refugee student integration into educational programs.",
      image: "/team/ahmed-hassan.jpg",
      initials: "AH"
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
                Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Team</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Meet the dedicated professionals, leaders, and ambassadors who make WES Luxembourg for Education possible.
              </p>
            </div>
          </div>
        </section>

        {/* Founding Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Founding Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The visionary leaders who established WES Luxembourg for Education and continue to guide our strategic direction.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {foundingTeam.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const fallback = e.target.parentNode.querySelector('.image-fallback');
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="image-fallback w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center" style={{ display: 'none' }}>
                            <span className="text-3xl font-bold text-white">{member.initials}</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                        <p className="text-gray-600 text-sm">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board of Governance */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Board of Governance</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our governing board provides strategic oversight, ensures accountability, and guides our long-term vision.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boardOfGovernance.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              const fallback = e.target.parentNode.querySelector('.image-fallback');
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          <div className="image-fallback w-full h-full bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center" style={{ display: 'none' }}>
                            <span className="text-2xl font-bold text-white">{member.initials}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-green-600 font-medium mb-2">{member.role}</p>
                        <p className="text-gray-600 text-sm">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Team</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The dedicated professionals who manage our day-to-day operations and program implementation.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {coreTeam.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                          {/* Placeholder for image */}
                          <div className="w-full h-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center">
                            <span className="text-xl font-bold text-white">{member.initials}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                        <p className="text-gray-600 text-sm">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ambassadors */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Ambassadors</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our ambassadors represent WES in various communities and sectors, helping us expand our reach and impact.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ambassadors.map((member, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center mb-4 relative overflow-hidden">
                          {/* Placeholder for image */}
                          <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                            <span className="text-lg font-bold text-white">{member.initials}</span>
                          </div>
                        </div>
                        <h3 className="text-md font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-orange-600 font-medium mb-2 text-sm">{member.role}</p>
                        <p className="text-gray-600 text-xs">{member.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Structure Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Team Structure</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{foundingTeam.length}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Founding Team</h3>
                  <p className="text-gray-600 text-sm">Visionary leaders and strategic direction</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">{boardOfGovernance.length}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Board Members</h3>
                  <p className="text-gray-600 text-sm">Governance and oversight</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{coreTeam.length}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Core Team</h3>
                  <p className="text-gray-600 text-sm">Operations and program management</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-lg text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">{ambassadors.length}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Ambassadors</h3>
                  <p className="text-gray-600 text-sm">Community representation and outreach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team */}
        <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                We're always looking for passionate individuals who share our commitment to transforming education through mentorship and opportunity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/join-us/volunteer" 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Volunteer Opportunities
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 hover:border-blue-600 transition-all duration-300"
                >
                  Career Inquiries
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