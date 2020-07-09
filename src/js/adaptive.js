const navLinks = document.querySelectorAll(".link");
console.log(navLinks);

let fs = require("fs");
let data = {};

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    let clickedOn = link.getAttribute("data-url");
    data.clicked = clickedOn;
    console.log(data);
  });
});
