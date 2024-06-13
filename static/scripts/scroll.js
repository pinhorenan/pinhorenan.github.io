// Scroll to section
function scrollToSection(id) {
  const section = document.querySelector(id);
  if (section) {
    const offset = section.offsetTop;
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}

// Smooth scroll
function addSmoothScrollListener(selector) {
  document.querySelectorAll(selector).forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      scrollToSection(targetId);
    });
  });
}

addSmoothScrollListener("header a");
addSmoothScrollListener(".see-more-container");

// Back to top button
window.addEventListener("scroll", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  scrollToTopBtn.style.display = (window.scrollY > 20) ? "block" : "none";
});

document.getElementById("scrollToTopBtn").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
