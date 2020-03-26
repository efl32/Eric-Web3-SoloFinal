var morphPerel = gsap.timeline({paused: true});

morphPerel.to("#svg1a", { duration:.5, morphSVG: "#svg1e"},"perel")
.to("#svg2a", {duration:.5, morphSVG: "#svg2e"},"perel")
.to("#svg3a", {duration:.5, morphSVG: "#svg3e"},"perel")
.to("#svg4a", {duration:.5, morphSVG: "#svg4e"},"perel")
.to("#svg5a", {duration:.5, morphSVG: "#svg5e"},"perel")
.to("#svg6a", {duration:.5, morphSVG: "#svg6e"},"perel")
.to("#svg7a", {duration:.5, morphSVG: "#svg7e"},"perel")
.to("#svg8a", {duration:.5, morphSVG: "#svg8e"},"perel")
.to("#svg9a", {duration:.5, morphSVG: "#svg9e"},"perel")
.to("#svg10a", {duration:.5, morphSVG: "#svg10e"},"perel")
.to("#svg11a", {duration:.5, morphSVG: "#svg11e"},"perel")
.to("#svg12a", {duration:.5, morphSVG: "#svg12e"},"perel")
.to("#svg13a", {duration:.5, morphSVG: "#svg13e"},"perel")
.to("#svg14a", {duration:.5, morphSVG: "#svg14e"},"perel")
.to("#svg15a", {duration:.5, morphSVG: "#svg15e"},"perel")
.to("#svg16a", {duration:.5, morphSVG: "#svg16e"},"perel")
.to("#svg17a", {duration:.5, morphSVG: "#svg17e"},"perel")
.to("#svg18a", {duration:.5, morphSVG: "#svg18e"},"perel")

.to("#pic-a", {display:"none"},"perel")
.to("#pic-b", {display:"none"},"perel")
.to("#pic-c", {display:"none"},"perel")
.to("#pic-d", {display:"none"},"perel")
.to("#pic-e", {display:"block"},"perel")

.to("#mainBuildingAddress", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#lebowAddress", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#papaAddress", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#dacAddress", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#perelAddress", {duration: .000001, alpha: 1, display:"block"},"perel")

.to("#mainBuildingInfo", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#lebowInfo", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#papaInfo", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#dacInfo", {duration: .000001, alpha: 0, display:"none"},"perel")
.to("#perelInfo", {duration: .000001, alpha: 1, display:"block"},"perel");

$("#button5").on("click", svgToPerel);

function svgToPerel(){
    console.log("click");

    if(hiddenPerel === true){
        morphPerel.invalidate().restart();
        morphPerel.play();
        hiddenMainBuilding = true;
        hiddenLebow = true;
        hiddenPapa = true;
        hiddenDac = true;
        hiddenPerel = false;
    }else{
        hiddenPerel = false;
    }
};
