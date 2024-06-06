function scrollToSection(id) {
  const section = document.querySelector(id);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth", // Rola suavemente
    });
  }
}

// Adiciona um ouvinte de evento de clique a todos os links de navegação
document.querySelectorAll("header a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const targetId = this.getAttribute("href"); // Obtém o valor do atributo href
    scrollToSection(targetId); // Rola suavemente para a seção correspondente
  });
});
