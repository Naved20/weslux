'use client';

export default function PartnersShowcase() {
  const partners = [
    {
      id: 1,
      name: "Tech Corp",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80",
      category: "Technology",
      description: "Leading technology solutions provider"
    },
    {
      id: 2,
      name: "Innovation Labs",
      logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&q=80",
      category: "Research",
      description: "Cutting-edge research and development"
    },
    {
      id: 3,
      name: "Global Education",
      logo: "https://images.unsplash.com/photo-1599658880436-c61792e70672?w=200&q=80",
      category: "Education",
      description: "International educational initiatives"
    },
    {
      id: 4,
      name: "Future Skills",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&q=80",
      category: "Training",
      description: "Professional development programs"
    },
    {
      id: 5,
      name: "Digital Solutions",
      logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80",
      category: "Technology",
      description: "Digital transformation specialists"
    },
    {
      id: 6,
      name: "Smart Industries",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&q=80",
      category: "Manufacturing",
      description: "Industrial innovation leaders"
    },
    {
      id: 7,
      name: "EduTech Alliance",
      logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80",
      category: "Education",
      description: "Educational technology pioneers"
    },
    {
      id: 8,
      name: "Sustainable Future",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=200&q=80",
      category: "Sustainability",
      description: "Environmental and social impact"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with industry leaders and innovative organizations to drive educational transformation
          </p>
        </div>

        {/* Animated Grid */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-500 h-full flex flex-col items-center text-center">
                  {/* Logo Container with Gradient Border */}
                  <div className="relative mb-6">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-gradient-to-br from-gray-50 to-white rounded-xl flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Partner Info */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 text-xs font-semibold rounded-full">
                      {partner.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {partner.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our growing network of partners committed to shaping the future of education
          </p>

        </div>
      </div>
    </section>
  );
}
