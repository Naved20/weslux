export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How the Mentorship Program Works</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold text-xl">1</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Start & Profiles</h3>
            <p className="text-sm text-gray-600">Registration and profile creation</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold text-xl">2</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Apply & Review</h3>
            <p className="text-sm text-gray-600">Application and approval process</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 font-bold text-xl">3</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Journey</h3>
            <p className="text-sm text-gray-600">Meetings and progress tracking</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 font-bold text-xl">4</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Evaluate</h3>
            <p className="text-sm text-gray-600">Feedback and program assessment</p>
          </div>
        </div>
      </div>
    </section>
  );
}