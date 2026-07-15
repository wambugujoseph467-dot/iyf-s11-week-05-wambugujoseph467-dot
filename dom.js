// 1. The h1 element
const heading = document.querySelector("h1");
console.log(heading);

// 2. All elements with class "content"
const contents = document.getElementsByClassName("content");
console.log(contents);

// 3. The form with id "contact-form"
const form = document.getElementById("contact-form");
console.log(form);

// 4. The email input
const email = document.getElementById("email");
console.log(email);

// 5. All list items in the nav
const navItems = document.querySelectorAll("nav li");
console.log(navItems);

// 6. The first .nav-link
const firstLink = document.querySelector(".nav-link");
console.log(firstLink);

// 7. The last paragraph
const lastParagraph = document.querySelector("p:last-of-type");
console.log(lastParagraph);