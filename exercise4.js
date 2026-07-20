// =======================
// Exercise 1: Bubbling
// =======================

document.getElementById("grandparent").addEventListener("click", () => {
    console.log("Grandparent clicked");
});

document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Child clicked");
});

// =======================
// Exercise 2: Delegation
// =======================

function handleClick(event) {
    console.log("You clicked:", event.target.textContent);
}

document.querySelector("ul").addEventListener("click", function(event) {

    if (event.target.matches("li")) {
        handleClick(event);
    }

});