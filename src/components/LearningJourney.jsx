// src/components/LearningJourney.jsx
import React from 'react';
import { FaYoutube } from 'react-icons/fa';

const LearningJourney = () => {
  const mentors = [
    {
      name: "CodeWithHarry",
      url: "https://www.youtube.com/@CodeWithHarry",
    },
    {
      name: "Apna College",
      url: "https://www.youtube.com/@ApnaCollegeOfficial",
    },
    {
      name: "Sheriyans Coding School",
      url: "https://www.youtube.com/@sheriyanscodingschool",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-10 px-6 rounded-xl shadow-lg max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-6 text-center ">
        📚 I learned Code From these three Teachers
      </h2>
      <ul className="space-y-4">
        {mentors.map((mentor, index) => (
          <li
            key={index}
            className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition"
          >
            <FaYoutube className="text-purple-500 text-3xl" />
            <a
              href={mentor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold hover:underline"
            >
              {mentor.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningJourney;
