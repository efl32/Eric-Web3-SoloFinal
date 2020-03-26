burgerHover = gsap.timeline({paused: true});

burgerHover.from("#burgerTop", {duration: 0.25},"hover")
.from("#burgerBottom", {duration: 0.25,},"hover");

$("#burgerSection").on("mouseenter", function(){
    console.log("mouse enter");

    if(canYouSeeNav === false){
        burgerHover.play();
    }
});
