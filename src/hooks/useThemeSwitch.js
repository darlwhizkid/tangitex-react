import { useState, useEffect } from 'react';

export const useThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  return [isDarkMode, setIsDarkMode];
};
