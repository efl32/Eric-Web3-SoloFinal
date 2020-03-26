var morphPapa = gsap.timeline({paused: true});

morphPapa.to("#svg1a", {duration:.5, morphSVG: "#svg1c"},"papa")
.to("#svg2a", {duration:.5, morphSVG: "#svg2c"},"papa")
.to("#svg3a", {duration:.5, morphSVG: "#svg3c"},"papa")
.to("#svg4a", {duration:.5, morphSVG: "#svg4c"},"papa")
.to("#svg5a", {duration:.5, morphSVG: "#svg5c"},"papa")
.to("#svg6a", {duration:.5, morphSVG: "#svg6c"},"papa")
.to("#svg7a", {duration:.5, morphSVG: "#svg7c"},"papa")
.to("#svg8a", {duration:.5, morphSVG: "#svg8c"},"papa")
.to("#svg9a", {duration:.5, morphSVG: "#svg9c"},"papa")
.to("#svg10a", {duration:.5, morphSVG: "#svg10c"},"papa")
.to("#svg11a", {duration:.5, morphSVG: "#svg11c"},"papa")
.to("#svg12a", {duration:.5, morphSVG: "#svg12c"},"papa")
.to("#svg13a", {duration:.5, morphSVG: "#svg13c"},"papa")
.to("#svg14a", {duration:.5, morphSVG: "#svg14c"},"papa")
.to("#svg15a", {duration:.5, morphSVG: "#svg15c"},"papa")
.to("#svg16a", {duration:.5, morphSVG: "#svg16c"},"papa")
.to("#svg17a", {duration:.5, morphSVG: "#svg17c"},"papa")
.to("#svg18a", {duration:.5, morphSVG: "#svg18c"},"papa")

.to("#pic-a", {display:"none"},"papa")
.to("#pic-b", {display:"none"},"papa")
.to("#pic-c", {display:"block"},"papa")
.to("#pic-d", {display:"none"},"papa")
.to("#pic-e", {display:"none"},"papa")

.to("#mainBuildingAddress", {duration: .000001, alpha: 0, display:"none"},"papa")
.to("#lebowAddress", {duration: .000001, alpha: 0, display:"none"},"papa")
.to("#papaAddress", {duration: .000001, alpha: 1, display:"block"},"papa")
.to("#dacAddress", {duration: .000001, alpha: 0, display:"none"},"papa")
.to("#perelAddress", {duration: .000001, alpha: 0, display:"none"},"papa")

.to("#mainBuildingInfo", {duration: .000001, alpha: 0, display:"none"},"papa")
.to("#lebowInfo", {duration: .000001, alpha: 0, display:"none"},"papa")
.to("#papaInfo", {duration: .000001, alpha: 1, display:"block"},"papa")
.to("#dacInfo", {duration: .000001, alpha: 0, display:"none"},"papa")
.to("#perelInfo", {duration: .000001, alpha: 0, display:"none"},"papa");

$("#button3").on("click", svgToPapa);

function svgToPapa(){
    console.log("click");

    if(hiddenPapa === true){
        morphPapa.invalidate().restart();
        morphPapa.play();
        hiddenMainBuilding = true;
        hiddenLebow = true;
        hiddenPapa = false;
        hiddenDac = true;
        hiddenPerel = true;
    }else{
        hiddenPapa = false;
    }
};
