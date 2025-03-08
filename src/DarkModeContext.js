import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the context for dark mode
const DarkModeContext = createContext();

// Create a custom hook to access dark mode context
export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = sessionStorage.getItem('isDarkMode');
    return savedMode ? JSON.parse(savedMode) : false;  // Default to light mode if not found
  });

  // Apply body class based on dark mode state
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]); // This effect runs whenever `isDarkMode` changes

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      sessionStorage.setItem('isDarkMode', JSON.stringify(newMode)); // Store mode in sessionStorage
      return newMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
