// EVENTS
const popImage = document.getElementById("popImage");

function handleScroll() {
  const scrollPosition = window.scrollY;
  const imagePosition = popImage.offsetTop;

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    popImage.style.opacity = 1;
    popImage.classList.add("pop-animation");
  }
}

window.addEventListener("scroll", handleScroll);

const popImage2 = document.getElementById("popImage2");

function handleScroll2() {
  const scrollPosition = window.scrollY;
  const imagePosition = popImage2.offsetTop;

  // Tidsforsinkelse på 500 ms (0.5 sekunder)
  const delay = 1000;

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    // Brug setTimeout til at forsinke visningen af det andet billede
    setTimeout(() => {
      popImage2.style.opacity = 1;
      popImage2.classList.add("pop-animation");
    }, delay);
  }
}

window.addEventListener("scroll", handleScroll2);
