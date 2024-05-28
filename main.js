const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function() {
    // Toggle between fa-eye and fa-eye-slash
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");

    // Toggle the type attribute
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
});
