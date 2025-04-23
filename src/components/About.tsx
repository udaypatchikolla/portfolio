const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mb-6"></div>
          <div className="space-y-4">
            <p className="text-gray-600">
              I am a Full-Stack Web Developer with expertise in building dynamic and scalable web applications using React, Node.js, Java. I specialize in creating responsive user interfaces, developing RESTful APIs, and integrating cloud services like AWS for seamless deployment. With a strong focus on performance optimization and best coding practices, I ensure efficient and user-friendly web experiences.
            </p>
            <p className="text-gray-600">
              My expertise lies in HTML, CSS, JavaScript, and modern frontend frameworks like 
              React. I'm also proficient in UI/UX design principles and tools like Figma and Adobe XD.
            </p>
            <p className="text-gray-600">
              When I'm not coding, you can find me exploring new design trends, contributing to 
              open-source projects, or enjoying outdoor activities like hiking and photography.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <div>
                <h3 className="font-semibold text-gray-800">Name:</h3>
                <p className="text-gray-600">Patchikolla Udaykiran</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Email:</h3>
                <p className="text-gray-600">udaykiranpatchikolla@gmail.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Phone:</h3>
                <p className="text-gray-600">+91 784160 13420 </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Location:</h3>
                <p className="text-gray-600">Vizianagaram, Andhra Pradesh,India</p>
              </div>
              
            </div>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-gray-800">Coding Profiles:</h3>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://leetcode.com/u/udaykiranpatchikolla/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  LeetCode
                </a>
                <a 
                  href="https://www.geeksforgeeks.org/user/udaykiranpaidd7/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  GeeksforGeeks
                </a>
                <a 
                  href="https://github.com/udaypatchikolla" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;