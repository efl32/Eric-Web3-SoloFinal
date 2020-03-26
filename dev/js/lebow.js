var morphLebow = gsap.timeline({paused: true});

morphLebow.to("#svg1a", {duration:.5, morphSVG: "#svg1b"},"lebow")
.to("#svg2a", {duration:.5, morphSVG: "#svg2b"},"lebow")
.to("#svg3a", {duration:.5, morphSVG: "#svg3b"},"lebow")
.to("#svg4a", {duration:.5, morphSVG: "#svg4b"},"lebow")
.to("#svg5a", {duration:.5, morphSVG: "#svg5b"},"lebow")
.to("#svg6a", {duration:.5, morphSVG: "#svg6b"},"lebow")
.to("#svg7a", {duration:.5, morphSVG: "#svg7b"},"lebow")
.to("#svg8a", {duration:.5, morphSVG: "#svg8b"},"lebow")
.to("#svg9a", {duration:.5, morphSVG: "#svg9b"},"lebow")
.to("#svg10a", {duration:.5, morphSVG: "#svg10b"},"lebow")
.to("#svg11a", {duration:.5, morphSVG: "#svg11b"},"lebow")
.to("#svg12a", {duration:.5, morphSVG: "#svg12b"},"lebow")
.to("#svg13a", {duration:.5, morphSVG: "#svg13b"},"lebow")
.to("#svg14a", {duration:.5, morphSVG: "#svg14b"},"lebow")
.to("#svg15a", {duration:.5, morphSVG: "#svg15b"},"lebow")
.to("#svg16a", {duration:.5, morphSVG: "#svg16b"},"lebow")
.to("#svg17a", {duration:.5, morphSVG: "#svg17b"},"lebow")
.to("#svg18a", {duration:.5, morphSVG: "#svg18b"},"lebow")

.to("#pic-a", {display:"none"},"lebow")
.to("#pic-b", {display:"block"},"lebow")
.to("#pic-c", {display:"none"},"lebow")
.to("#pic-d", {display:"none"},"lebow")
.to("#pic-e", {display:"none"},"lebow")

.to("#mainBuildingAddress", {duration: .000001, alpha: 0, display:"none"},"lebow")
.to("#lebowAddress", {duration: .000001, alpha: 1, display:"block"},"lebow")
.to("#papaAddress", {duration: .000001, alpha: 0, display:"none"},"lebow")
.to("#dacAddress", {duration: .000001, alpha: 0, display:"none"},"lebow")
.to("#perelAddress", {duration: .000001, alpha: 0, display:"none"},"lebow")

.to("#mainBuildingInfo", {duration: .000001, alpha: 0, display:"none"},"lebow")
.to("#lebowInfo", {duration: .000001, alpha: 1, display:"block"},"lebow")
.to("#papaInfo", {duration: .000001, alpha: 0, display:"none"},"lebow")
.to("#dacInfo", {duration: .000001, alpha: 0, display:"none"},"lebow")
.to("#perelInfo", {duration: .000001, alpha: 0, display:"none"},"lebow");


$("#button2").on("click", svgToLebow);

function svgToLebow(){
    console.log("click");

    if(hiddenLebow === true){
        morphLebow.invalidate().restart();
        morphLebow.play();
        hiddenMainBuilding = true;
        hiddenLebow = false;
        hiddenPapa = true;
        hiddenDac = true;
        hiddenPerel = true;
    }else{
        hiddenLebow === false;
    }
};
