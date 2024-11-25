document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {});
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  gsap.registerPlugin(ScrollTrigger);

  const images = document.querySelectorAll(".img-reveal");


  gsap.from(".heading-hero h1", {
    y: 40,
    opacity: 0,
    duration: 0.6,
    autoAlpha: 0,
    ease: "back",
  })
  images.forEach((image, index) => {
    gsap.from(image, {
      clipPath: "inset(0 0 100% 0)",
      scale: 0.95,
      ease: "power4.inOut",
      duration: 1,
      ease: "power3.inOut",
      stagger: 0.3,
      scrollTrigger: {
        trigger: image,
        start: "top 80%",
        end: "bottom 20%",
      },
    });
  });
});
