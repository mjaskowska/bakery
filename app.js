// hamburger icon animation
const hamburger = document.querySelector('.hamburger');
const lineTop = document.querySelector('.lineTop');
const lineMiddle = document.querySelector('.lineMiddle');
const lineBottom = document.querySelector('.lineBottom');

const lines = [lineTop, lineMiddle, lineBottom];

const tl = new TimelineMax({});

const toggleMenu = new TimelineMax({
  paused: true,
  reversed: true
});

hamburger.addEventListener('mouseenter', _ => {
  if (hamburger.classList.contains('js-cross')) {
    return;
  }
  tl.staggerTo(lines, 0.25, { scaleX: 1.2, repeat: 1, yoyo: true, ease: Power2.easeInOut }, 0.125);

});
toggleMenu
  .to(lineMiddle, 0.125, { scaleY: 0 })
  .to(lineTop, 0.125, { rotation: 45, transformOrigin: "50% 50%", y: 9, ease: Power2.easeInOut }, "cross")
  .to(lineBottom, 0.125, { rotation: -45, transformOrigin: "50% 50%", y: -9, ease: Power2.easeInOut }, "cross");

hamburger.addEventListener('click', _ => {
  hamburger.classList.toggle('js-cross');
  toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});

// hamburger menu slide in/out
const menuItems = document.querySelector('.menu-items')
hamburger.addEventListener('click', _ => {
  menuItems.classList.toggle("menu-active")
})


// hero animation
const heroContent = document.querySelector('.hero-list');

gsap.fromTo(heroContent.children, { x: '+=150', opacity: 0 }, { x: 0, opacity: 1, duration: 1.5, ease: 'easeInOut' })

// scroll trigger all sections animation
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  gsap.fromTo(section.children, { y: '+=50', opacity: 0 }, {
    y: 0, opacity: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: section,
      start: 'top 80%'
    }
  })
})

const menuItemAll = document.querySelectorAll('.menu-item')
menuItemAll.forEach(item => {
  item.addEventListener('click', function () {
    menuItems.classList.remove("menu-active")
    toggleMenu.reverse()
  })
})


// slider
var slideNo = 1;
Carousel(slideNo);

function Carousel(n) {
  var slides = document.getElementsByClassName("image-container");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideNo = 1;
  }
  if (n < 1) {
    slideNo = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideNo - 1].style.display = "block";
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideNo - 1].className += " active";

}
function newSlide(n) {
  Carousel(slideNo += n);
}
function currentSlide(n) {
  Carousel(slideNo = n);
}