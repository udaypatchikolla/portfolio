const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Bachelor of Technology in Computer Science</h3>
            <p className="text-gray-600 mb-2">Lovely Professional University</p>
            <p className="text-gray-500 mb-4">2022 - 2026</p>
            <p className="text-gray-600">CGPA: 7.47</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Intermediate</h3>
            <p className="text-gray-600 mb-2">Sri Chaitanya Junior Collage</p>
            <p className="text-gray-500 mb-4">2020 - 2022</p>
            <p className="text-gray-600">Percentage: 89.7%</p>
          </div>

          <br></br>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">10TH</h3>
            <p className="text-gray-600 mb-2">AP MODEL SCHOOL</p>
            <p className="text-gray-500 mb-4">2019 - 2020</p>
            <p className="text-gray-600">Percentage: 85%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;