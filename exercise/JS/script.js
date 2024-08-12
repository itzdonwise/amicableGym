document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('aboutLink');
    const slideOutMenu = document.getElementById('slideOutMenu');
    const closeSlideOutMenu = document.getElementById('closeSlideOutMenu');
  
    aboutLink.addEventListener('click', (e) => {
      e.preventDefault();
      slideOutMenu.style.display = 'flex';
    });
  
    closeSlideOutMenu.addEventListener('click', (e) => {
      e.preventDefault();
      slideOutMenu.style.display = 'none';
    });
  });
  