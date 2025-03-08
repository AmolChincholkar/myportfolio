import { Card } from "antd";
import React, { useContext } from "react";
import "./Style.scss";
import ComLogo from "../../Assets/Images/nivesh.png";
import { useDarkMode } from "../../DarkModeContext"; // Correctly importing useDarkMode

const Experience = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state

  return (
    <div id="experience">
      <div className="heading-text title">Work Experience</div>
      <div className="experience-container">
        <Card
          className={`ant-card-body ant-card-bordered ${isDarkMode ? "dark" : ""}info-card`}

          // className="info-card"
        >
          <div 
          // className="info-card"
           className={`ant-card-body ${isDarkMode ? "dark" : ""}`}
          >
            <div className="blue-stripe">
              <div className="logo-circle">
                <img src={ComLogo} style={{ width: "40px" }} alt="logo" />
              </div>
              <h2>Providential platforms pvt ltd (Nivesh.com)</h2>
            </div>
            <div className="details">
              <h2>Software Developer</h2>
              <p>2022 - Present</p>
              <p>
                Built responsive web applications and implemented modern UI/UX
                designs.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Experience;
