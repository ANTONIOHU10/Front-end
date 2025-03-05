const panels = document.querySelectorAll('.panel')

const buttons = document.querySelectorAll('.listButton button')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        //remove active from all others
        removeActiveClasses()
        //once clicked active the current one
        panel.classList.add('active')
    })
})

//auxiliary function
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}



/*

document.querySelector('.nightMode').addEventListener('mouseenter', function() {
    this.querySelector('i').classList.remove('fa-regular');
    this.querySelector('i').classList.add('fa-solid');
  });
  
  document.querySelector('.nightMode').addEventListener('mouseleave', function() {
    this.querySelector('i').classList.remove('fa-solid');
    this.querySelector('i').classList.add('fa-regular');
  });
  

*/
  document.querySelector('.nightMode').addEventListener('click', function() {
    const icon = this.querySelector('i');
    
    // change icon
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      // change the dark background
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'; // change font color
      icon.classList.add('icon-bg-white');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      // change the background color
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'; // restore the font color
      icon.classList.remove('icon-bg-white');
    }
  });
  
 
  

  