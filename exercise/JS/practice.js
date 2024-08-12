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
        loadLoginForm();
    };

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
        loginFormContent.innerHTML = ''; // Clear the content
    };

    // Close the modal when the backdrop is clicked
    backdrop.onclick = function() {
        modal.style.display = 'none';
        backdrop.style.display = 'none';
        loginFormContent.innerHTML = ''; // Clear the content
    };

    // Function to load the login form content from another file
    function loadLoginForm() {
        fetch('')
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



// document.addEventListener('DOMContentLoaded', function() {
//     let loginBtn = document.getElementById('loginBtn');
//     let modal = document.getElementById('loginModal');
//     let closeBtn = document.getElementsByClassName('close')[0];
//     let backdrop = document.getElementById('modalBackdrop');
//     let loginFormContent = document.getElementById('loginFormContent');

//     // Show the modal and load the login form content
//     loginBtn.onclick = function() {
//         modal.style.display = 'block';
//         backdrop.style.display = 'block';
//         loadLoginForm();
//     };

//     // Close the modal when the close button is clicked
//     closeBtn.onclick = function() {
//         modal.style.display = 'none';
//         backdrop.style.display = 'none';
//         loginFormContent.innerHTML = ''; // Clear the content
//     };

//     // Close the modal when the backdrop is clicked
//     backdrop.onclick = function() {
//         modal.style.display = 'none';
//         backdrop.style.display = 'none';
//         loginFormContent.innerHTML = ''; // Clear the content
//     };

//     // Function to load the login form content from another file
//     function loadLoginForm() {
//         fetch('.')
//             .then(response => response.text())
//             .then(html => {
//                 loginFormContent.innerHTML = html;
//             })
//             .catch(error => {
//                 console.error('Error loading login form:', error);
//                 loginFormContent.innerHTML = '<p>Error loading form. Please try again later.</p>';
//             });
//     }
// });
