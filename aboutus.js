
document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".overlappende_billeder2 img");

  images.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = "1";
    }, index * 1000); 
});
