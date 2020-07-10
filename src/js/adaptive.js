const navLinks = document.querySelectorAll(".link");
let mainContent = document.querySelector("#mainContent");
console.log(navLinks);
console.log("test");
console.log(localStorage.getItem("myCat"));

// let fs = require("fs");
// let data = {};

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     let clickedOn = link.getAttribute("data-url");
//     data.clicked = clickedOn;
//     console.log(data);
//   });
// });

let requestURL =
  "https://raw.githubusercontent.com/SeanStanfield/substance-packaged/master/caseStudy.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
  const jsonResponse = request.response;
  populateHeader(jsonResponse);
};

function populateHeader(jsonObj) {
  let studyHeader = document.querySelector("#studyTitle");
  studyHeader.textContent = jsonObj["title"];
  mainContent.appendChild(studyHeader);
  let studyBody = document.querySelector("#studyBody");
  studyBody.textContent = jsonObj["content"];
  mainContent.appendChild(studyBody);
}
