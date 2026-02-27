export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision & Mission</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">The Mentorship Program</h3>
                <p className="text-gray-700">
                  We search, select, and introduce children, students, and young professionals in Luxembourg to experienced mentors who guide and prepare them for their academic, professional, and career paths.
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">The Mentor's Role</h3>
                <p className="text-gray-700">
                  Mentors help mentees discover interests, identify potential career opportunities, develop study plans, and work toward their goals.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  To build a supportive network that helps the next generation learn, grow, and thrive in Luxembourg.
                </p>
              </div>
            </div>
          </div>
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