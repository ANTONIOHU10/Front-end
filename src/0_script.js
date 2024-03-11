const panels = document.querySelectorAll('.panel')

const buttons = document.querySelectorAll('.listButton button')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}


buttons.forEach(button => {
    button.addEventListener('mouseenter', activatePanel);
});

function activatePanel() {
    const panelId = this.getAttribute('data-target');
    const panelToActivate = document.getElementById(panelId);
    
    removeActiveClasses();
    if(panelToActivate){
        panelToActivate.classList.add('active');
    }
    
    
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
    
    // 切换图标样式
    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      // 更改页面背景为黑色
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'; // 更改文字颜色以保证可读性
      icon.classList.add('icon-bg-white');
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      // 更改页面背景为白色
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'; // 恢复文字颜色
      icon.classList.remove('icon-bg-white');
    }
  });
  
 
  

  