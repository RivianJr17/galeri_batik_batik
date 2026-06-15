function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "flex";
}

function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
}

function registerUser() {
    const email = document.getElementById('register-Email').value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const phone = document.getElementById("register-phone").value;
    
    if (username && password) {
        localStorage.setItem('email', email);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("phone", phone);
        alert("Registrasi berhasil! Silakan login.");
        showLogin();
    }
    return false;
}

function loginUser() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    const storedEmail = localStorage.getItem('email');
    const storedphone = localStorage.getItem('phone')

    // Check login credentials
    if (username === 'admin' && password === 'admin123') {
        // Redirect to admin dashboard
        window.location.href = 'admin.html';
        alert("Welcome Admin")
    } else if (username === storedUsername && password === storedPassword) {
        
        sessionStorage.setItem('profile-username', JSON.stringify({ username: username, email: storedEmail }));

        document.getElementById("login-form").style.display = "none";
        document.getElementById("profile").style.display = "flex";
        document.getElementById("profile-username").textContent = username;
        document.getElementById("profile-email").textContent = storedEmail;
        document.getElementById("profile-phone").textContent = storedphone;
    } else {
        alert("Username atau password salah!");
    }
    return false;
    
}

function logout() {
    document.getElementById("profile").style.display = "none";
    document.getElementById("login-form").style.display = "flex";
}
