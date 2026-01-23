document.addEventListener("DOMContentLoaded", function () {

  const themeToggleBtn = document.getElementById("themeToggleBtn");

  function toggleTheme() {
    document.documentElement.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('light-mode');

    if (document.documentElement.classList.contains('light-mode')) {
      localStorage.setItem('preferredTheme', 'light');
    } else {
      localStorage.setItem('preferredTheme', 'dark');
    }
  }

  themeToggleBtn.addEventListener('click', toggleTheme);

  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
    document.documentElement.classList.add('dark-mode');
  }
});