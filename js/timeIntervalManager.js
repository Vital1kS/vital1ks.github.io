function buyTimeInterval(){
    if(mainValue.gte(timeIntervalCost)){
        if(interval.mul(0.9).lt(1)){
            interval=new Decimal(1);
            return;
        } 
        mainValue = mainValue.minus(timeIntervalCost);
        timeIntervalCount = timeIntervalCount.plus(1);
        interval = interval.mul(0.9);
        timeIntervalCost = timeIntervalCost.mul(10);
        calculateIncome();
        refreshTicker();
        refreshText();
    }
}
function buyMaxTimeInterval(){
    while(mainValue.gte(timeIntervalCost)){
        if(interval.mul(0.9).lt(1)){
            interval=new Decimal(1);
            return;
        } 
        mainValue = mainValue.minus(timeIntervalCost);
        timeIntervalCount = timeIntervalCount.plus(1);
        interval = interval.mul(0.9);
        timeIntervalCost = timeIntervalCost.mul(10);
        calculateIncome();
        refreshTicker();
        refreshText();
    }
}