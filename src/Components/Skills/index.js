import React from "react";
import HTML from "../../Assets/Images/html.webp";
import Css from "../../Assets/Images/css3.png";
import Sass from "../../Assets/Images/sass.png";
import JavaScript from "../../Assets/Images/js.webp";
import ReactIcon from "../../Assets/Images/React-icon.png";
import Node from "../../Assets/Images/nodejs.png";
import Postman from "../../Assets/Images/postman.webp";
import swaggerIcon from "../../Assets/Images/swagger-icon.png";
import "./Style.scss";
import { useDarkMode } from "../../DarkModeContext";

const skills = [
  { name: "HTML 5", icon: HTML },
  { name: "CSS", icon: Css },
  { name: "SASS", icon: Sass },
  { name: "JavaScript", icon: JavaScript },
  { name: "React Js", icon: ReactIcon },
  { name: "Node Js", icon: Node },
  { name: "Postman", icon: Postman },
  { name: "Swagger", icon: swaggerIcon },
];

const Skills = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state

  return (
    <div id="skills" className={`Skills ${isDarkMode ? "dark" : "light"}`}>
      <div className="heading-text title">Skills & Technologies</div>
      <div className="skills-details">
        {skills.map((item, index) => (
          <div className={`card ${isDarkMode ? "dark" : "light"}`}
          // className="card"
           key={index}>
            <div className="skills-card">
              <div className="icon">
                <img src={item.icon} alt={item.name} />
              </div>
              <div className="label">{item.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
