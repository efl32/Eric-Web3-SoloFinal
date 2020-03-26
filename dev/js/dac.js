var morphDac = gsap.timeline({paused: true});

morphDac.to("#svg1a", { duration:.5, morphSVG: "#svg1d"},"dac")
.to("#svg2a", {duration:.5, morphSVG: "#svg2d"},"dac")
.to("#svg3a", {duration:.5, morphSVG: "#svg3d"},"dac")
.to("#svg4a", {duration:.5, morphSVG: "#svg4d"},"dac")
.to("#svg5a", {duration:.5, morphSVG: "#svg5d"},"dac")
.to("#svg6a", {duration:.5, morphSVG: "#svg6d"},"dac")
.to("#svg7a", {duration:.5, morphSVG: "#svg7d"},"dac")
.to("#svg8a", {duration:.5, morphSVG: "#svg8d"},"dac")
.to("#svg9a", {duration:.5, morphSVG: "#svg9d"},"dac")
.to("#svg10a", {duration:.5, morphSVG: "#svg10d"},"dac")
.to("#svg11a", {duration:.5, morphSVG: "#svg11d"},"dac")
.to("#svg12a", {duration:.5, morphSVG: "#svg12d"},"dac")
.to("#svg13a", {duration:.5, morphSVG: "#svg13d"},"dac")
.to("#svg14a", {duration:.5, morphSVG: "#svg14d"},"dac")
.to("#svg15a", {duration:.5, morphSVG: "#svg15d"},"dac")
.to("#svg16a", {duration:.5, morphSVG: "#svg16d"},"dac")
.to("#svg17a", {duration:.5, morphSVG: "#svg17d"},"dac")
.to("#svg18a", {duration:.5, morphSVG: "#svg18d"},"dac")

.to("#pic-a", {display:"none"},"dac")
.to("#pic-b", {display:"none"},"dac")
.to("#pic-c", {display:"none"},"dac")
.to("#pic-d", {display:"block"},"dac")
.to("#pic-e", {display:"none"},"dac")

.to("#mainBuildingAddress", {duration: .000001, alpha: 0, display:"none"},"dac")
.to("#lebowAddress", {duration: .000001, alpha: 0, display:"none"},"dac")
.to("#papaAddress", {duration: .000001, alpha: 0, display:"none"},"dac")
.to("#dacAddress", {duration: .000001, alpha: 1, display:"block"},"dac")
.to("#perelAddress", {duration: .000001, alpha: 0, display:"none"},"dac")

.to("#mainBuildingInfo", {duration: .000001, alpha: 0, display:"none"},"dac")
.to("#lebowInfo", {duration: .000001, alpha: 0, display:"none"},"dac")
.to("#papaInfo", {duration: .000001, alpha: 0, display:"none"},"dac")
.to("#dacInfo", {duration: .000001, alpha: 1, display:"block"},"dac")
.to("#perelInfo", {duration: .000001, alpha: 0, display:"none"},"dac");

$("#button4").on("click", svgToDac);

function svgToDac(){
    console.log("click");

    if(hiddenDac === true){
        morphDac.invalidate().restart();
        morphDac.play();
        hiddenMainBuilding = true;
        hiddenLebow = true;
        hiddenPapa = true;
        hiddenDac = false;
        hiddenPerel = true;
    }else{
        hiddenDac = false;
    }
};
