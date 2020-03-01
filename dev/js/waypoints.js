var inviewAbout = new Waypoint.Inview({
  element: $('#about')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     headerBarChange(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
        headerBarChange(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
        headerBarChange(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    headerBarChange(direction , scrollDirection = "exited");
  },offset: {
    top: 84
  }
})


var inviewMeetTheChef = new Waypoint.Inview({
  element: $('#meetTheChef')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     headerBarChange(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
        headerBarChange(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
        headerBarChange(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    headerBarChange(direction , scrollDirection = "exited");
  },offset: {
    top: 84
  }
})
var inviewGallery = new Waypoint.Inview({
  element: $('#gallery')[0],
  enter: function(direction) {
     // $.notify('Enter triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
     headerBarChange(direction, scrollDirection = "enter");
  },
  entered: function(direction) {
    // $.notify('Entered triggered with direction ' + direction,{ globalPosition: 'right middle', className:"success" })
        headerBarChange(direction , scrollDirection = "entered");
  },
  exit: function(direction) {
    // $.notify('Exit triggered with direction ' + direction,{     globalPosition: 'right middle', className:"info" })
        headerBarChange(direction , scrollDirection = "exit");
  },
  exited: function(direction) {
    // $.notify('Exited triggered with direction ' + direction,{ globalPosition: 'right middle', className:"info" })
    headerBarChange(direction , scrollDirection = "exited");
  },offset: {
    top: 84
  }
})

function headerBarChange(direction, scrollDirection){

    if(direction === "up" & scrollDirection === "enter"){
        gsap.to("header",{duration:0.5,backgroundColor:secondary});
        // change the burger
        gsap.to(".burgerLines",{duration:0.25, scaleX:0,stagger:0.15})
        gsap.to(".burgerLines",{duration:0.25, scaleX:1, stroke:white,stagger:0.15,delay:0.25})
    }else if(direction === "up"& scrollDirection === "entered"){
        gsap.to("header",{duration:0.25,backgroundColor:white});
        // change the burger
        gsap.to(".burgerLines",{duration:0.25, scaleX:0,stagger:0.15})
        gsap.to(".burgerLines",{duration:0.25, scaleX:1, stroke:primaryDark,stagger:0.15,delay:0.25})
    }else if(direction === "down"& scrollDirection === "exit"){
        gsap.to("header",{duration:0.25,backgroundColor:secondary});
        // change the burger
        gsap.to(".burgerLines",{duration:0.25, scaleX:0,stagger:0.15})
        gsap.to(".burgerLines",{duration:0.25, scaleX:1, stroke:white,stagger:0.15,delay:0.25})
    } else if(direction === "down"& scrollDirection === "exited"){
        gsap.to("header",{duration:0.25,backgroundColor:white});
        // change the burger
        gsap.to(".burgerLines",{duration:0.25, scaleX:0,stagger:0.15})
        gsap.to(".burgerLines",{duration:0.25, scaleX:1, stroke:primaryDark,stagger:0.15,delay:0.25})
    }

}
