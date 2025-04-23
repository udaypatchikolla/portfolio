import { useState } from 'react';
import { X } from 'lucide-react';

type Certificate = {
  id: number;
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl: string;
};

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: "Introduction to cloud computing",
      issuer: "NPTEL",
      date: "January 2023",
      imageUrl: "/images/cloudcerificaet.png",
      credentialUrl: "https://example.com/credential/1"
    },
    {
      id: 2,
      title: "Server side JavaScript with Node.js",
      issuer: "Coursera",
      date: "May 2024",
      imageUrl: "/images/nodejscertificate.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/CAAHM57584TT"
    },
    {
      id: 3,
      title: "Building Web Applications in PHP",
      issuer: "Coursera",
      date: "November 2024",
      imageUrl: "/images/phpcertificate.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/XQD57OYNKPJ0"
    },
    {
      id: 4,
      title: "Mastering Data Structures & AIgorithms using C and C++",
      issuer: "Udemy",
      date: "November 2023",
      imageUrl: "/images/dsacerficate.png",
      credentialUrl: "https://www.udemy.com/certificate/UC-ba92473a-091f-4336-8c7a-1a942a639c34/"
    },
    {
      id: 5,
      title: "Programming in C++:",
      issuer: "Coursera",
      date: "November 2023",
      imageUrl: "/images/c++cerficate.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/specialization/certificate/TY7MNEJL6FUJ"
    },
    {
      id: 6,
      title: "HTML, CSS, and Javascript for Web Developers",
      issuer: "Coursera",
      date: "July 2021",
      imageUrl: "/images/html,css.png",
      credentialUrl: "https://www.coursera.org/account/accomplishments/certificate/D48TCV6RGCHY"
    },
  ];

  return (
    <section id="certificates" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Certificates & Certifications</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            I'm committed to continuous learning. Here are some certifications I've earned throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(certificate => (
            <div 
              key={certificate.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={certificate.imageUrl} 
                  alt={certificate.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{certificate.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {certificate.issuer} • {certificate.date}
                </p>
                <button className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-semibold text-gray-800">{selectedCertificate.title}</h3>
              <button 
                onClick={() => setSelectedCertificate(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4 max-h-96 overflow-hidden rounded-lg">
                <img 
                  src={selectedCertificate.imageUrl} 
                  alt={selectedCertificate.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <p className="text-gray-600 mb-1">Issued by: <span className="font-medium">{selectedCertificate.issuer}</span></p>
                  <p className="text-gray-600">Date: <span className="font-medium">{selectedCertificate.date}</span></p>
                </div>
                <a 
                  href={selectedCertificate.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 sm:mt-0 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;