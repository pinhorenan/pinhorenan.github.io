window.addEventListener('scroll', function() {
    const seeMoreContainer = document.getElementById('see-more-container');
    const sectionGreetings = document.getElementById('section-greetings');
    const sectionGreetingsBottom = sectionGreetings.getBoundingClientRect().bottom;

    if (sectionGreetingsBottom < 0) {
        seeMoreContainer.classList.add('hidden');
    }
});
