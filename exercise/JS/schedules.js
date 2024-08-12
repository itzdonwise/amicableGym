const navbar = document.getElementById('navbar');

function  changeNavbarColorOnScroll() {
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-backgrandcolor');
    }else{
        navbar.classList.remove('navbar-backgrandcolor');
    }
}

window.addEventListener('scroll', changeNavbarColorOnScroll);


const options = {
    threshold: 0.5
  };


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
  