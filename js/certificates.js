var current = "none";
const seeMore = document.getElementById("seemore");
const seeLess = document.getElementById("seeless");

document.getElementById("moreless-button").addEventListener("click", () => {
  if (current === "expanded") {
    seeLess.style.display = "none";
    seeMore.style.display = "block";
    current = "none";
  } else {
    seeMore.style.display = "none";
    seeLess.style.display = "block";
    current = "expanded";
  }
});
