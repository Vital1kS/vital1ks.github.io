function buyTimeInterval(){
    if(mainValue.gte(timeIntervalCost)){
        if(interval.gt(1)){
            mainValue = mainValue.minus(timeIntervalCost);
            timeIntervalCount = timeIntervalCount.plus(1);
            interval = interval.mul(0.9);
            timeIntervalCost = timeIntervalCost.mul(10);
            calculateIncome();
            refreshTicker();
            refreshText();
        }
    }
}
function buyMaxTimeInterval(){
    while(mainValue.gte(timeIntervalCost)){
        if(interval.gt(1)){
            mainValue = mainValue.minus(timeIntervalCost);
            timeIntervalCount = timeIntervalCount.plus(1);
            interval = interval.mul(0.9);
            timeIntervalCost = timeIntervalCost.mul(10);
            calculateIncome();
            refreshTicker();
            refreshText();
        }
    }
}