function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Swap the icon and adjust color
  if (body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeIcon.style.color = '#f39c12'; // Sun color
  } else {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    themeIcon.style.color = '#000000'; // Moon color
  }
}

// Set initial theme to light theme
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  body.classList.add('light-theme');
  themeIcon.classList.add('fa-moon');
  themeIcon.style.color = '#000000'; // Initial moon color
});