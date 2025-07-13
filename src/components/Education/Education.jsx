import React from "react";
import LearningJourney from "../LearningJourney";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>
      {/* tell that i have get 87% marks in matric and 447 marks out of 545 in inter part one and part 2 result is coming soon */}
      <div className="text-center mb-8">
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I have achieved 87% marks in Matriculation and scored 447 out of 545 in Inter Part One. The result for Part Two is coming soon!
        </p>
      </div>
      <LearningJourney />

    </section>
  );
};

export default Education;
