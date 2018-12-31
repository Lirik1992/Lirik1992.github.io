document.addEventListener('DOMContentLoaded', function() {

  // Select DOM elements
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuBranding = document.querySelector('.menu-branding');
  const menuNav = document.querySelector('.menu-nav');
  const navItems = document.querySelectorAll('.nav-item');
  
  // Menu initial state
  let showMenu = false;
  
  menuBtn.addEventListener('click', toggleMenu);
  
  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
  
      // Set menu state
      showMenu = true;
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
  
      // Set menu state
      showMenu = false;
    }
  }

  let progressBars = ['#first-skill-bar', '#second-skill-bar', '#third-skill-bar', '#forth-skill-bar'];

  progressBars.forEach(item => {
    //Progress bars
    let bar = new ProgressBar.Circle(item, {
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 1,
      duration: 1400,
      easing: 'bounce',
      strokeWidth: 6,
      from: {color: '#eece1a', a:0},
      to: {color: '#ff2200', a:1},
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
      }
    });
    
    if (item === '#first-skill-bar') {
      bar.animate(0.85);
    }
    if (item === '#second-skill-bar') {
      bar.animate(0.80);
    }
    if (item === '#third-skill-bar') {
      bar.animate(0.95);
    }
    if (item === '#forth-skill-bar') {
      bar.animate(0.5);
    }
  })
});
