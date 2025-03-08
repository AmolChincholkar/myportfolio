import React from "react";
import { Card } from "antd";
import "./About.scss";
import UniversityLogo from "../../Assets/Images/srtmun-logo.png";
import BoardLogo from "../../Assets/Images/board-logo.png";
import { useDarkMode } from "../../DarkModeContext";  // Import the custom hook

const educationData = [
  {
    logo: UniversityLogo,
    university: "Swami Ramanand Teerth Marathwada University, Nanded",
    degree: "Master of Computer Application",
    description: "Completed with 88%",
  },
  {
    logo: UniversityLogo,
    university: "Swami Ramanand Teerth Marathwada University, Nanded",
    degree: "Bachelor of Computer Application",
    description: "Completed with 70%",
  },
  {
    logo: BoardLogo,
    university: "Aurangabad Board, Maharashtra",
    degree: "HSC",
    description: "Completed with 66%",
  },
  {
    logo: BoardLogo,
    university: "State Board, Maharashtra",
    degree: "SSC",
    description: "Completed with 62%",
  },
];

const achievements = [
  " - Star Performer Certificate of Appreciation 2022 from Nivesh.com.",
  " - Winner of Carom Tournament 2023 organized by One Degree coworking Bhandup(W).",
];

const About = () => {
  const { isDarkMode } = useDarkMode();  // Use the custom hook to get dark mode state

  return (
    <div id="about" className={`aboutContainer ${isDarkMode ? "dark" : "light"}`}>
      <div className="heading-text title">Education & Achievements</div>
      <div className="row justify-content-center">
        {educationData?.map((edu, index) => (
          <div className="col-12 col-md-5 mb-4" key={index}>
            <Card className="edu-card">
              <div className="row align-items-center">
                <div className="col-4 text-center">
                  <img
                    src={edu.logo}
                    alt={`${edu.university} Logo`}
                    className="img-fluid edu-logo"
                  />
                </div>
                <div className="col-8">
                  <h5 className="university">{edu.university}</h5>
                  <p className="degree">{edu.degree}</p>
                  <p className="description">{edu.description}</p>
                </div>
              </div>
            </Card>
          </div>
        ))}
        <div className="col-12 col-md-8 mb-4">
          <Card className="edu-card">
            <div className="row align-items-center">
              <div className="achievements-list">
                {achievements.map((item, index) => (
                  <div className="university" key={index}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
