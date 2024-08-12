document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate form values
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
        
    }
    console.log(emailPattern.test);

    // Store data in Local Storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    

    // Optional: Display a success message or redirect the user
    alert('Form submitted successfully!');
});

// Retrieve and display stored data when the page loads
window.addEventListener('load', function() {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storePassword = this.localStorage.getItem('password')

    if (storedName, storedEmail  && storePassword) {
        document.getElementById('name').value = storedName;
        document.getElementById('email').value = storedEmail;
        document.getElementById('password').value = storePassword
    }
});

console.log('about to fetch from api');
fetch('amicablegym.jpp').then(resp => {
    console.log(resp);
    return resp.blob();
})
.then(blob =>{
    console.log(resp);
    document.getElementById('amicablegym').src = URL.createObjectURL(blob)
});






