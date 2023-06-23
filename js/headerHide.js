var prevScrollPos = window.scrollY;
var startScrollPos = window.scrollY;
var scrollFlag = "up";

const headerElement = document.getElementById("myHeader");

window.addEventListener("scroll", function () {
  var currentScrollPos = window.scrollY;

  // scroll downwards
  if (currentScrollPos > prevScrollPos) {
    if (scrollFlag == "up") {
      startScrollPos = window.scrollY;
      scrollFlag = "down";
    }

    if (Math.abs(currentScrollPos - startScrollPos) > 300) {
      //.log("HIDE");
      headerElement.style.display = "none";
    }

    prevScrollPos = window.scrollY;
  }

  // scroll upwards
  else {
    if (scrollFlag == "down") {
      startScrollPos = window.scrollY;
      scrollFlag = "up";
    }

    if (Math.abs(currentScrollPos - startScrollPos) > 200) {
      //console.log("SHOW");
      headerElement.style.display = "block";
    }

    prevScrollPos = window.scrollY;
  }
});
