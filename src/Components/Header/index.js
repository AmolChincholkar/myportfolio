import React, { useState, useEffect } from "react";
import { MenuOutlined, DownloadOutlined, SunOutlined, MoonOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";
import "./Header.scss";
import { useDarkMode } from "../../DarkModeContext"; // Make sure you're using this context
import MyLogo from "../../Assets/Images/mylogo.png";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const showDrawer = () => setIsDrawerVisible(true);
  const closeDrawer = () => setIsDrawerVisible(false);

  // Set initial active item from localStorage or default to an empty string
  useEffect(() => {
    const savedActiveItem = localStorage.getItem("activeItem");
    if (savedActiveItem) {
      setActiveItem(savedActiveItem);
    }
  }, []);

  const handleScrollToSection = (id) => {
    setActiveItem(id);
    localStorage.setItem("activeItem", id);  // Store active item in localStorage

    setTimeout(() => {
      const element = document.getElementById(id);
      const header = document.querySelector(".sticky-header");
      if (element && header) {
        const headerHeight = header.offsetHeight || 80;
        const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: "smooth" });
        window.history.pushState(null, null, `#${id}`);
      }
    }, 50);
  };

  const menuData = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const menuItems = (
    <ul className="nav-links">
      {menuData.map((item) => (
        <li key={item.id}>
          <div
            onClick={() => handleScrollToSection(item.id)}
            className={`nav-item ${activeItem === item.id ? "active" : ""}`}
          >
            {item.label}
          </div>
        </li>
      ))}
      <li>
        <Button className="icon-button" shape="round" type="primary">
          <DownloadOutlined /> Download Resume
        </Button>
      </li>
      <li>
        <div className="dark-mode-btn">
          <Button onClick={toggleDarkMode} shape="circle">
            {isDarkMode ? (
              <SunOutlined style={{ color: "#FFD700" }} />
            ) : (
              <MoonOutlined style={{ color: "#2c3e50" }} />
            )}
          </Button>
        </div>
      </li>
    </ul>
  );

  return (
    <header className={`sticky-header ${isDarkMode ? "dark" : "light"}`}>
      <div 
       onClick={() => handleScrollToSection("home")}
      className={isDarkMode ? "white-logo" : "logo"}>
        <img src={MyLogo} alt="Logo" className="logo" />
      </div>
      <nav className="desktop-menu">{menuItems}</nav>
      <Button
        className="mobile-menu-button"
        onClick={showDrawer}
        icon={<MenuOutlined />}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        closable={true}
      >
        {menuItems}
      </Drawer>
    </header>
  );
};

export default Header;
