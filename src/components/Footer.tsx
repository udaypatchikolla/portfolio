import { ArrowUp } from 'lucide-react';
import uday from '../../images/udaygeneral cv.pdf';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-gray-400 max-w-md">
              Thank you for visiting my portfolio. If you'd like to discuss potential opportunities, feel free to get in touch.
            </p>
          </div>
          <div className="flex flex-col items-end">
            <button 
              onClick={scrollToTop}
              className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300 mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <a 
              href={uday} 
              download 
              className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Udaykiran. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://linkedin.com/in/udaykiran-patchikolla" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
            <a href="https://github.com/udaypatchikolla" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
            <a href="mailto:udaykiranpatchikolla@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;