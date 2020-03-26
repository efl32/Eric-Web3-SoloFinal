var burgerMove = gsap.timeline({paused: true});

burgeMove.to("#burgerTop", {duration: 0.25},"click")
.to("#burgerBottom", {duration: 0.25},"click");

$("#burgerSection").on("click", burgerClick);

function burgerClick(){
    console.log("click");

    if(canYouSeeNav === false){
        burgerMove.play();
        canYouSeeNav = true;
    }else{
        burgerMove.reverse();
        canYouSeeNav = false;
    }

};
