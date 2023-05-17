let mainValue;
let level1Value;
let level2Value;
let level3Value;
let level4Value;
let level5Value;
let level6Value;

let level1Count
let level2Count;
let level3Count
let level4Count;
let level5Count;
let level6Count;
let timeIntervalCount;

let level1Cost;
let level2Cost;
let level3Cost;
let level4Cost;
let level5Cost;
let level6Cost;
let timeIntervalCost;

let interval;
let absoluteIncome;
let relativeIncome;
let ticker;
let saver;
function buyUpgrade(event){
    let level = event.currentTarget.level;
    let costValue = getCost(level);
    if(mainValue.gte(costValue)){
        mainValue = mainValue.minus(costValue);
        costValue = increaseCost(level);
        increaseCount(level);
        increaseValue(level);
        calculateIncome();
        refreshText();
    }
}
function initialize(){
    initData();
    for(let i =1; i<=6;i++){
        let levelButton = document.getElementById("level"+i+"Button");
        levelButton.addEventListener("click",buyUpgrade);
        levelButton.level = i;
    }
    let timeIntervalButton = document.getElementById("timeIntervalButton");
    timeIntervalButton.addEventListener("click",buyTimeInterval);
    loadData();
    startTicker();
}
function increaseValue(level){
    if(level == 1){
        level1Value = level1Count;
    }
    else if(level == 2){
        level2Value = level2Count.pow(2);
    }
    else if(level == 3){
        level3Value = level3Count.pow(3);
    }
    else if(level == 4){
        level4Value = level4Count.pow(4);
    }
    else if(level == 5){
        level5Value = level5Count.pow(5);
    }
    else if(level == 6){
        level6Value = level6Count.pow(6);
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
    refreshText();
    saveData();
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
        case 1: return level1Cost;
        case 2: return level2Cost;
        case 3: return level3Cost;
        case 4: return level4Cost;
        case 5: return level5Cost;
        case 6: return level6Cost;
        default: return undefined;
    }
}
function getValue(level){
    
    switch (level){
        case 1: return level1Value;
        case 2: return level2Value;
        case 3: return level3Value;
        case 4: return level4Value;
        case 5: return level5Value;
        case 6: return level6Value;
        default: return undefined;
    }
}
function getCount(level){
    switch (level){
        case 1: return level1Count;
        case 2: return level2Count;
        case 3: return level3Count;
        case 4: return level4Count;
        case 5: return level5Count;
        case 6: return level6Count;
        default: return undefined;
    }
}
function setCost(level, value){
    switch (level){
        case 1: level1Cost = value;return level1Cost;
        case 2: level2Cost = value;return level2Cost;
        case 3: level3Cost = value;return level3Cost;
        case 4: level4Cost = value;return level4Cost;
        case 5: level5Cost = value;return level5Cost;
        case 6: level6Cost = value;return level6Cost;
        default: return undefined;
    }
}
function setValue(level,value){
    switch (level){
        case 1: level1Value = value;return level1Value;
        case 2: level2Value = value;return level2Value;
        case 3: level3Value = value;return level3Value;
        case 4: level4Value = value;return level4Value;
        case 5: level5Value = value;return level5Value;
        case 6: level6Value = value;return level6Value;
        default: return undefined;
    }
}
function setCount(level,value){
    switch (level){
        case 1: level1Count=value; return level1Count;
        case 2: level2Count=value;return level2Count;
        case 3: level3Count=value;return level3Count;
        case 4: level4Count=value;return level4Count;
        case 5: level5Count=value;return level5Count;
        case 6: level6Count=value;return level6Count;
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
    refreshText();
}
function buyTimeInterval(){
    if(mainValue.gte(timeIntervalCost)){
        if(interval.gt(1)){
            mainValue = mainValue.minus(timeIntervalCost);
            timeIntervalCount = timeIntervalCount.plus(1);
            interval = interval.mul(0.9);
            timeIntervalCost = timeIntervalCost.mul(10);
            timeIntervalCostText.innerText=getString(timeIntervalCost);
            timeIntervalCountText.innerText=getString(timeIntervalCount);
            timeIntervalValueText.innerText=getString(interval);
            calculateIncome();
            refreshTicker();
            refreshText();
        }
    }
}
function saveData(){
    for(let i = 1;i<=6;i++){
        localStorage.setItem("level"+i+"Value",getValue(i));
        localStorage.setItem("level"+i+"Count",getCount(i));
        localStorage.setItem("level"+i+"Cost",getCost(i));
    }
    localStorage.setItem("interval",interval);
    localStorage.setItem("timeIntervalCount",timeIntervalCount);
    localStorage.setItem("timeIntervalCost",timeIntervalCost);
    localStorage.setItem("absoluteIncome",absoluteIncome);
    localStorage.setItem("relativeIncome",relativeIncome);
    localStorage.setItem("mainValue",mainValue);
}
function loadData(){
    if(localStorage.getItem("mainValue")==null)
    return;
    for(let i = 1;i<=6;i++){
        setValue(i,new Decimal(localStorage.getItem("level"+i+"Value")));
        setCount(i,new Decimal(localStorage.getItem("level"+i+"Count")));
        setCost(i,new Decimal(localStorage.getItem("level"+i+"Cost")));
    }
    interval = new Decimal(localStorage.getItem("interval"));
    timeIntervalCount = new Decimal(localStorage.getItem("timeIntervalCount"));
    timeIntervalCost = new Decimal(localStorage.getItem("timeIntervalCost"));
    absoluteIncome = new Decimal(localStorage.getItem("absoluteIncome"));
    relativeIncome = new Decimal(localStorage.getItem("relativeIncome"));
    mainValue = new Decimal(localStorage.getItem("mainValue"));
    refreshText();
}
function refreshText(){
    for(let i = 1;i<=6;i++){
        let levelValue = document.getElementById("level"+i+"Value");
        let levelCount = document.getElementById("level"+i+"CountText");
        let levelCost = document.getElementById("level"+i+"CostText");
        let value = getValue(i);
        let count = getCount(i);
        let cost = getCost(i);
        levelValue.innerText = getString(value);
        levelCount.innerText = getString(count);
        levelCost.innerText = getString(cost);
    }
    let intervalText = document.getElementById("timeIntervalValue");
    let intervalCountText = document.getElementById("timeIntervalCountText");
    let intervalCostText = document.getElementById("timeIntervalCostText");
    let mainValueText = document.getElementById("mainValue");
    let relativeIncomeText = document.getElementById("incomeValue");
    intervalText.innerText=getString(interval);
    intervalCountText.innerText=getString(timeIntervalCount);
    intervalCostText.innerText=getString(timeIntervalCost);
    mainValueText.innerText=getString(mainValue);
    relativeIncomeText.innerText=getString(relativeIncome);
}
function reset(){
    if(confirm("Are you shure you want to delete ALL data?")){
        stopTicker()
        localStorage.clear();
        initData();
        refreshText();
        startTicker();
    }
}
function initData(){
    mainValue = new Decimal(10);
 level1Value = new Decimal(0);
 level2Value = new Decimal(0);
 level3Value = new Decimal(0);
 level4Value = new Decimal(0);
 level5Value = new Decimal(0);
 level6Value = new Decimal(0);

 level1Count = new Decimal(0);
 level2Count = new Decimal(0);
 level3Count = new Decimal(0);
 level4Count = new Decimal(0);
 level5Count = new Decimal(0);
 level6Count = new Decimal(0);
 timeIntervalCount = new Decimal(0);

 level1Cost = new Decimal(10);
 level2Cost = new Decimal(100);
 level3Cost = new Decimal(1000);
 level4Cost = new Decimal(10000);
 level5Cost = new Decimal(100000);
 level6Cost = new Decimal(1000000);
 timeIntervalCost = new Decimal(100);

 interval = new Decimal(1000);
 absoluteIncome=new Decimal(0);
 relativeIncome=new Decimal(0);
}