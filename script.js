// Modal Open & Close Functions
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Event Listeners for Buttons
document.querySelector(".login-btn").addEventListener("click", function() {
    openModal("login-modal");
});

document.querySelector(".signup-btn").addEventListener("click", function() {
    openModal("signup-modal");
});

// Login Functionality
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedPassword = localStorage.getItem(email);

    if (storedPassword && storedPassword === password) {
        alert("✅ Login successful!");
        closeModal("login-modal");
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
