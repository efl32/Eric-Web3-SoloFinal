$("#burgerSection").on("mouseleave", function(){
    console.log("mouse leave");

    if(canYouSeeNav === false){
        burgerHover.reverse();
    }
});
