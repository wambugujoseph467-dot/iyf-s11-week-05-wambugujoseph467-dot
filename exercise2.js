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

// Mouse enters button
button.addEventListener("mouseenter", () => {
    console.log("Mouse entered");
});

// Mouse leaves button
button.addEventListener("mouseleave", () => {
    console.log("Mouse left");
});


// Create an input field
const input = document.createElement("input");
input.placeholder = "Type here";

// Add the input to the page
document.body.appendChild(input);

// Keydown event
input.addEventListener("keydown", () => {
    console.log("Key pressed");
});

// Input event
input.addEventListener("input", () => {
    console.log("Typing...");
});