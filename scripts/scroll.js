function scrollToSection(id) {
  const section = document.querySelector(id);
  if (section) {
    const offset = section.offsetTop - (window.innerHeight * 0.1);
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  }
}

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
addSmoothScrollListener("#see-more-container");

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
