////// VARIABLES ////////////

const panels = document.querySelectorAll('.panels div')
const main = document.querySelector('.main-container')
const content = document.querySelector('.content-container')
const links = document.querySelector('.links')

////// EVENTS /////////////////

function navHandler(e) {
  if (e.target.className === "links--about") {
    console.log('yo')
    anime({
      targets: content,
      backgroundColor: 'red',
      opacity: 1,
      easing: 'easeOutExpo',
      duration: 3000
      })
  }
}

links.addEventListener('click', navHandler)

/////// ANIMATIONS ////////////////////


let tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 750
});

tl.add({
  targets: panels,
  backgroundColor: 'rgb(237, 202, 165)',
  width: '100%',
  delay: anime.stagger(100)
})
tl.add({
  targets: main,
  top: '0',
  opacity: 1,
  duration: 4000
})
