import Scrollbar from "smooth-scrollbar";

// let body = document.querySelector("#mainScroll");

// Scrollbar.init(body);

const arrow = document.querySelector("#arrow");
console.log(arrow);

document.addEventListener("click", (e) => {
  console.log(e.target);
});

arrow.addEventListener("click", () => {
  console.log("arrowPressed");
});
