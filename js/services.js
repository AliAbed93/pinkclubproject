document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
    breakpoints: {
      // زمانی که عرض کمتر از 1440 پیکسل است
      1024: {
        slidesPerView: 1, // تعداد نمایش اسلایدها 1
      },
      // زمانی که عرض بیشتر از 1440 پیکسل است
      1025: {
        slidesPerView: 3, // تعداد نمایش اسلایدها 3
      },
    },
  });
  gsap.registerPlugin(ScrollTrigger);

  const projectCards = document.querySelectorAll(".getmes");
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
      trigger: ".getmes",
      start: "center center",
      toggleActions: "play none none reverse",
    },
  });
  let sections = gsap.utils.toArray(".slide-wrp");
  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    gsap.to(sections, {
      xPercent: 100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizental-scroll-wrapper",
        pin: true,
        pinSpacing: true,
        scrub: true,
      },
    });
  });
});
