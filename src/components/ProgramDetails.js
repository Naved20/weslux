import Link from 'next/link';

export default function ProgramDetails() {
  return (
    <section id="program" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Program Details</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/programs/mentorship" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-blue-600 font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Mentorship Program</h3>
            <p className="text-gray-600">
              Comprehensive mentorship program connecting students and young professionals with experienced mentors for 
              career guidance, skill development, and professional growth.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                One-on-one mentorship sessions
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Career guidance and planning
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Professional development
              </li>
            </ul>
          </Link>
          
          <Link href="/programs/tech-connect" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-green-600 font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Global Tech Connect</h3>
            <p className="text-gray-600 mb-4">
              International technology and knowledge exchange program connecting Luxembourg with global tech ecosystems.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                International tech partnerships
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Global networking opportunities
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Technology knowledge sharing
              </li>
            </ul>
          </Link>
          
          <Link href="/programs/industrial-visit" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-purple-600 font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Exposure Visit</h3>
            <p className="text-gray-600 mb-4">
              Hands-on industrial visits and exposure to real-world industry practices and corporate environments.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Industry site visits
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Corporate exposure
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Practical industry insights
              </li>
            </ul>
          </Link>
        </div>


      </div>
    </section>
  );
}