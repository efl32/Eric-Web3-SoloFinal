burgerHover = gsap.timeline({paused: true});

burgerHover.to("#burger", {duration: 0.25, scaleX: .2},"click")
.to("#topLine", {duration: 0.25, y: 50},"click")
.to("#bottomLine", {duration: 0.25, y: -50},"click");

$("#burgerContainer").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        burgerHover.play();
    }
});
