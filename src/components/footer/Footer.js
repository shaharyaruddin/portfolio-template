import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className={`py-6 text-center ${isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
        <p className="flex  justify-center font-bold text-lg">
          {emoji("Made with by quantumQuillsLabs Team ❤️ ")}
        </p>
        <p className="text-lg mt-2">
          Theme by{" "}
          <a
            href="https://www.quantumquillslabs.com/"
            className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
          >
            quantumQuillsLabs
          </a>
        </p>
        <div className="mt-4 flex justify-center space-x-4">

          <a href="https://github.com/quantumquillslabs" className="text-gray-800 dark:text-white hover:text-gray-500 dark:hover:text-gray-400 transition-transform transform hover:scale-110">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://linkedin.com/company/quantumquillslabs" className="text-blue-700 hover:text-blue-900 transition-transform transform hover:scale-110">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
        </div>
      </div>
    </Fade>
  );
}
