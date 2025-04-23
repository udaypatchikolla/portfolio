import { Github as GitHub, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 pb-16 md:pt-36 md:pb-24 relative bg-gradient-to-br from-indigo-50 to-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Hi, I'm <span className="text-indigo-600">Udaykiran Patchikolla</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mt-2 mb-6">
              Full Stack Web Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-md">
              I create beautiful, functional, and accessible websites that deliver exceptional user experiences. 
              Let's bring your digital vision to life!
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:udaykiranpatchikolla@gmal.com" 
                className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300"
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-md font-medium hover:bg-indigo-50 transition-colors duration-300"
              >
                View Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a 
                href="https://github.com/udaypatchikolla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <GitHub size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/udaykiran-patchikolla" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:udaykiranpatchikolla@gmail.com" 
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-2/5 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="images/photoofmine.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-lg">
              <div className="text-sm font-semibold text-gray-700">Fresher</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;