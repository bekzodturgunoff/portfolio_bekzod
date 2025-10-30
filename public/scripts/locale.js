// Language switcher functionality
// This script runs on page load and applies the stored language preference

(() => {
  const locale = localStorage.getItem('locale') || 'en';
  
  // Store globally for components to access
  window.__currentLocale = locale;
  
  // Dispatch custom event that components can listen to
  window.dispatchEvent(new CustomEvent('localechange', { detail: { locale } }));
})();
