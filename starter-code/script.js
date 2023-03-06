var btn = document.querySelector("button");
var don = document.querySelector("strong");

btn.addEventListener("click", () => {
  if (don.style.display === "none") {
    don.style.display = "none";
  } else {
    don.style.display = "block";
  }
});
