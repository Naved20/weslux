export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your support changes a learner's life</h2>
          <p className="text-xl text-gray-600 mb-10">
            Partner, volunteer, or contribute — every action strengthens mentorship and education access.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
              Support WES Lux
            </button>
            <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium">
              Download Flow Chart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}