import Link from 'next/link';

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Partners and With Us</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Link href="/partners/schools" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Schools</h3>
            </div>
            <p className="text-gray-600">Educational institutions partnership for student mentorship programs</p>
          </Link>
          
          <Link href="/partners/companies" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Companies</h3>
            </div>
            <p className="text-gray-600">Industry collaboration and employee mentorship programs</p>
          </Link>
          
          <Link href="/partners/government" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">For Government & Social Organizations</h3>
            </div>
            <p className="text-gray-600">Public sector and social organization partnerships</p>
          </Link>
          
          <Link href="/partners/cso" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Civil Society Organizations</h3>
            </div>
            <p className="text-gray-600">Non-profit and community organization collaborations</p>
          </Link>
          
          <Link href="/partners/companies" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-red-600 font-bold">5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Corporate Partners</h3>
            </div>
            <p className="text-gray-600">Business sector partnerships for mentorship initiatives</p>
          </Link>
          
          <Link href="/partners/schools" className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                <span className="text-indigo-600 font-bold">6</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Educational Institutions</h3>
            </div>
            <p className="text-gray-600">Universities, colleges, and training centers collaboration</p>
          </Link>
        </div>
      </div>
    </section>
  );
}