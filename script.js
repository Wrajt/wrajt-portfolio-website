$(document).ready(function () {
  var mouseX, mouseY;
  var ww = $(window).width();
  var wh = $(window).height();
  var traX, traY;
  $(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    traX = (4 * mouseX) / 570 + 40;
    traY = (4 * mouseY) / 570 + 50;
    console.log(traX);
    $(".title").css({ "background-position": traX + "%" + traY + "%" });
  });
});

const checkbox = document.getElementById("dark-mode-checkbox");
const body = document.querySelector("body");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
