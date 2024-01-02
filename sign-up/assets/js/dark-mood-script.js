const themeToggle = document.getElementById("toggel-theme");
const currentTheme = localStorage.getItem('theme');

// Set the initial theme
if (currentTheme) {
  document.body.classList.add(currentTheme);
} else {
  document.body.classList.add('light');
}

// Toggle the theme
themeToggle.addEventListener('click', function() {
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
});