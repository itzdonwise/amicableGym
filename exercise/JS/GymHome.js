// document.querySelector('.hamburger-menu').addEventListener('click', () => {
//   document.querySelector('.nav-links').classList.toggle('active');
//   document.querySelector('.right-nav').classList.toggle('active');
// });

// document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
//   dropdownToggle.addEventListener('click', (e) => {
//       e.preventDefault();
//       const dropdown = dropdownToggle.parentElement;
//       dropdown.classList.toggle('active');
//   });
// });


// const mediaOpen = document.getElementById("hamburger-menu");
// const hideMenu = document.getElementById("HideMenu");
// mediaOpen.onclick = function() {
//   const open = document.querySelector(".media");
//   open.style.display = "flex";
// };


// hideMenu.onclick = function(){
//   const hideMenu = document.querySelector(".media");
//   hideMenu.style.display = "none"
  
// };







                                                                                                                                                                                                                                                                        // Select the navbar element
const navbar = document.getElementById('navbar');

// Function to change navbar color on scroll
function changeNavbarColorOnScroll() {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-backgrandcolor'); // Change background color on scroll
  } else {
    navbar.classList.remove('navbar-backgrandcolor'); // Reset background color when at the top
  }
}

// Event listener to call the function on scroll
window.addEventListener('scroll', changeNavbarColorOnScroll);


  const options = {
    threshold: 0.5
  };

const obsaver = new IntersectionObserver((entr, obsaver) => {
  entr.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("loaded");
      obsaver.unobserve(entry.target);
    }

  })
}, options)


window.addEventListener('load', () => {
  document.querySelectorAll('.logo, .nav-links, .right-nav, .header_text, .home-subtext, .right_herotext, .herotext, .main_container,.section3_formContainer, .textContainer').forEach(element => {
    obsaver.observe(element)
      // element.classList.add('loaded');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var loginBtn = document.getElementById('loginBtn');
  var modal = document.getElementById('loginModal');
  var closeBtn = document.getElementsByClassName('close')[0];
  var backdrop = document.getElementById('modalBackdrop');
  var loginFormContent = document.getElementById('loginFormContent');

  // Show the modal and load the login form content
  loginBtn.onclick = function() {
      modal.style.display = 'block';
      backdrop.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable scrolling
      loadLoginForm();
  };

  // Close the modal and enable scrolling
  closeBtn.onclick = closeModal;
  backdrop.onclick = closeModal;

  function closeModal() {
      modal.style.display = 'none';
      backdrop.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling
      loginFormContent.innerHTML = ''; // Clear the content
  }

  // Function to load the login form content from another fil
  function loadLoginForm() {
      fetch('../HTML/sign-in.html')
          .then(response => response.text())
          .then(html => {
              loginFormContent.innerHTML = html;
          })
          .catch(error => {
              console.error('Error loading login form:', error);
              loginFormContent.innerHTML = '<p>Error loading form. Please try again later.</p>';
          });
  }
});
