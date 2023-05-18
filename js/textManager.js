function refreshText(){
    for(let i = 1;i<=6;i++){
        let levelValue = document.getElementById("level"+i+"Value");
        let levelCount = document.getElementById("level"+i+"Count");
        let levelCost = document.getElementById("level"+i+"Cost");
        let value = getValue(i);
        let count = getCount(i);
        let cost = getCost(i);
        levelValue.innerText = getString(value);
        levelCount.innerText = getString(count);
        levelCost.innerText = getString(cost);
    }
    let intervalText = document.getElementById("timeIntervalValue");
    let intervalCountText = document.getElementById("timeIntervalCount");
    let intervalCostText = document.getElementById("timeIntervalCost");
    let mainValueText = document.getElementById("mainValue");
    let relativeIncomeText = document.getElementById("incomeValue");
    intervalText.innerText=getString(interval);
    intervalCountText.innerText=getString(timeIntervalCount);
    intervalCostText.innerText=getString(timeIntervalCost);
    mainValueText.innerText=getString(mainValue);
    relativeIncomeText.innerText=getString(relativeIncome);
}
function getString(value){
    if(value.gt("1e7")){
        return value.toExponential(2);    
    }
    else{
        return value.toFixed(2);    
    }
}