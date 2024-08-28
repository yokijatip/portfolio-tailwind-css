// Navbar Fixed
// Navbar Fixed
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
});

// Hamburger Menu Toggle
const hamburgerToggle = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburgerToggle.addEventListener("click", function () {
  hamburgerToggle.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
