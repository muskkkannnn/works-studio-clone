var tl = gsap.timeline()

tl.to(".yellow1", {
    y: -600,
    duration: 0.5,
    delay: 0.6,
    ease: "expo.in",
})
.to(".headline", {
  color: "black"
}, "<");


tl.to(".bg-video", {
    y: -600,
    duration: 0.5,
    ease: "expo.in",
})
.to(".headline", {
  color: "white"
}, "<");


tl.to(".yellow2", {
    y: -1278,
    duration: 0.5,
    delay: 0.8,
    ease: "expo.out",
})
.to(".headline", {
  color: "black"
}, "<");


