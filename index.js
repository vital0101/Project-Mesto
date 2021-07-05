//const profileInfo = document.querySelector(".profile__info");
//console.log(profileInfo);
const profileEditButton = document.querySelector(".profile__edit-button");
console.log(profileEditButton);
const popUp = document.querySelector(".popup");
//console.log(popUp);
// popUp.addEventListener("click");

function openProfile() {
  popUp.setAttribute("display", "block");
}

profileEditButton.addEventListener("click", openProfile);

//popUp.hasAttribute("display");
