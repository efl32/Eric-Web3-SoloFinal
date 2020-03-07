var burgerClick = gsap.timeline({paused: true});

burgerClick.to("#burgerContainer", {duration: 0.25, scaleX: .2},"click")
.to("#topLine", {duration: 0.25, y: 50},"click")
.to("#bottomLine", {duration: 0.25, y: -50},"click");

$("#burgerContainer").on("click", burgerClick);

function burgerClick(){
    console.log("click");

    if(canYouSeeNav === false){
        burgerClick.invalidate().restart();
        burgerClick.play();
        canYouSeeNav = true;
    }else{
        burgerClick.reverse();
        canYouSeeNav = false;
    }

};
