function buyPrestige(){
    if(mainValue.gte(prestigeLayerCost)){
        if(confirm("Are you sure you want to reset data and unlock new functions?")){
            unlockPrestige();
        }
    }
}
function unlockPrestige(){
    mainValue = mainValue.minus(prestigeLayerCost);
    prestigeLayerCount++;
    prestigeLayerCost = prestigeLayerCost.mul("1e10");
    let selectLayer2Button = document.getElementById("selectLayer2Button");
    prestigeLayerCount > 1 ? selectLayer2Button.hidden=false :selectLayer2Button.hidden=true;
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