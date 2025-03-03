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


const scrollRevealOption = {
    distance: "1rem",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 200,
  });
  ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 400,
  });
  ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 700,
  });
  ScrollReveal().reveal(".header_content h4", {
    ...scrollRevealOption,
    delay: 1200,
  });
  ScrollReveal().reveal(".header_content .socials li", {
    ...scrollRevealOption,
    delay: 2000,
    interval: 200,
  });
  ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 3000,
  });

  ScrollReveal().reveal(".menu_container", {
    ...scrollRevealOption,
    delay: 3200,
  });

  ScrollReveal().reveal(".side_bar_container", {
    ...scrollRevealOption,
    delay: 3500,
  });

document.addEventListener('mouseover', (e) => {
    const sidebar = document.querySelector('.side_bar_container');
    const trigger = document.getElementById('sidebar_more');
    
    if (e.target.closest('.sidebar_more')) {
            sidebar.style.right = '0';
         
    } else if (!e.target.closest('.side_bar_container')) {
            sidebar.style.right = '-100%';
            trigger.style.right = '100%';
    }
});