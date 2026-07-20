const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

// Real-time name validation
nameInput.addEventListener("input", function (event) {
    const value = event.target.value;

    if (value.length < 2) {
        showError(nameInput, "Name must be at least 2 characters");
    } else {
        clearError(nameInput);
    }
});

// Real-time email validation
emailInput.addEventListener("input", function (event) {
    const value = event.target.value;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(value)) {
        showError(emailInput, "Please enter a valid email");
    } else {
        clearError(emailInput);
    }
});

// Form submission
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    console.log("Form Data:", data);

    if (data.name.length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {

        showSuccess("Form submitted successfully!");

        form.reset();

    }

});

// Show error
function showError(input, message) {

    input.classList.add("error");

    let error = input.nextElementSibling;

    if (!error || !error.classList.contains("error-message")) {

        error = document.createElement("div");
        error.className = "error-message";
        input.after(error);

    }

    error.textContent = message;

}

// Clear error
function clearError(input) {

    input.classList.remove("error");

    const error = input.nextElementSibling;

    if (error && error.classList.contains("error-message")) {
        error.remove();
    }

}

// Success message
function showSuccess(message) {

    document.getElementById("success-message").textContent = message;

}