function toggleLanguage() {
  var enElements = document.querySelectorAll("#content-en");
  var ptElements = document.querySelectorAll("#content-pt");

  // Verifica se o conteúdo em inglês está visível
  var enVisible = window.getComputedStyle(enElements[0]).display !== "none";

  // Se o conteúdo em inglês estiver visível, oculta e mostra o conteúdo em português
  if (enVisible) {
    enElements.forEach(function (element) {
      element.style.display = "none";
    });
    ptElements.forEach(function (element) {
      element.style.display = "block";
    });
  } else {
    // Caso contrário, oculta o conteúdo em português e mostra o conteúdo em inglês
    ptElements.forEach(function (element) {
      element.style.display = "none";
    });
    enElements.forEach(function (element) {
      element.style.display = "block";
    });
  }
}
