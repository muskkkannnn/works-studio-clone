// <!-- Locomotive CDN  -->
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// Loading animation
var tl = gsap.timeline()

tl.to(".yellow1", {
    top: "-100%",
    duration: 0.5,
    delay: 0.4,
    ease: "expo.in",
})
.to(".headline", {
  color: "black"
}, "<");

tl.to(".bg-video", {
    duration: 0.5,
    delay: -0.2,
})
.to(".headline", {
  color: "white"
}, "<");

tl.from(".yellow2", {
    top: "100%",
    duration: 0.5,
    delay: 0.8,
    ease: "expo.out",
})
.to(".headline", {
  color: "black"
}, "<");

tl.to(".loader",{
    display: "none",
})
tl.to(".loader",{
    opacity: 0,
})
