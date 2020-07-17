const hamburger = document.querySelector(".hamburger-menu");
const cross = document.querySelector(".sidebar .cross");
const sidebar = document.querySelector(".sidebar");
const dimmer = document.querySelector(".dimmer");

const caseDropDown = document.querySelector("li.case");
const innerList = document.querySelector(".sidebar .inner-list");
console.log(hamburger);

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
  dimmer.style.opacity = 0.6;
});

cross.addEventListener("click", () => {
  sidebar.classList.remove("active");
  innerList.classList.remove("active");
  caseDropDown.classList.remove("no-border");
  caseDropDown.querySelector("i").classList.remove("turned");

  dimmer.style.opacity = 0;
});

caseDropDown.addEventListener("click", () => {
  caseDropDown.classList.toggle("no-border");
  innerList.classList.toggle("active");
  caseDropDown.querySelector("i").classList.toggle("turned");
});
