
document.addEventListener("DOMContentLoaded", () => {
  var TrandingSlider = new Swiper(".tranding-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    initialSlide: 1,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  //friends companies slider
  const companiesContainer = document.querySelectorAll(".slider-wrap");
  const nextBtn = document.querySelectorAll(".nxt-btn");
  const preBtn = document.querySelectorAll(".pre-btn");
  companiesContainer.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let width = containerDimension.width;
  
    nextBtn[i].addEventListener("click", () => {
      item.scrollLeft += width;
    });
    preBtn[i].addEventListener("click", () => {
      item.scrollLeft -= width;
    });
  });
  gsap.registerPlugin(ScrollTrigger);

  const aboutSection = document.getElementById("about-section");

  const path = document.querySelector("path.line");
  const steps = document.querySelectorAll("g.step");
  path.setAttribute("stroke-dasharray", path.getTotalLength());
  path.setAttribute("stroke-dashoffset", path.getTotalLength());

  gsap.to(path, {
    duration: 1.6,
    strokeDashoffset: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".about-content",
      start: "top center",
    },
  });
  gsap.from(steps, {
    duration: 0.3,
    stagger: 0.3,
    scale: 0,
    opacity: 0,
    autoAlpha: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".line",
      start: "top center",
    },
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: "center center",
      scrub: true,
      pin: true,
      pinSpacing: true,
    },
  });
  timeline.add(
    gsap.to(aboutSection, {
      filter: "blur(5px)",
      scale: 0.95,
      ease: "power1.inOut",
      duration: 5,
    })
  );

  timeline.add(
    gsap.to("#projects-section", {
      y: -650,
      ease: "power1.inOut",
    }),
    0
  );
// FRIENDS
  gsap.from(".get-wide", {
    scrollTrigger: {
      trigger: "#friend-companies-section",
      start: "top 30%",
      toggleActions: "play none none NONE",
    },
    scaleX: 0.95,
    duration: 1, //SPEED
    ease: "power4.inOut",
  });

  const projectCards = document.querySelectorAll(".project-cards");
  projectCards.forEach((card) => {
    gsap.set(card, {
      x: () => Math.random() * 40 - 20,
      y: () => Math.random() * 40 - 20,
      rotation: () => Math.random() * 20 - 10,
      scale: 0.9,
    });
  });

  gsap.to(projectCards, {
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    duration: 0.4,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".project-cards",
      start: "top 110%",
      toggleActions: "play none none none",
    },
  });
});


