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
function buyMaxUpgrade(event){
    let level = event.currentTarget.level;
    let costValue = getCost(level);
    while(mainValue.gte(costValue)){
        mainValue = mainValue.minus(costValue);
        costValue = increaseCost(level);
        increaseCount(level);
        increaseValue(level);
        calculateIncome();
        refreshText();
        costValue = getCost(level);
    }
}