const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

gsap.to("#navbar", {
  backgroundColor: "#dadada",
  scrollTrigger: {
    trigger: "#page",
    start: "bottom center",
    toggleClass: "scrolled",
    scrub: true,
  },
});
