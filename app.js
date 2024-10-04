console.log("Connected");

const landscapeButton = document.getElementById("landscape-button");
const landscapeButtonText = "The funk soul brother...";
const pTagId = "silly-joke";

landscapeButton.addEventListener("mouseenter", function () {
  const parent = document.getElementById("hero-1");
  const newP = document.createElement("p");
  newP.textContent = landscapeButtonText;
  newP.id = pTagId;
  parent.append(newP);
});

landscapeButton.addEventListener("mouseleave", function () {
  const tagToRemove = document.getElementById(pTagId);
  tagToRemove.remove();
});

const toTop = document.getElementById("back-to-top");

document.addEventListener("scroll", function () {
  if (
    document.documentElement.scrollTop > 600 &&
    toTop.classList.contains("hidden")
  ) {
    toTop.classList.remove("hidden");
  } else if (document.documentElement.scrollTop > 600) {
    //Do nowt
  } else {
    toTop.classList.add("hidden");
  }
});

const animalsButton = document.getElementById("btn-animals");
const animalPopup = document.getElementById("animal-popup");
const closeAnimalPopup = document.getElementById("animal-close");

animalsButton.addEventListener("click", function () {
  animalPopup.classList.remove("hidden");
});

closeAnimalPopup.addEventListener("click", function () {
  animalPopup.classList.add("hidden");
});
