const menuBtn = document.getElementById("menu-btn");

// Get the nav-links element: Abount, Portfolio, Contact...
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    // If the navLinks is open, show the close icon, otherwise show the menu icon
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});