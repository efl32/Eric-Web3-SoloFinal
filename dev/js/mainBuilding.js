var morphMain = gsap.timeline({paused: true});

morphMain.to("#svg1a", {duration:.5, morphSVG: "#svg1a"},"main")
.to("#svg2a", {duration:.5, morphSVG: "#svg2a"},"main")
.to("#svg3a", {duration:.5, morphSVG: "#svg3a"},"main")
.to("#svg4a", {duration:.5, morphSVG: "#svg4a"},"main")
.to("#svg5a", {duration:.5, morphSVG: "#svg5a"},"main")
.to("#svg6a", {duration:.5, morphSVG: "#svg6a"},"main")
.to("#svg7a", {duration:.5, morphSVG: "#svg7a"},"main")
.to("#svg8a", {duration:.5, morphSVG: "#svg8a"},"main")
.to("#svg9a", {duration:.5, morphSVG: "#svg9a"},"main")
.to("#svg10a", {duration:.5, morphSVG: "#svg10a"},"main")
.to("#svg11a", {duration:.5, morphSVG: "#svg11a"},"main")
.to("#svg12a", {duration:.5, morphSVG: "#svg12a"},"main")
.to("#svg13a", {duration:.5, morphSVG: "#svg13a"},"main")
.to("#svg14a", {duration:.5, morphSVG: "#svg14a"},"main")
.to("#svg15a", {duration:.5, morphSVG: "#svg15a"},"main")
.to("#svg16a", {duration:.5, morphSVG: "#svg16a"},"main")
.to("#svg17a", {duration:.5, morphSVG: "#svg17a"},"main")
.to("#svg18a", {duration:.5, morphSVG: "#svg18a"},"main")

.to("#pic-a", {display:"block"},"main")
.to("#pic-b", {display:"none"},"main")
.to("#pic-c", {display:"none"},"main")
.to("#pic-d", {display:"none"},"main")
.to("#pic-e", {display:"none"},"main")

.to("#mainBuildingAddress", {duration: .000001, alpha: 1, display:"block"},"main")
.to("#lebowAddress", {duration: .000001, alpha: 0, display:"none"},"main")
.to("#papaAddress", {duration: .000001, alpha: 0, display:"none"},"main")
.to("#dacAddress", {duration: .000001, alpha: 0, display:"none"},"main")
.to("#perelAddress", {duration: .000001, alpha: 0, display:"none"},"main")

.to("#mainBuildingInfo", {duration: .000001, alpha: 1, display:"block"},"main")
.to("#lebowInfo", {duration: .000001, alpha: 0, display:"none"},"main")
.to("#papaInfo", {duration: .000001, alpha: 0, display:"none"},"main")
.to("#dacInfo", {duration: .000001, alpha: 0, display:"none"},"main")
.to("#perelInfo", {duration: .000001, alpha: 0, display:"none"},"main");


$("#button1").on("click", svgToMain);

function svgToMain(){
    console.log("click");

    if(hiddenMainBuilding === true){
        morphMain.invalidate().restart();
        morphMain.play();
        hiddenMainBuilding = false;
        hiddenLebow = true;
        hiddenPapa = true;
        hiddenDac = true;
        hiddenPerel = true;
    }else{
        hiddenMainBuilding = false;
    }
};
