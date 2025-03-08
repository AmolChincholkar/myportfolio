import React from "react";
import "./Home.scss";
import HomeImg from "../../Assets/Images/dev-img.png";
import WaveIcon from "../../Assets/Images/wave.png";
import { Row, Col, Typography, Image } from "antd";
import { useDarkMode } from "../../DarkModeContext";

const { Title, Text } = Typography;

const Home = () => {
  const { isDarkMode } = useDarkMode(); // Access dark mode state

  return (
    <div id="home" className={`home-page ${isDarkMode ? "dark" : "light"}`}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <Title level={1}>
            <span className="heading-text name">I'm Amol Chincholkar</span>
            <span className="waveEmoji">
              <img
                src={WaveIcon}
                alt="wave"
                preview={false}
                className="wave-img"
              />
            </span>
          </Title>
          <div className="description">
            A passionate Frontend Developer with three years of experience 🚀
            building dynamic and responsive web and mobile applications using
            JavaScript and ReactJS and some other cool libraries and frameworks.
          </div>
        </Col>
        <Col xs={24} md={12}>
          <img src={HomeImg} alt="img" preview={false} className="home-img" />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
