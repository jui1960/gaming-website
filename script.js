// Elements
const loginBtn = document.querySelector(".login-btn");
const signupBtn = document.querySelector(".signup-btn");
const profileContainer = document.querySelector(".profile-container");
const profileLogo = document.getElementById("profile-logo");
const logoutBtn = document.createElement("button");

// Style Logout Button
logoutBtn.textContent = "Log out";
logoutBtn.classList.add("logout-btn");
logoutBtn.style.display = "none";
logoutBtn.style.background = "#ff4747";
logoutBtn.style.color = "white";
logoutBtn.style.padding = "10px 20px";
logoutBtn.style.border = "none";
logoutBtn.style.cursor = "pointer";
document.querySelector("header").appendChild(logoutBtn);

// Check Login Status
function checkLoginStatus() {
    let loggedInUser = localStorage.getItem("loggedInUser");
    let profilePic = localStorage.getItem("profilePic") || "default-profile.png";

    if (loggedInUser) {
        loginBtn.style.display = "none";
        signupBtn.style.display = "none";
        profileContainer.style.display = "block";
        logoutBtn.style.display = "block";
        profileLogo.src = profilePic;
    } else {
        loginBtn.style.display = "block";
        signupBtn.style.display = "block";
        profileContainer.style.display = "none";
        logoutBtn.style.display = "none";
    }
}

// Open & Close Modal Functions
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Event Listeners for Buttons
loginBtn.addEventListener("click", () => openModal("login-modal"));
signupBtn.addEventListener("click", () => openModal("signup-modal"));

// Login Functionality
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedPassword = localStorage.getItem(email);

    if (storedPassword && storedPassword === password) {
        alert("✅ Login successful!");
        localStorage.setItem("loggedInUser", email);
        closeModal("login-modal");
        checkLoginStatus();
    } else {
        alert("❌ Invalid email or password!");
    }
});

// Signup Functionality
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;

    if (localStorage.getItem(email)) {
        alert("⚠️ Email already registered!");
    } else {
        localStorage.setItem(email, password);
        alert("✅ Signup successful! Now login.");
        closeModal("signup-modal");
    }
});

// Logout Functionality
logoutBtn.addEventListener("click", function() {
    localStorage.removeItem("loggedInUser");
    alert("🔓 Logged out successfully!");
    checkLoginStatus();
});

// Check Login Status on Page Load
document.addEventListener("DOMContentLoaded", checkLoginStatus);
