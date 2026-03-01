export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-12 items-center">

          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Luxembourg?</h3>
              <div className="space-y-4">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Diverse International Environment</h4>
                  <p className="text-gray-600 text-sm">Luxembourg's education system and workforce bring together cultures, languages, and ideas.</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Need for Career Guidance</h4>
                  <p className="text-gray-600 text-sm">Many students face uncertainty in making choices beyond academics.</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Strong Ecosystem</h4>
                  <p className="text-gray-600 text-sm">Schools, universities, and global companies concentrated in a small country.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}