export default function SDG() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Supporting Sustainable Development Goals</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-5xl font-bold mb-4">4</div>
            <h3 className="text-xl font-bold mb-3">Quality Education</h3>
            <p className="text-blue-100">Ensuring inclusive and equitable quality education</p>
          </div>
          
          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-5xl font-bold mb-4">8</div>
            <h3 className="text-xl font-bold mb-3">Decent Work</h3>
            <p className="text-blue-100">Promoting sustained economic growth and productive employment</p>
          </div>
          
          <div className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-5xl font-bold mb-4">10</div>
            <h3 className="text-xl font-bold mb-3">Reduced Inequalities</h3>
            <p className="text-blue-100">Reducing inequality within and among countries</p>
          </div>
        </div>
      </div>
    </section>
  );
}