import React, { useContext } from "react";
import { about } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  if (!about.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{about.title}</h1>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg mb-8`}>
            {about.subtitle}
          </p>
        </div>

        <div className="  flex justify-center space-x-8 mt-8">
          {/* Research Completed */}
          <div className="text-center">
            
            <p className="text-5xl font-bold">10+</p>
            <p> Research Completed</p>
          </div>

          {/* Years of Experience */}
          <div className="text-center">
            <p className="text-5xl font-bold">15+</p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
