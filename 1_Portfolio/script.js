const menuBtn = document.getElementById("menu-btn");

// Get the nav-links element: Abount, Portfolio, Contact...
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    //if the navLinks has this class 'open', remove it, otherwise add it
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");

//modify the class of the icon, using the remixicon class 
//setAttribute(name, value) sets the value of an attribute on the specified element. If the attribute already exists,
//  the value is updated; otherwise a new attribute is added with the specified name and value.
// an attribute can be any valid HTML attribute for the element, such as src, href, class, etc.
  menuBtnIcon.setAttribute(
    "class",
    // If the navLinks is open, show the close icon, otherwise show the menu icon
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});



navLinks.addEventListener("click", (e) => {
  //if the navLinks has this class 'open', remove it, otherwise add it
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});