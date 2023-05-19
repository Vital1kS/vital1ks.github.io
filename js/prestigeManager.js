function buyPrestige(){
    if(mainValue.gte(prestigeLayerCost)){
        if(confirm("Are you sure you want to reset data and unlock new functions?")){
            mainValue = mainValue.minus(prestigeLayerCost);
            prestigeLayerCount++;
            prestigeLayerCost = prestigeLayerCost.mul("1e10");
            let prestigeLayer2 = document.getElementById("prestigeLayer2");
            prestigeLayerCount > 1 ? prestigeLayer2.hidden=false :prestigeLayer2.hidden=true;
            if(prestigeLayerCount>1) initLayer1Data();
            calculateIncome();
            saveData();
            paintPrestigeButton();
            refreshText();
        }
    }
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