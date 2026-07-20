// Mouse events
document.addEventListener("click", function(event) {
    // The element that was clicked
    console.log("Target:", event.target);

    // The element the listener is attached to
    console.log("Current Target:", event.currentTarget);

    // Event type
    console.log("Type:", event.type);

    // Mouse position
    console.log("Position:", event.clientX, event.clientY);

    // Prevent default behavior
    event.preventDefault();

    // Stop propagation
    event.stopPropagation();
});

// Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key:", event.key);
    console.log("Code:", event.code);
    console.log("Shift:", event.shiftKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Alt:", event.altKey);
});