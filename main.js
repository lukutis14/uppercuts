/**
 * Main JavaScript for Uppercut.lt domain sale page
 * Handles language switching and other interactive features
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize language toggle button functionality
  const langToggle = document.getElementById('lang-toggle');
  const htmlElement = document.documentElement;
  
  // Set initial language from localStorage or default to English
  const savedLanguage = localStorage.getItem('uppercut-language') || 'en';
  setLanguage(savedLanguage);
  
  // Add event listener to language toggle button
  langToggle.addEventListener('click', () => {
    const currentLang = htmlElement.getAttribute('data-lang');
    const newLang = currentLang === 'en' ? 'lt' : 'en';
    setLanguage(newLang);
  });
  
  /**
   * Sets the page language and updates all translated elements
   * @param {string} lang - The language code ('en' or 'lt')
   */
  function setLanguage(lang) {
    // Update HTML attribute
    htmlElement.setAttribute('data-lang', lang);
    
    // Update HTML lang attribute for accessibility
    htmlElement.setAttribute('lang', lang);
    
    // Save preference to localStorage
    localStorage.setItem('uppercut-language', lang);
    
    // Update all elements with data-en and data-lt attributes
    const elements = document.querySelectorAll('[data-en][data-lt]');
    elements.forEach(element => {
      element.textContent = element.getAttribute(`data-${lang}`);
    });
  }
});
