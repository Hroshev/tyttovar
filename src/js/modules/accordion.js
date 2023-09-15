const accordions = document.querySelectorAll(".accordion__content");

if (accordions) {
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
      accordion.classList.toggle("active");
    });
  });
}
