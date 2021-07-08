//const profileInfo = document.querySelector(".profile__info");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popupToggle = document.querySelector(".popup__toggle");
const popUp = document.querySelector(".popup");

// function openProfile() {
//   // popUp.setAttribute("style", "display:block");
// }
// profileEditButton.addEventListener("click", openProfile);

profileEditButton.onclick = function () {
  popUp.classList.add("popup_opened");
  console.log("Меня нажали!");
};

popupToggle.onclick = function () {
  popUp.classList.remove("popup_opened");
  console.log("Меня тоже нажали!");
};
