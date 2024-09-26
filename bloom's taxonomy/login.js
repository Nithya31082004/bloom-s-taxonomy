// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    
    // Selecting the form elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const adminLoginButton = document.querySelector('.admin-login');
    const userLoginButton = document.querySelector('.user-login');
    
    // Event listener for Admin login button
    adminLoginButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents form from submitting
        handleLogin('admin');
    });
    
    // Event listener for User login button
    userLoginButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevents form from submitting
        handleLogin('user');
    });

    // Function to handle login
    function handleLogin(role) {
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

        // Simulate login process (for demonstration purposes)
        if (role === 'admin') {
            alert(`Logging in as Admin with email: ${email}`);
            // Here you would add logic to handle admin login (e.g., redirecting or API calls)
        } else if (role === 'user') {
            alert(`Logging in as User with email: ${email}`);
            // Here you would add logic to handle user login
        }
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Optional: Forgot password link action
    const forgotPasswordLink = document.querySelector('.forgot-password');
    forgotPasswordLink.addEventListener('click', () => {
        alert('Forgot Password functionality will be implemented.');
    });
});
