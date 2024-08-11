import React, { useContext } from "react";
import { about } from "../../portfolio";
import { Fade } from "react-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2,    
  });

  if (!about.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects" ref={ref}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{about.title}</h1>
          <p className={`${isDark ? "text-gray-300" : "text-gray-700"} text-lg mb-8`}>
            {about.subtitle}
          </p>
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          <div className="text-center">
            <p className="text-5xl font-bold">
              {inView && <CountUp start={0} end={10} duration={2} />}
            </p>
            <p>Research Completed</p>
          </div>

          <div className="text-center">
            <p className="text-5xl font-bold">
              {inView && <CountUp start={0} end={15} duration={2} />}
            </p>
            <p>Years of Experience</p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
