document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Example login validation - Replace with actual login logic
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
      // Redirect to dashboard or another page
    } else {
      document.getElementById('error-msg').innerText = 'Invalid username or password';
    }
  });
  