var menuButton = document.querySelector("#menuButton");
var menu = document.querySelector("#menu");
var menuButtonSection = document.querySelector("#menuButtonSection");
if (window.innerWidth <= 640) {
  menu.style.display = "none";
} else {
  menuButtonSection.style.display = "none";
}
menuButton.addEventListener("click", function () {
  if (menu.style.display == "none") {
    menu.style.display = "";
  } else {
    menu.style.display = "none";
  }
});
