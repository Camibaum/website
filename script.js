// menu //
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// menu scroll

// Få fat i header-elementet
const header = document.querySelector(".header");

// Lyt efter scroll-begivenhed
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Hvis du har scrollet mere end 50px
    menu.classList.add("scrolled"); // Tilføj 'scrolled'-klassen
  } else {
    menu.classList.remove("scrolled"); // Fjern 'scrolled'-klassen
  }
});
