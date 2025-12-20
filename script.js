function loader() {
    var tl = gsap.timeline()

    tl.to(".yellow1", {
        top: "-100%",
        duration: 0.5,
        delay: 0.4,
        ease: "expo.in",
    })
    tl.to(".headline", {
        color: "#000",
        duration: 0.3,
    }, "<")

    tl.to(".bg-video", {
        duration: 0.5,
        delay: -0.2,
    })
    tl.to(".headline", {
        color: "#fff",
        duration: 0.3,
    }, "<")

    tl.from(".yellow2", {
        top: "100%",
        duration: 0.5,
        delay: 0.8,
        ease: "expo.out",
    })
    tl.to(".headline", {
        color: "#000",
        duration: 0.3,
    }, "<")

    tl.to(".loader", {
        opacity: 0,
    })

    tl.to(".loader", {
        display: "none",
    })

    tl.to(".headline", {
        top: "-20%",
        duration: 0.6,
        delay: 0.09,
        ease: "ease.inOut(4)",
    })
}

loader();