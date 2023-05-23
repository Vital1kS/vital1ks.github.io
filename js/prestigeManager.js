function buyPrestige(){
    if(mainValue.gte(prestigeLayerCost)){
        if(confirm("Are you sure you want to reset data and unlock new functions?")){
            mainValue = mainValue.minus(prestigeLayerCost);
            unlockPrestige();
        }
    }
}
function unlockPrestige(){
    prestigeLayerCount++;
    prestigeLayerCost = prestigeLayerCost.mul("1e5");
    let selectLayer2Button = document.getElementById("selectLayer2Button");
    let selectLayer3Button = document.getElementById("selectLayer3Button");
    prestigeLayerCount > 1 ? selectLayer2Button.hidden=false :selectLayer2Button.hidden=true;
    prestigeLayerCount > 2 ? selectLayer3Button.hidden=false :selectLayer3Button.hidden=true;
    if(prestigeLayerCount>1) initLayer1Data();
    selectLayer(prestigeLayerCount);
    calculateIncome();
    saveData();
    paintPrestigeButton();
    refreshText();
}
function paintPrestigeButton(){
    let prestigeLayerButton = document.getElementById("prestigeLayerButton");
    prestigeLayerButton.classList.remove("secondPrestige");
    if(prestigeLayerCount == 1){
        prestigeLayerButton.classList.add("secondPrestige");
    }
    else if (prestigeLayerCount == 2) {
        prestigeLayerButton.classList.add("thirdPrestige");
    }
}