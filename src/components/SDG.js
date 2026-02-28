'use client';

export default function SDG() {
  const sdgs = [
    { 
      number: 4, 
      title: "Quality Education",
      description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all",
      color: "from-blue-500 to-blue-600"
    },
    { 
      number: 5, 
      title: "Gender Equality",
      description: "Achieve gender equality and empower all women and girls",
      color: "from-yellow-500 to-yellow-600"
    },
    { 
      number: 8, 
      title: "Decent Work",
      description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all",
      color: "from-red-500 to-red-600"
    },
    { 
      number: 9, 
      title: "Industry & Innovation",
      description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation",
      color: "from-orange-500 to-orange-600"
    },
    { 
      number: 10, 
      title: "Reduced Inequalities",
      description: "Reduce inequality within and among countries",
      color: "from-purple-500 to-purple-600"
    },
    { 
      number: 17, 
      title: "Partnerships",
      description: "Strengthen the means of implementation and revitalize the Global Partnership for Sustainable Development",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Commitment to <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">SDGs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We align our work with the United Nations Sustainable Development Goals to create lasting positive impact
          </p>
        </div>

        {/* SDG Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {sdgs.map((sdg) => (
            <div 
              key={sdg.number} 
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-gray-200 transition-all duration-500 overflow-hidden"
            >
              {/* SDG Header with Gradient */}
              <div className={`bg-gradient-to-r ${sdg.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <span className="text-sm font-bold text-white">SDG {sdg.number}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{sdg.title}</h3>
                      <p className="text-white/80 text-sm">Goal {sdg.number}</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* SDG Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {sdg.description}
                </p>
                
                {/* SDG Image */}
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-gray-100 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                    <img 
                      src={`/sdg/sdg-${sdg.number}.png`} 
                      alt={`SDG ${sdg.number}: ${sdg.title}`}
                      className="w-32 h-32 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-32 h-32 flex items-center justify-center';
                        fallback.innerHTML = `
                          <div class="text-center">
                            <div class="text-4xl font-bold text-gray-300">${sdg.number}</div>
                            <div class="text-sm text-gray-400 mt-2">SDG</div>
                          </div>
                        `;
                        e.target.parentNode.appendChild(fallback);
                      }}
                    />
                  </div>
                </div>

                {/* Our Contribution */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Our Contribution:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Educational programs and mentorship</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Partnerships with organizations</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-600">Community outreach initiatives</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our SDG Impact</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">6</div>
                <div className="text-sm text-gray-600 font-semibold">SDGs Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50+</div>
                <div className="text-sm text-gray-600 font-semibold">SDG-Aligned Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-sm text-gray-600 font-semibold">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5K+</div>
                <div className="text-sm text-gray-600 font-semibold">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in our mission to contribute to the Sustainable Development Goals and create a better future for all
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/impact" 
              className="px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn About Our Impact
            </a>
            <a 
              href="/support" 
              className="px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow"
            >
              Support Our Mission
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}