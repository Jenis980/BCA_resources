// Get the form element
const signupForm = document.getElementById('signup-form');

// Add an event listener to the form
signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const studentId = document.getElementById('studentId').value;
    const course = document.getElementById('course').value;

    // Validate the form
    let isValid = true;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        isValid = false;
        alert('Password and Confirm Password do not match.');
    }

    // Check if all required fields are filled
    if (!fullName || !email || !password || !confirmPassword || !studentId || !course) {
        isValid = false;
        alert('Please fill in all required fields.');
    }

    // If the form is valid, you can submit it to the server or perform any other actions
    if (isValid) {
        // You can send the form data to the server using AJAX or perform any other actions
        console.log('Form submitted successfully!');
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Student ID:', studentId);
        console.log('Course:', course);
    }
});