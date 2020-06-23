import Scrollbar from "smooth-scrollbar";

let cssPopup = document.querySelector(".popup");

const graphBlobs = document.querySelectorAll(".graphBlob");
const desktopGraph = document.querySelector(".graph");

const popupObject = {
  Innovation: {
    title: "3 word title",
    points: ["Touch, Smell, Sight, Sound", "Real Touchy Feely Stuff"],
    caseStudies: ["Tacticle Dynamics"],
  },

  Branding: {
    title: "New branding title",
    points: ["Brandig point 1", "Branding point 2", "Branding point 3"],
    caseStudies: ["Branding Case Study"],
  },
};

function changePopupContents(Blob) {
  let BlobId = Blob.id;
  console.log(cssPopup.children[0].innerHTML, BlobId);
  let newTitle = popupObject[BlobId].title;
  cssPopup.children[0].innerHTML = newTitle;
}

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

// const scream = document.createElement("h1");
// scream.innerText = "PLEASE BE ON TOP";

// desktopGraph.appendChild(scream);
