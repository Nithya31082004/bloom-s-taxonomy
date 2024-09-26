// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Selecting the form elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const adminSignupButton = document.querySelector('.admin-signup');
    const userSignupButton = document.querySelector('.user-signup');

    // Event listener for Admin signup button
    adminSignupButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents form from submitting
        handleSignup('admin');
    });

    // Event listener for User signup button
    userSignupButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents form from submitting
        handleSignup('user');
    });

    // Function to handle signup
    function handleSignup(role) {
        const email = emailInput.value;
        const password = passwordInput.value;

        // Basic form validation
        if (email === '' || password === '') {
            alert('Please fill in both email and password fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate signup process (for demonstration purposes)
        if (role === 'admin') {
            alert(`Signing up as Admin with email: ${email}`);
            // Here you would add logic to handle admin signup (e.g., redirecting or API calls)
        } else if (role === 'user') {
            alert(`Signing up as User with email: ${email}`);
            // Here you would add logic to handle user signup
        }
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Optional: Login link action
    const loginLink = document.querySelector('.login-option a');
    loginLink.addEventListener('click', () => {
        alert('Login functionality will be implemented.');
    });
});
