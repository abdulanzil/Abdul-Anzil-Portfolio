window.addEventListener("load", function () {
  var loadingBar = document.querySelector(".loading-bar");
  var content = document.getElementById("content");

  setTimeout(function () {
    loadingBar.style.animation = "fade-out 0.5s forwards";
    content.style.display = "block";
  }, 1500);
});
