gsap.registerPlugin(ScrollTrigger);

/* HERO ANIMATION */
gsap.from(".title", {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".subtitle", {
  duration: 1,
  delay: 0.3,
  y: 30,
  opacity: 0
});

gsap.from(".btn", {
  duration: 1,
  delay: 0.6,
  scale: 0.8,
  opacity: 0
});

/* NAVBAR */
gsap.from("nav", {
  duration: 1,
  y: -80,
  opacity: 0
});

/* SECTION REVEAL */
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%"
    },
    y: 50,
    opacity: 0,
    duration: 1
  });
});

/* SKILLS ANIMATION */
gsap.from(".skill", {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%"
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.8
});

/* PROJECT CARDS */
gsap.from(".card", {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%"
  },
  scale: 0.8,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8
});

/* MOBILE MENU */
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}
