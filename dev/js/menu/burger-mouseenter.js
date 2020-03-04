burgerHover = gsap.timeline({paused: true});

burgerHover.from("#topLineStroke", {alpha: 1, drawSVG:"50% 50%",duration: 0.25,},"hover")
.from("#bottomLineStroke", {alpha: 1, drawSVG:"50% 50%",duration: 0.25,},"hover");

$("#burgerContainer").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        burgerHover.play();
    }
});
