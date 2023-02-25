import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



var tl = gsap.timeline();

tl.from("header", {
  y: 100,
  duration: 1,
  opacity: 0
});
tl.from(".mainBlock__title", {
  y: 100,
  duration: 1,
  opacity: 0
}, "-=0.7");
tl.from(".mainBlock__button", {
  y: 100,
  duration: 1,
  opacity: 0
}, "-=0.7");


gsap.from(".softline", {
  opacity: 0,
  y: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".softline",
    start: "center 90%",
    end: "center 10%"
  }
});

let counterItems = document.querySelectorAll('.counter__items')

var counterTl = gsap.timeline();

counterItems.forEach((el) => {
  counterTl.from(el, 0.3, {
    y: 100,
    opacity: 0,
    delay: 0.1,
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "center 90%",
      end: "center 10%"
    }
  })
})



gsap.from('.mission__title', 0.3, {
  y: 100,
  opacity: 0,
  delay: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.mission__title',
    start: "center 90%",
    end: "center 10%"
  }
})

gsap.from('.mission__subtitle', 0.3, {
  y: 100,
  opacity: 0,
  delay: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.mission__subtitle',
    start: "center 90%",
    end: "center 10%"
  }
})

gsap.from('.img__one', 0.3, {
  x: -100,
  opacity: 0,
  delay: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.img__one',
    start: "center 90%",
    end: "center 10%"
  }
})

gsap.from('.img__two', 0.3, {
  x: 100,
  opacity: 0,
  delay: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.img__one',
    start: "center 90%",
    end: "center 10%"
  }
})

gsap.from('.business__title', 0.3, {
  y: 100,
  opacity: 0,
  delay: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.img__one',
    start: "center 90%",
    end: "center 10%"
  }
})

gsap.from('.compensation__title', 0.3, {
  y: 100,
  opacity: 0,
  delay: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.compensation__title',
    start: "center 90%",
    end: "center 10%"
  }
})

gsap.from('.compensation__motion__title', 0.3, {
  y: 100,
  opacity: 0,
  delay: 0.1,
  ease: "none",
  scrollTrigger: {
    trigger: '.compensation__motion__title',
    start: "center 90%",
    end: "center 10%"
  }
})