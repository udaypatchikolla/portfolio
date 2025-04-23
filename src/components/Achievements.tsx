import { useState } from 'react';
import { Trophy, X } from 'lucide-react';
import hack from '../../images/hackathon.jpg';
type Achievement = {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
};

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: 1,
      title: "3rd Position in ICP Hackathon",
      description: "Secured third place in the ICP hackathon on 2024.",
      date: "October 2023",
      imageUrl: "/images/hackathon.jpg"
    }
  ];

  return (
    <section id="achievements" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Achievements</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            A showcase of milestones and recognition I've received throughout my professional journey.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {achievements.map(achievement => (
            <div 
              key={achievement.id} 
              className="bg-gray-50 rounded-lg p-6 flex cursor-pointer hover:shadow-md transition-shadow duration-300"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="flex-shrink-0 mr-4 bg-indigo-100 p-3 rounded-full text-indigo-600">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{achievement.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{achievement.date}</p>
                <p className="text-gray-600 line-clamp-2">{achievement.description}</p>
                <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-3 bg-indigo-100 p-2 rounded-full text-indigo-600">
                  <Trophy size={20} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{selectedAchievement.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedAchievement(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-4 h-64 overflow-hidden rounded-lg">
                <img 
                  src={selectedAchievement.imageUrl} 
                  alt={selectedAchievement.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-600 mb-2">Date: <span className="font-medium">{selectedAchievement.date}</span></p>
              <p className="text-gray-600 mb-4">{selectedAchievement.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;