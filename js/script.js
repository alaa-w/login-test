// Common regex patterns (define outside so all functions can use them)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passRegex = /^.{6,}$/;

function login() {
    const emailinput = document.getElementById("loginEmail").value.trim();
    const passowrdinput = document.getElementById("loginPassword").value.trim();

    if (!emailinput.match(emailRegex)) {
        alert("Please enter valid email");
        return;
    }

    if (!passowrdinput.match(passRegex)) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Login successful");
}

function showSignUp() {
    document.getElementById("login").style.display = "none";
    document.getElementById("signup").style.display = "block";
}

function showLogin() {
    document.getElementById("signup").style.display = "none";
    document.getElementById("login").style.display = "block";
}

function signup() {
    var name = document.getElementById("signupName").value.trim();
    var emailsignup = document.getElementById("signupEmail").value.trim();
    var passwordsignup = document.getElementById("signupPassword").value.trim();

    if (name === "" || emailsignup === "" || passwordsignup === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (!emailsignup.match(emailRegex)) {
        alert("Please enter a valid email.");
        return;
    }

    if (!passwordsignup.match(passRegex)) {
        alert("Password must be at least 6 characters.");
        return;
    }

    alert("Account created successfully!");
    showLogin();
}
