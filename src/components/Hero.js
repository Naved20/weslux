export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Mentorship • Education • Community
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            We create paths where talent meets opportunity.
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
            WESLUX (WES Luxembourg for Education) is a non-profit association based in Luxembourg, dedicated to creating opportunities for personal and professional growth by developing a Mentorship Program that bridges education and professional reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium text-lg">
              Apply as a Student
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium text-lg">
              Become a Mentor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}