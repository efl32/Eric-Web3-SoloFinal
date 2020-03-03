var burgerClick = gsap.timeline({paused: true});

burgerClick.to("#mainBuildingNav", {duration: 0.08, x: 72},"Item1")
.to("#lebowNav", {duration: 0.08, x: 72},"Item1")
.to("#papaNav", {duration: 0.08, x: 72},"Item1")
.to("#dakNav", {duration: 0.08, x: 72},"Item1")
.to("#perelNav", {duration: 0.08, x: 72},"Item1")

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
