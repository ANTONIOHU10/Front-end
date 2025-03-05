const toggleButton = document.getElementById("toggle-button");
const sidebar = document.getElementById("sidebar");

const openIcon = toggleButton.querySelector("#arrow_downward");
const closeIcon = toggleButton.querySelector("#arrow_upward");

closeIcon.style.display = "none";


//the toggle button
toggleButton.addEventListener("click", () => {

    toggleButton.classList.toggle("active");

    if (toggleButton.classList.contains("active")){
        toggleButton.style.top = "100px";
    } else {
        toggleButton.style.top = "50px";
        toggleButton.style.zIndex ="-3";
    }

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        openIcon.style.display = "none";
        closeIcon.style.display = "block";
  } else {
        openIcon.style.display = "block";
        closeIcon.style.display = "none";
  }
});