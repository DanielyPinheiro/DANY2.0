/** Inline no documento para evitar flash de tema incorreto antes do React hidratar. */
export const THEME_STORAGE_KEY = 'dany-theme'

export const themeBootstrapScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var s=localStorage.getItem(k);var dark=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(dark)document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');}catch(e){}})();`
