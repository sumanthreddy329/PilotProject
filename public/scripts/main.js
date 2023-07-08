const themeSwitcher = document.getElementById('theme-switcher');
const themeLink = document.getElementById('theme');
const lightTheme = '/styles/light-theme.css';
const darkTheme = '/styles/dark-theme.css';

let currentTheme = localStorage.getItem('theme') || 'light';
themeLink.href = currentTheme === 'dark' ? darkTheme : lightTheme;

themeSwitcher.addEventListener('change', () => {
  if (currentTheme === 'light') {
    currentTheme = 'dark';
    themeLink.href = darkTheme;
  } else {
    currentTheme = 'light';
    themeLink.href = lightTheme;
  }

  localStorage.setItem('theme', currentTheme);
});
