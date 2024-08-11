import React, { useContext } from "react";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import manOnTable from "../../assets/images/researcher1.png";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div
        className="flex flex-col md:flex-row items-center justify-center py-10 px-4 md:px-10 lg:px-20"
        id="greeting"
      >
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <div>
            <h1
              className={`text-4xl font-bold pt-7 md:mt-2 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              {greeting.title}
            </h1>
            <p
              className={`mt-4 text-lg ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {greeting.subTitle}
            </p>
            <div className="mt-6">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <a
                  href={require("./resume.pdf")}
                  download="Resume.pdf"
                  className="ml-4"
                >
                  <Button text="Download my resume" />
                </a>
              )}
            </div>
          </div>
        </div>
        <div
  style={{
    width: "100%",
    maxWidth: "24rem", // Equivalent to max-w-sm or max-w-md in Tailwind
    marginBottom: "2.5rem", // Equivalent to mb-10 in Tailwind
    margin: "0 auto",
    textAlign: "center",
  }}
>
  <img
    alt="man sitting on table"
    src={manOnTable}
    style={{
      width: "100%",
      height: "auto",
      borderRadius: "0.75rem", // Equivalent to rounded-xl in Tailwind
    }}
  />
</div>

      </div>
    </Fade>
  );
}
