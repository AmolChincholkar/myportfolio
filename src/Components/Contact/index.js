import React from "react";
import { useDarkMode } from "../../DarkModeContext"; // Import dark mode context
import "./Contact.scss";
import {
  MailOutlined,
  PhoneOutlined,
  GithubOutlined,
  LinkedinOutlined,
  // FacebookOutlined, // Uncomment if needed
  // InstagramOutlined, // Uncomment if needed
} from "@ant-design/icons";

const Contact = () => {
  const { isDarkMode } = useDarkMode(); // Get the current dark mode state

  const contactDetails = [
    {
      icon: <MailOutlined />,
      label: "Email",
      value: "amolchincholkar269@gmail.com",
      link: "mailto:amolchincholkar269@gmail.com",
    },
    {
      icon: <PhoneOutlined />,
      label: "Mobile",
      value: "8862042232",
      link: "tel:8862042232",
    },
  ];

  const socialLinks = [
    {
      icon: <GithubOutlined />,
      link: "https://github.com",
      label: "GitHub",
    },
    {
      icon: <LinkedinOutlined />,
      link: "https://linkedin.com",
      label: "LinkedIn",
    },
    // {
    //   icon: <FacebookOutlined />,
    //   link: "https://facebook.com",
    //   label: "Facebook",
    // },
    // {
    //   icon: <InstagramOutlined />,
    //   link: "https://instagram.com",
    //   label: "Instagram",
    // },
  ];

  return (
    <div id="contact" className={`contact-page ${isDarkMode ? "dark" : "light"}`}>
      <div className="custom-footer">
        <div className="heading-text title">Contact & Details</div>
        <div className="contact-info">
          {contactDetails.map((item, index) => (
            <p key={index}>
              {item.icon} {item.label}: <a href={item.link}>{item.value}</a>
            </p>
          ))}
        </div>
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="copyright">
          © 2025 Amol Chincholkar. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Contact;
