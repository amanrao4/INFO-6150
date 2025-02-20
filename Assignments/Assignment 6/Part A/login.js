$(document).ready(function () {
    function validateEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@northeastern\.edu$/.test(email);
    }

    function validateUsername(username) {
        return /^[A-Za-z\s]{3,20}$/.test(username);
    }

    function validatePassword(password) {
        return password.length >= 6 && password.length <= 20;
    }

    function validateForm() {
        let email = $("#email").val().trim();
        let username = $("#username").val().trim();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let isValid = true;

        if (!validateEmail(email)) {
            $("#emailError").text("Must be a valid Northeastern email (@northeastern.edu)");
            isValid = false;
        } else {
            $("#emailError").text("");
        }

        if (!validateUsername(username)) {
            $("#usernameError").text("Username must contain only letters and be 3-20 characters long.");
            isValid = false;
        } else {
            $("#usernameError").text("");
        }

        if (!validatePassword(password)) {
            $("#passwordError").text("Password must be 6-20 characters long.");
            isValid = false;
        } else {
            $("#passwordError").text("");
        }

        if (password !== confirmPassword) {
            $("#confirmPasswordError").text("Passwords do not match.");
            isValid = false;
        } else {
            $("#confirmPasswordError").text("");
        }

        $("#loginButton").prop("disabled", !isValid);
    }

    $("input").on("input", validateForm);

    $("#loginForm").submit(function (event) {
        event.preventDefault();
        if ($("#loginButton").prop("disabled") === false) {
            localStorage.setItem("username", $("#username").val().trim());
            window.location.href = "calculator.html";
        }
    });
});
