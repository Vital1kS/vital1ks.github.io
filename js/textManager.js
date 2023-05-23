function refreshText(){
    for(let prestige = 1; prestige<=prestigeMaxCount;prestige++){
        for(let level = 1;level<=6;level++){

            let levelValue = document.getElementById("level"+level+"ValueP"+prestige);
            let levelCount = document.getElementById("level"+level+"CountP"+prestige);
            let levelCost = document.getElementById("level"+level+"CostP"+prestige);

            let value = getValue(level,prestige);
            let count = getCount(level,prestige);
            let cost = getCost(level,prestige);
            levelValue.innerText = getString(value);
            levelCount.innerText = getString(count);
            levelCost.innerText = getString(cost);
        }
    }
    let intervalText = document.getElementById("timeIntervalValue");
    let intervalCountText = document.getElementById("timeIntervalCount");
    let intervalCostText = document.getElementById("timeIntervalCost");
    let mainValueText = document.getElementById("mainValue");
    let relativeIncomeText = document.getElementById("incomeValue");
    let multiplierValueText = document.getElementById("multiplierValue");
    let multiplierCountText = document.getElementById("multiplierCount");
    let multiplierCostText = document.getElementById("multiplierCost");
    let dividerValueText = document.getElementById("dividerValue");
    let dividerCountText = document.getElementById("dividerCount");
    let dividerCostText = document.getElementById("dividerCost");
    let prestigeLayerCostText = document.getElementById("prestigeLayerCost");
    intervalText.innerText=getString(interval);
    intervalCountText.innerText=getString(timeIntervalCount);
    intervalCostText.innerText=getString(timeIntervalCost);
    mainValueText.innerText=getString(mainValue);
    relativeIncomeText.innerText=getString(relativeIncome);
    multiplierValueText.innerText=getString(multiplierValue);
    multiplierCountText.innerText=getString(multiplierCount);
    multiplierCostText.innerText=getString(multiplierCost);
    dividerValueText.innerText=getString(dividerValue);
    dividerCountText.innerText=getString(dividerCount);
    dividerCostText.innerText=getString(dividerCost);
    prestigeLayerCostText.innerText=getString(prestigeLayerCost)
}
function getString(value){
    if(value.gte("1e6")){
        return value.toExponential(2);    
    }
    else{
        return value.toFixed(2);    
    }
}