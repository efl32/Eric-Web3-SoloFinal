burgerHover = gsap.timeline({paused: true});

burgerHover.to("#arrow1", {duration: 0.15, alpha:1, y: -10})
.to("#arrow2", {duration: 0.15, alpha:1, y: -10})

$("#burgerContainer").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        burgerHover.invalidate().restart();
        burgerHover.play().repeat(-1).repeatDelay(0.2);
    }
});
