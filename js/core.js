let mainValue = new Decimal(10);
let level1Value = new Decimal(0);
let level2Value = new Decimal(0);
let level3Value = new Decimal(0);
let level4Value = new Decimal(0);
let level5Value = new Decimal(0);
let level6Value = new Decimal(0);

let level1Count = new Decimal(0);
let level2Count = new Decimal(0);
let level3Count = new Decimal(0);
let level4Count = new Decimal(0);
let level5Count = new Decimal(0);
let level6Count = new Decimal(0);
let timeIntervalCount = new Decimal(0);

let level1Cost = new Decimal(10);
let level2Cost = new Decimal(100);
let level3Cost = new Decimal(1000);
let level4Cost = new Decimal(10000);
let level5Cost = new Decimal(100000);
let level6Cost = new Decimal(1000000);
let timeIntervalCost = new Decimal(100);

let interval = new Decimal(1000);
let absoluteIncome=new Decimal(0);
let relativeIncome=new Decimal(0);
let ticker;
function buyUpgrade(event){
    let level = event.currentTarget.level;
    let costValue = getCost(level);
    if(mainValue.gte(costValue)){
        let currentValueText = document.getElementById("mainValue");
        let countValueText = document.getElementById("level"+level+"CountText");
        let costValueText = document.getElementById("level"+level+"CostText");
        let currentValue = mainValue;
        let count = increaseCount(level);
        mainValue = mainValue.minus(costValue);
        currentValueText.innerText = getString(mainValue);
        countValueText.innerText = getString(count);
        costValue = increaseCost(level);
        costValueText.innerText = getString(costValue);
        increaseValue(level);
        calculateIncome();
    }
}
function initialize(){
    for(let i =1; i<=6;i++){
        let levelButton = document.getElementById("level"+i+"Button");
        levelButton.addEventListener("click",buyUpgrade);
        levelButton.level = i;
    }
    let timeIntervalButton = document.getElementById("timeIntervalButton");
    timeIntervalButton.addEventListener("click",buyTimeInterval);
    startTicker();
}
function increaseValue(level){
    let valueText = document.getElementById("level"+level+"Value");
    if(level == 1){
        level1Value = level1Count;
        valueText.innerText=getString(level1Value);
    }
    else if(level == 2){
        level2Value = level2Count.pow(2);
        valueText.innerText=getString(level2Value);
    }
    else if(level == 3){
        level3Value = level3Count.pow(3);
        valueText.innerText=getString(level3Value);
    }
    else if(level == 4){
        level4Value = level4Count.pow(4);
        valueText.innerText=getString(level4Value);
    }
    else if(level == 5){
        level5Value = level5Count.pow(5);
        valueText.innerText=getString(level5Value);
    }
    else if(level == 6){
        level6Value = level6Count.pow(6);
        valueText.innerText=getString(level6Value);
    }
}
function refreshTicker(){
    stopTicker();
    startTicker();
}
function startTicker(){
    ticker = setInterval(makeAddition,interval);
}
function stopTicker(){
    clearInterval(ticker);
}
function makeAddition(){
    mainValue=mainValue.plus(level1Value);
    mainValue=mainValue.plus(level2Value);
    mainValue=mainValue.plus(level3Value);
    mainValue=mainValue.plus(level4Value);
    mainValue=mainValue.plus(level5Value);
    mainValue=mainValue.plus(level6Value);
    document.getElementById("mainValue").innerText=getString(mainValue);    
    
}
function getString(value){
    if(value.gt("1e7")){
        return value.toExponential(2);    
    }
    else{
        return value.toFixed(2);    
    }
}

function increaseCount(level){
    switch (level){
        case 1: level1Count= level1Count.plus(1);return level1Count;
        case 2: level2Count= level2Count.plus(1);return level2Count;
        case 3: level3Count= level3Count.plus(1);return level3Count;
        case 4: level4Count= level4Count.plus(1);return level4Count;
        case 5: level5Count= level5Count.plus(1);return level5Count;
        case 6: level6Count= level6Count.plus(1);return level6Count;
        default: return undefined;
    }
}
function increaseCost(level){
    switch (level){
        case 1: level1Cost = level1Cost.mul(level1Count.div(10).plus(1.1));return level1Cost;
        case 2: level2Cost = level2Cost.mul(level2Count.div(10).plus(1.2));return level2Cost;
        case 3: level3Cost = level3Cost.mul(level3Count.div(10).plus(1.3));return level3Cost;
        case 4: level4Cost = level4Cost.mul(level4Count.div(10).plus(1.4));return level4Cost;
        case 5: level5Cost = level5Cost.mul(level5Count.div(10).plus(1.5));return level5Cost;
        case 6: level6Cost = level6Cost.mul(level6Count.div(10).plus(1.6));return level6Cost;
        default: return undefined;
    }
}
function getCost(level){
    switch (level){
        case 1: ;return level1Cost;
        case 2: ;return level2Cost;
        case 3: ;return level3Cost;
        case 4: ;return level4Cost;
        case 5: ;return level5Cost;
        case 6: ;return level6Cost;
        default: return undefined;
    }
}
function calculateIncome(){
    absoluteIncome = new Decimal(0);
    absoluteIncome = absoluteIncome.plus(level1Value);
    absoluteIncome = absoluteIncome.plus(level2Value);
    absoluteIncome = absoluteIncome.plus(level3Value);
    absoluteIncome = absoluteIncome.plus(level4Value);
    absoluteIncome = absoluteIncome.plus(level5Value);
    absoluteIncome = absoluteIncome.plus(level6Value);
    relativeIncome = absoluteIncome.div(interval.div(1000));
    document.getElementById("incomeValueText").innerHTML = getString(relativeIncome);
}
function buyTimeInterval(){
    if(mainValue.gte(timeIntervalCost)){
        if(interval.gt(1)){
        mainValue = mainValue.minus(timeIntervalCost);
        timeIntervalCount = timeIntervalCount.plus(1);
        interval = interval.mul(0.9);
        timeIntervalCost = timeIntervalCost.mul(10);
        let timeIntervalCountText = document.getElementById("timeIntervalCountText");
        let timeIntervalCostText = document.getElementById("timeIntervalCostText");
        let timeIntervalValueText = document.getElementById("timeIntervalValue");
        timeIntervalCostText.innerText=timeIntervalCost;
        timeIntervalCountText.innerText=timeIntervalCount;
        timeIntervalValueText.innerText=interval;
        calculateIncome();
        refreshTicker();}
    }
}