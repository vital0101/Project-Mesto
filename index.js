const profileInfo = document.querySelector(".profile__info");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popupToggle = document.querySelector(".popup__toggle");
const popUp = document.querySelector(".popup");

function openProfile() {
  popUp.setAttribute("style", "display:block");
}
profileEditButton.addEventListener("click", openProfile);

function closeProfile() {
  popUp.setAttribute("style", "display:none");
}
popupToggle.addEventListener("click", closeProfile);
