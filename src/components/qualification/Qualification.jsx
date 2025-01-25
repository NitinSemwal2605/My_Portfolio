import React, { useState } from "react";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification" className="py-16 ">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Qualifications</h2>
        <span className="text-sm text-gray-600">My Personal Journey</span>
      </div>

      <div className="container mx-auto mt-10">
        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-8">
          <button
            className={`py-2 px-6 text-lg font-medium rounded-md ${
              toggleState === 1
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap mr-2"></i>Education
          </button>
          <button
            className={`py-2 px-6 text-lg font-medium rounded-md ${
              toggleState === 2
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt mr-2"></i>Experience
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8">
          {/* Education Section */}
          {toggleState === 1 && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="relative pl-8 border-l-2 border-gray-300">
                {/* First Entry */}
                <div className="mb-8">
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                    <i className="uil uil-book-open"></i>
                  </div>
                  <h3 className="text-xl font-semibold">Senior Secondary Education</h3>
                  <p className="text-gray-600">Police Modern School, Haridwar</p>
                  <span className="text-sm text-gray-500 flex items-center mt-2">
                    <i className="uil uil-calendar-alt mr-2"></i>2022
                  </span>
                </div>

                {/* Second Entry */}
                <div>
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                    <i className="uil uil-graduation-cap"></i>
                  </div>
                  <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
                  <p className="text-gray-600">Chandigarh University</p>
                  <span className="text-sm text-gray-500 flex items-center mt-2">
                    <i className="uil uil-calendar-alt mr-2"></i>2022-Present
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {toggleState === 2 && (
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="relative pl-8 border-l-2 border-gray-300">
                <div>
                  <div className="absolute -left-4 top-0 w-8 h-8 bg-black text-white flex items-center justify-center rounded-full">
                    <i className="uil uil-briefcase"></i>
                  </div>
                  <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
                  <p className="text-gray-600">OctaNet Services Pvt Ltd.</p>
                  <span className="text-sm text-gray-500 flex items-center mt-2">
                    <i className="uil uil-calendar-alt mr-2"></i>Feb 2024-Present
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
