document.addEventListener("DOMContentLoaded", function () {
// -----------------------
  //  Alternância de tema
  // -----------------------
  const themeToggleBtn = document.getElementById("themeToggleBtn");

  function toggleTheme() {
    // Alterna a classe no elemento <html> (document.documentElement)
    document.documentElement.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('light-mode');

    if (document.documentElement.classList.contains('light-mode')) {
      localStorage.setItem('preferredTheme', 'light');
    } else {
      localStorage.setItem('preferredTheme', 'dark');
    }
  }

  themeToggleBtn.addEventListener('click', toggleTheme);

  // Define o tema conforme a preferência salva no localStorage
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark-mode');
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
    document.documentElement.classList.add('dark-mode');
  }
});