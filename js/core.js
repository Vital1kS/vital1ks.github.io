function initialize(){
    initAllData();
    initPrestigeLayers();
    loadData();
    initBuyButtonsP1();
    initBuyButtonsP2();
    initSelectButtons();
    selectLayer(selectedLayer);
    startTicker();
}
function initBuyButtonsP1(){
    for(let i =1; i<=6;i++){
        let levelButton = document.getElementById("level"+i+"ButtonP1");
        levelButton.addEventListener("click",buyUpgrade);
        levelButton.level = i;
        levelButton.prestige = 1;
        let levelMaxButton = document.getElementById("level"+i+"MaxButtonP1");
        levelMaxButton.addEventListener("click",buyMaxUpgrade);
        levelMaxButton.level = i;
        levelMaxButton.prestige = 1;
    }
    let timeIntervalButton = document.getElementById("timeIntervalButton");
    timeIntervalButton.addEventListener("click",buyTimeInterval);
    let timeIntervalMaxButton = document.getElementById("timeIntervalMaxButton");
    timeIntervalMaxButton.addEventListener("click",buyMaxTimeInterval);
}
function initBuyButtonsP2(){
    for(let i =1; i<=6;i++){
        let levelButton = document.getElementById("level"+i+"ButtonP2");
        levelButton.addEventListener("click",buyUpgrade);
        levelButton.level = i;
        levelButton.prestige = 2;
        let levelMaxButton = document.getElementById("level"+i+"MaxButtonP2");
        levelMaxButton.addEventListener("click",buyMaxUpgrade);
        levelMaxButton.level = i;
        levelMaxButton.prestige = 2;
    }
    let multiplierButton = document.getElementById("multiplierButton");
    multiplierButton.addEventListener("click",buyMultiplier);
    let multiplierMaxButton = document.getElementById("multiplierMaxButton");
    multiplierMaxButton.addEventListener("click",buyMaxMultiplier);
}
function initPrestigeLayers(){
    let buyPrestigeButton = document.getElementById("prestigeLayerButton");
    buyPrestigeButton.addEventListener("click",buyPrestige);
    let selectLayer2Button = document.getElementById("selectLayer2Button");
    paintPrestigeButton();
    prestigeLayerCount > 1 ? selectLayer2Button.hidden=false :selectLayer2Button.hidden=true;
}