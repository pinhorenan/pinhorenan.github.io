// Quando o usuário rolar para baixo 20px a partir do topo do documento, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// Quando o usuário clicar no botão, role para o topo do documento
document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Rola suavemente
  });
});
