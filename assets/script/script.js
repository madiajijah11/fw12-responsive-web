// show password
const password = document.querySelector("#password");
const icon = document.querySelector(".fa-eye");
icon.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});

// validate username and password
const form = document.querySelector(".form-control");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // check if email and password are true
    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.href = "homepage.html";
    } else {
        // show alert bellow the form with red color
        const alert = document.createElement("div");
        alert.style.color = "red";
        alert.style.border = "1px solid red";
        alert.style.padding = "10px";
        alert.style.margin = "10px 0";
        alert.innerHTML = "Email or password is wrong";
        form.appendChild(alert);
        // remove alert after 3 seconds
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
});
