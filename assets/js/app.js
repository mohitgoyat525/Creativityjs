let box = document.querySelector("#box")
box.addEventListener("mousemove", function (details) {
    let boxLocation = box.getBoundingClientRect();
    let insideBoxValue = details.clientX - boxLocation.left
    if (insideBoxValue < boxLocation.width/ 2) {
        let redColor = gsap.utils.mapRange(0, boxLocation.width/2, 255, 0, insideBoxValue)
        gsap.to(box, {
          backgroundColor: `rgb(${redColor}, 0, 0)`,
          ease: "power4.out",
        });
    }
    else {
        let blueColor = gsap.utils.mapRange(
            boxLocation.width/2,
            boxLocation.width,
          0,
          255,
          insideBoxValue
        );
        gsap.to(box, {
          backgroundColor: `rgb(0, 0, ${blueColor})`,
          ease: "power4.out",
        });
    }
})
box.addEventListener("mouseleave", function () {
    gsap.to(box, {
        backgroundColor: "white",
    })
})