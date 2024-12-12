// Utility Colors Object
const COLORS = {
    green: {
      bg: "bg-[#ECF7D4]",
      badge: "bg-[#D6F497]",
    },
    orange: {
      bg: "bg-[#F9EFE1]",
      badge: "bg-[#F7E0B8]",
    },
    red: {
      bg: "bg-[#FBE5E7]",
      badge: "bg-[#FDC6C7]",
    },
    blue: {
      bg: "bg-[#E5F3FE]",
      badge: "bg-[#BDE0FE]",
    },
  };
  
  /**
   * Get a random color from the COLORS object.
   * @returns {Object} - A random color object with `bg` and `badge` properties.
   */
  export const getRandomColor = () => {
    const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
    const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
    const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
    return COLORS[randomColorName]; // Return the color object corresponding to the random color name
  };
  
  /**
   * Capitalizes the first letter of a string.
   * @param {string} str - The string to capitalize.
   * @returns {string} - The capitalized string.
   */
  export const capitalizeFirstLetter = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  
  /**
   * Truncate a string to a specified length and add ellipsis if needed.
   * @param {string} str - The string to truncate.
   * @param {number} maxLength - Maximum length of the truncated string.
   * @returns {string} - Truncated string with ellipsis if needed.
   */
  export const truncateString = (str, maxLength = 50) => {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };
  
  /**
   * Parse a value from localStorage or return a default value if it doesn't exist.
   * @param {string} key - The key in localStorage.
   * @param {any} defaultValue - The default value to return if the key doesn't exist.
   * @returns {any} - Parsed value from localStorage or the default value.
   */
  export const getFromLocalStorage = (key, defaultValue = []) => {
    const value = localStorage.getItem(key);
    try {
      return value ? JSON.parse(value) : defaultValue;
    } catch {
      return defaultValue;
    }
  };
  
  /**
   * Save a value to localStorage.
   * @param {string} key - The key in localStorage.
   * @param {any} value - The value to save.
   */
  export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  /**
   * Remove a key-value pair from localStorage.
   * @param {string} key - The key to remove from localStorage.
   */
  export const removeFromLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  /**
   * Check if a string is a valid JSON.
   * @param {string} str - The string to validate.
   * @returns {boolean} - True if the string is valid JSON, false otherwise.
   */
  export const isValidJSON = (str) => {
    try {
      JSON.parse(str);
      return true;
    } catch {
      return false;
    }
  };
  