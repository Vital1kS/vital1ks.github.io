function initialize(){
    initAllData();
    loadData();
    initPrestigeLayers();
    initBuyButtonsP1();
    initBuyButtonsP2();
    initBuyButtonsP3();
    initSelectButtons();
    selectLayer(selectedLayer);
    startTicker();
    let mainValueObj = document.getElementById("mainValueContainer");
    mainValueObj.ondblclick = () => {selectDebugLayerButton.hidden = false};
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
function initBuyButtonsP3(){
    for(let i =1; i<=6;i++){
        let levelButton = document.getElementById("level"+i+"ButtonP3");
        levelButton.addEventListener("click",buyUpgrade);
        levelButton.level = i;
        levelButton.prestige = 3;
        let levelMaxButton = document.getElementById("level"+i+"MaxButtonP3");
        levelMaxButton.addEventListener("click",buyMaxUpgrade);
        levelMaxButton.level = i;
        levelMaxButton.prestige = 3;
    }
    let dividerButton = document.getElementById("dividerButton");
    dividerButton.addEventListener("click",buyDivider);
    let dividerMaxButton = document.getElementById("dividerMaxButton");
    dividerMaxButton.addEventListener("click",buyMaxDivider);
}
function initPrestigeLayers(){
    let buyPrestigeButton = document.getElementById("prestigeLayerButton");
    buyPrestigeButton.addEventListener("click",buyPrestige);
    let selectLayer2Button = document.getElementById("selectLayer2Button");
    let selectLayer3Button = document.getElementById("selectLayer3Button");
    paintPrestigeButton();
    prestigeLayerCount > 1 ? selectLayer2Button.hidden=false :selectLayer2Button.hidden=true;
    prestigeLayerCount > 2 ? selectLayer3Button.hidden=false :selectLayer3Button.hidden=true;
    selectDebugLayerButton.hidden = true;
}