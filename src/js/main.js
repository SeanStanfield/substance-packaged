import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

let cssPopup = document.querySelector(".popup");
let dimmer = document.querySelector(".dimmer");
console.log(dimmer);

const graphBlobs = document.querySelectorAll(".graphBlob");
const desktopGraph = document.querySelector(".graph");
let popupList = document.querySelector(".popup-list");

const popupObject = {
  Innovation: {
    title: "Innovation/NPD",
    points: [
      "Loads of Stuff",
      "Future Gazing",
      "Concept Testing",
      "Proposition Assessment",
      "Blank Sheet of Paper Briefs",
      "Sexy Insurance",
      "Bank Accounts",
      "The Weird and Wonderful",
    ],
    caseStudies: ["Tacticle Dynamics"],
  },

  Branding: {
    title: "Branding",
    points: [
      "Brand Stretch",
      "Line Extensions",
      "Making the most of what you've got",
    ],
    caseStudies: ["Branding Case Study"],
  },
  Sensory: {
    title: "Sensory Testing",
    points: ["Touch Smell Sight Sound", "The real touchy feely stuff"],
    caseStudies: ["Sensory study"],
  },
  Ethno: {
    title: "Ethnographic Immersion",
    points: [
      "Engaging with Customers",
      "Getting clients to actually meet people",
      "Deep dive stuff",
      "The Unsexy World",
    ],
    caseStudies: ["Ethno Case study"],
  },
  Equity: {
    title: "Equity Drivers",
    points: [
      "Unpacking the Unconscious",
      "Identifying what really matters",
      "Helping Manufacturing with What to Dial up",
    ],
    caseStudies: ["Equity case study"],
  },
  Customer: {
    title: "Customer Experience",
    points: [
      "Moments of Truth",
      "Service Recovery",
      "Shopping Habits",
      "Buying Motivations",
      "Sorting Out Your Problems",
    ],
    caseStudies: ["Customer case study"],
  },
  User: {
    title: "User Experience",
    points: [
      "Getting it Right",
      "Making Things Consumer Centric",
      "Identifying the Red Lines You Can't Cross",
    ],
    caseStudies: ["User case study"],
  },
  Product: {
    title: "Product Testing",
    points: ["Home usage Tests", "Which One To Go With Type Tests"],
    caseStudies: ["Product case study"],
  },
  Relationships: {
    title: "Relationships",
    points: [
      "Making the Corner Shop Work",
      "Understanding Grumpy Retailers",
      "Helping Teachers Teach",
    ],
    caseStudies: ["Relationships case study", "Relationships 2"],
  },
  Design: {
    title: "Design",
    points: [
      "Pack Design",
      "Product Design",
      "Web Design",
      "Design for Designs Sake",
    ],
    caseStudies: ["Design case study"],
  },
  SPAM: {
    title: "S.P.A.M",
    points: [
      "Sponsership",
      "Promotions",
      "Advertising",
      "Messaging",
      "Sorting Out Your T's & C's",
    ],
    caseStudies: ["SPAM case study"],
  },
};

function changePopupContents(Blob) {
  let BlobId = Blob.id;
  console.log(BlobId);
  let newTitle = popupObject[BlobId].title;
  cssPopup.children[0].innerHTML = newTitle;

  let newBullets = popupObject[BlobId].points;

  cssPopup.querySelector(".popup-list").innerHTML = "";
  newBullets.forEach((bullet) => {
    let newPoint = document.createElement("li");
    newPoint.classList.add("popup-list-item");
    newPoint.innerText = bullet;
    popupList.appendChild(newPoint);
  });

  let newLinks = popupObject[BlobId].caseStudies;

  let oldLinks = cssPopup.querySelector("p");
  oldLinks.innerHTML = "";

  newLinks.forEach((link) => {
    let newLink = document.createElement("a");
    newLink.classList.add("popup-link");
    newLink.innerText = link;
    newLink.setAttribute("href", "https://www.google.com");
    oldLinks.appendChild(newLink);
  });
}

(function () {
  let isPortrait = window.matchMedia("all and (orientation: portrait)").matches;

  if (isPortrait) {
    console.log("IM PORTRAIT");
    graphBlobs.forEach((blob) => {
      blob.addEventListener("click", () => {
        cssPopup.style.opacity = 1;
        dimmer.style.opacity = 0.6;
        cssPopup.style.pointerEvents = "all";
        changePopupContents(blob);
        cssPopup.querySelector(".cross").addEventListener("click", () => {
          cssPopup.style.opacity = 0;
          dimmer.style.opacity = 0;

          cssPopup.style.pointerEvents = "none";
        });
        cssPopup.classList.remove("fade-out");
        cssPopup.classList.add("mobile-popup");
      });
    });
  } else {
    // HOVER EFFECT FOR LANDSCAPE DEVICES ONLY
    graphBlobs.forEach((blob) => {
      blob.addEventListener("mouseover", (e) => {
        // let popup = createPopup(blob);
        // console.log(popup);
        // desktopGraph.appendChild(popup);
        cssPopup.style.top = `${blob.getAttribute("y")}`;
        cssPopup.style.left = `${blob.getAttribute("x")}`;
        changePopupContents(blob);
        cssPopup.classList.remove("fade-out");
      });

      blob.addEventListener("mouseleave", () => {
        cssPopup.classList.add("fade-out");
      });
    });
  }
})();

const box = document.querySelector(".brandbox");
const logoArray = [...document.querySelectorAll(".brandbox img")];
const logoLength = logoArray.length;
let currentLogo = 0;

ScrollTrigger.create({
  trigger: ".brandbox",
  start: "top 70%",
  onEnter: () => {
    let loop = setInterval(() => {
      logoArray[currentLogo].classList.add("active");
      console.log(++currentLogo);
      if (currentLogo === logoLength) {
        clearInterval(loop);
      }
    }, 180);
  },
  markers: false,
});
