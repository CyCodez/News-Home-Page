const openModalButton = document.querySelector(".open-modal-button");
const modalOverlay = document.querySelector(".modal-overlay");
const closeModalButton = document.querySelector(".close-modal-button");

openModalButton.addEventListener("click", () => {
  modalOverlay.classList.add("show-modal");
});

closeModalButton.addEventListener("click", () => {
  modalOverlay.classList.remove("show-modal");
});
