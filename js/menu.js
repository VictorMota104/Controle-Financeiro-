//Menu Mobile//
var menu = document.querySelector(".menu-mobile");
var button = document.querySelector(".hamburguer");
var close = document.querySelector(".close");

button.addEventListener("click", function menuMobile() {
  menu.style.display = "block";
});

close.addEventListener("click", function menuMobile() {
  menu.style.display = "none";
});
