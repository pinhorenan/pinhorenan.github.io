document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop && scrollTop > 0) {
            // Rolando para baixo e não está no topo da página
            topOffset -= 2; // Diminui o deslocamento superior para esconder o header gradualmente
            topOffset = Math.max(-8, topOffset); // Limita o deslocamento superior para que não ultrapasse -8
        } else {
            // Rolando para cima ou está no topo da página
            topOffset = 0; // Volta ao topo da página
        }

        header.style.top = `${topOffset}vh`; // Aplica o deslocamento superior ao estilo do header

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos

        if (scrollTop === 0) {
            // Está no topo da página
            header.classList.add('transparent-header'); // Adiciona a classe para tornar o header transparente
        } else {
            // Não está no topo da página
            header.classList.remove('transparent-header'); // Remove a classe para tornar o header transparente
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
    });
});
