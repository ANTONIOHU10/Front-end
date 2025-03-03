

const toolbar = document.getElementById('toolbar');
let isToolbarVisible = false;

//find cursor position
document.addEventListener('mousemove', (e) => {
    const triggerZoneWidthDisplay = 250;
    const triggerZoneWidth = 20;
    // if mouse is in the trigger zone and toolbar is not visible
    if (e.clientX <= triggerZoneWidth && !isToolbarVisible) {
        toolbar.classList.add('visible');
        isToolbarVisible = true;
    }
    
    // if mouse is out of the trigger zone and toolbar is visible
    if (e.clientX > triggerZoneWidthDisplay && isToolbarVisible) {
        toolbar.classList.remove('visible');
        isToolbarVisible = false;
    }
});

//hide toolbar when clicked outside
document.addEventListener('click', (e) => {
    if (!toolbar.contains(e.target) && isToolbarVisible) {
        toolbar.classList.remove('visible');
        isToolbarVisible = false;
    }
});


document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });


window.addEventListener('scroll', () => {
const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const scrolled = (winScroll / height) * 100;
document.getElementById('progress-bar').style.width = scrolled + '%';
});

  
// clone logos selector
const wrapper = document.getElementById('logosWrapper');
const originalLogos = wrapper.innerHTML;

// clone logos
wrapper.innerHTML = originalLogos + originalLogos + originalLogos + originalLogos + originalLogos;
