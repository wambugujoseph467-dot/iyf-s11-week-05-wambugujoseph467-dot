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

// 1. Select the header, then navigate to the nav inside it
const header = document.querySelector("header");
const nav = header.querySelector("nav");

console.log(nav);

// 2. Select the first .nav-link, then get its parent li
console.log(firstLink.parentElement);

// 3. Select the article, then get its next sibling (section)
const article = document.querySelector("article");

console.log(article.nextElementSibling);

// 4. Select the ul, then get all its child li elements
const ul = document.querySelector("ul");

console.log(ul.children);

// 5. Start from the footer and navigate up to the body
const footer = document.querySelector("footer");

console.log(footer.parentElement);

//exercise 9.3

// Exercise 1: Text Content

const h1 = document.querySelector("h1");

console.log(h1.textContent);
console.log(h1.innerText);

h1.textContent = "New Title";

// Exercise 2: HTML Content

console.log(article.innerHTML);

article.innerHTML = `
<h2>Updated Article</h2>
<p>This is new content.</p>
`;

// Exercise 3: Attributes

console.log(firstLink.getAttribute("href"));
console.log(firstLink.href);

firstLink.setAttribute("href", "https://example.com");

console.log(firstLink.hasAttribute("target"));

firstLink.removeAttribute("target");

// Exercise 4: Styles

const container = document.querySelector(".container");

container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

Object.assign(container.style, {
  backgroundColor: "#333",
  color: "white",
  padding: "20px"
});