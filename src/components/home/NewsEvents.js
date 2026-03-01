'use client';

export default function NewsEvents() {
  const newsItems = [
    {
      id: 1,
      title: "Tech Connect Program Launch",
      date: "March 15, 2026",
      category: "Event",
      description: "Join us for the launch of our new Tech Connect program connecting students with industry professionals.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
    },
    {
      id: 2,
      title: "Partnership with Leading Tech Companies",
      date: "March 10, 2026",
      category: "News",
      description: "We're excited to announce new partnerships with major tech companies to expand our mentorship program.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
      id: 3,
      title: "Industrial Visit Success Story",
      date: "March 5, 2026",
      category: "Event",
      description: "Over 200 students participated in our recent industrial visit program, gaining valuable industry insights.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">News & Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, events, and success stories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newsItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <span className="absolute top-4 right-4 bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                  {item.category}
                </span>
              </div>
              
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            View All News & Events
          </button>
        </div>
      </div>
    </section>
  );
}
