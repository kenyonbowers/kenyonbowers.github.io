var menuButton = document.querySelector("#menuButton");
var menu = document.querySelector("#menu");
var menuButtonSection = document.querySelector("#menuButtonSection");
LoadMenu();
menuButton.addEventListener("click", function () {
  if (menu.style.display == "none") {
    menu.style.display = "";
  } else {
    menu.style.display = "none";
  }
});
window.addEventListener('resize', LoadMenu);
function LoadMenu(){
  if (window.innerWidth <= 767) {
    menu.style.display = "none";
    menuButtonSection.style.display = "";
  } else {
    menuButtonSection.style.display = "none";
    menu.style.display = "";
  }
}