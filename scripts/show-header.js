document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
            // Rolando para baixo
            header.classList.add('header-hidden');
        } else {
            // Rolando para cima
            header.classList.remove('header-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
    });
});