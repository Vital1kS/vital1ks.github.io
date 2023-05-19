function selectLayer(layer){
    let prestigeLayer1 = document.getElementById("prestigeLayer1");
    let prestigeLayer2 = document.getElementById("prestigeLayer2");
    prestigeLayer1.hidden=true;
    prestigeLayer2.hidden=true;
    getLayer(layer).hidden=false;
    selectedLayer = layer;
}
function selectLayerEvent(event){
    let layer = event.currentTarget.layer;
    selectLayer(layer);
}
function getLayer(layer){
    switch(Number(layer)){
        case 1: return document.getElementById("prestigeLayer1");
        case 2: return document.getElementById("prestigeLayer2");
    }
}
function initSelectButtons(){
    let selectLayer1Button = document.getElementById("selectLayer1Button");
    let selectLayer2Button = document.getElementById("selectLayer2Button");
    selectLayer1Button.addEventListener("click",selectLayerEvent);
    selectLayer2Button.addEventListener("click",selectLayerEvent);
    selectLayer1Button.layer = 1;
    selectLayer2Button.layer = 2;
}