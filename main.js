// Create button
const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

// First event listener
button.addEventListener("click", function () {
    console.log("Button clicked!");
});

// Second event listener
button.addEventListener("click", () => {
    console.log("Clicked again!");
});

// Named function
function handleClick() {
    console.log("Handled!");
}

button.addEventListener("click", handleClick);

// Remove named function
button.removeEventListener("click", handleClick);

//exercise 2 event types
// Create a button
const button = document.createElement("button");
button.textContent = "Click Me";

// Add button to the page
document.body.appendChild(button);

// Click event
button.addEventListener("click", () => {
    console.log("Button clicked");
});

// Double click event
button.addEventListener("dblclick", () => {
    console.log("Double clicked");
});