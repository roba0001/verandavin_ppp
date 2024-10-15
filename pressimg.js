const popImage3 = document.getElementById('popImage3')

function handleScroll() {
  const scrollPosition = window.scrollY
  const imagePosition = popImage3.offsetTop

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    popImage3.style.opacity = 1
    popImage3.classList.add('pop-animation')
  }
}

window.addEventListener('scroll', handleScroll)

const popImage4 = document.getElementById('popImage4')

function handleScroll2() {
  const scrollPosition = window.scrollY
  const imagePosition = popImage4.offsetTop

  const delay = 10

  if (scrollPosition > imagePosition - window.innerHeight / 2) {
    setTimeout(() => {
      popImage4.style.opacity = 1
      popImage4.classList.add('pop-animation')
    }, delay)
  }
}

window.addEventListener('scroll', handleScroll2)
