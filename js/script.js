// Common regex patterns
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^.{6,}$/;

// Sign up function
function signup() {
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!email.match(emailRegex)) {
        alert("Please enter a valid email.");
        return;
    }

    if (!password.match(passRegex)) {
        alert("Password must be at least 6 characters.");
        return;
    }

    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");
    showLogin();
}


function login() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!email.match(emailRegex)) {
        alert("Please enter a valid email.");
        return;
    }

    if (!password.match(passRegex)) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (!savedUser || savedUser.email !== email || savedUser.password !== password) {
        alert("Incorrect email or password.");
        return;
    }

    showWelcomeScreen(savedUser.name);
}


function showWelcomeScreen(name) {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "none";
    document.getElementById("welcomeInterface").style.display = "block";

    document.getElementById("welcomeMessage").textContent = `Welcome, ${name}!`;
}


function logout() {
    document.getElementById("welcomeInterface").style.display = "none";
    document.getElementById("login").style.display = "block";

    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}


function showSignUp() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}
