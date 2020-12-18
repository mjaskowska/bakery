// hamburger
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

// hero animation
const heroContent = document.querySelector('.hero-list');

gsap.fromTo(heroContent.children, {x: '+=150', opacity: 0}, {x: 0, opacity: 1, duration: 1.5, ease: 'easeInOut'})

// scroll trigger all sections animation
gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  gsap.fromTo(section.children, {y: '+=50', opacity: 0}, {y: 0, opacity: 1, duration: 1, ease: 'easeInOut', scrollTrigger: {
    trigger: section,
    start: 'top 80%'
  }})
})


