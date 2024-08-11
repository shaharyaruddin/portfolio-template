import React from "react";
import { illustration, techStack } from "../../portfolio";
import { Fade } from "react-reveal";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="max-w-5xl mx-auto p-4">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Skills</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage,
              };
              return (
                <div key={i} className="mb-4">
                  <p className="text-lg font-medium mb-2">{exp.Stack}</p>
                  <div className="w-full bg-gray-300 rounded-full h-4">
                    <span
                      style={progressStyle}
                      className="block bg-blue-600 h-4 rounded-full transition-all duration-500"
                    ></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
