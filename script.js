<<<<<<< HEAD
=======
// <!-- Locomotive CDN  -->
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// Loading animation
>>>>>>> e24189654ef97c924d972d8eb14909054b9814b8
var tl = gsap.timeline()

tl.to(".yellow1", {
    top: "-100%",
    duration: 0.5,
    delay: 0.4,
    ease: "expo.in",
})
<<<<<<< HEAD
tl.to(".headline", {
    color: "#000",
    duration: 0.3,
}, "<")
=======
.to(".headline", {
  color: "black"
}, "<");
>>>>>>> e24189654ef97c924d972d8eb14909054b9814b8

tl.to(".bg-video", {
    duration: 0.5,
    delay: -0.2,
})
<<<<<<< HEAD
tl.to(".headline", {
    color: "#fff",
    duration: 0.3,
}, "<")
=======
.to(".headline", {
  color: "white"
}, "<");
>>>>>>> e24189654ef97c924d972d8eb14909054b9814b8

tl.from(".yellow2", {
    top: "100%",
    duration: 0.5,
    delay: 0.8,
    ease: "expo.out",
})
<<<<<<< HEAD
tl.to(".headline", {
    color: "#000",
    duration: 0.3,
}, "<")

tl.to(".loader",{
    opacity: 0,
})
=======
.to(".headline", {
  color: "black"
}, "<");
>>>>>>> e24189654ef97c924d972d8eb14909054b9814b8

tl.to(".loader",{
    display: "none",
})
<<<<<<< HEAD
 
tl.to(".headline", {
    top: "-20%",
    duration: 0.6,
    delay: 0.09,
    ease: "ease.inOut(4)",
})
=======
tl.to(".loader",{
    opacity: 0,
})
>>>>>>> e24189654ef97c924d972d8eb14909054b9814b8
