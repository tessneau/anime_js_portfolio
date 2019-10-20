////// VARIABLES ////////////

const panels = document.querySelectorAll('.panels div')
const main = document.querySelector('.main-container')
const content = document.querySelector('.content-container')
const about = document.querySelector('.about')
const projects = document.querySelector('.projects')
const footer = document.querySelector('.footer')
const links = document.querySelector('.links')

////// EVENTS /////////////////

function navHandler(e) {
  if (e.target.className === "links--about") {
    anime({
      targets: about,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 3000,
      begin: function() {
        about.style.display = "block";
        projects.style.display = "none";      }
      });
  } else if (e.target.className === "links--projects") {
    anime({
      targets: projects,
      opacity: [0,1],
      easing: 'easeOutExpo',
      duration: 3000,
      begin: function() {
        projects.style.display = "block";
        about.style.display = "none";
      }
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
.add({
  targets: main,
  top: 0,
  opacity: 1,
  duration: 4000
})
.add({
  targets: footer,
  bottom: 0,
  opacity: 1,
  duration: 4000
  }, '-=4000')
