const detailsButton = document.getElementById("contactInfo");
const closeButton = document.getElementById("cancel");
const dialog = document.getElementById("moreInfo");
const active = document.getElementsByClassName("sidebar")[0];

function openCheck(dialog) {
  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

// Update button opens a modal dialog
detailsButton.addEventListener("click", () => {
  dialog.showModal();
  active.classList.add("active");
  openCheck(dialog);
});

// Form cancel button closes the dialog box
closeButton.addEventListener("click", () => {
  dialog.close();
  active.classList.remove("active");
  openCheck(dialog);
});