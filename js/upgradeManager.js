function buyUpgrade(event){
    let level = event.currentTarget.level;
    let prestige = event.currentTarget.prestige;
    let costValue = getCost(level,prestige);
    if(mainValue.gte(costValue)){
        mainValue = mainValue.minus(costValue);
        costValue = increaseCost(level,prestige);
        increaseCount(level,prestige);
        increaseValue(level,prestige);
        calculateIncome();
        refreshText();
    }
}
function buyMaxUpgrade(event){
    let level = event.currentTarget.level;
    let prestige = event.currentTarget.prestige;
    let costValue = getCost(level,prestige);
    while(mainValue.gte(costValue)){
        mainValue = mainValue.minus(costValue);
        costValue = increaseCost(level,prestige);
        increaseCount(level,prestige);
        increaseValue(level,prestige);
        calculateIncome();
        refreshText();
        costValue = getCost(level,prestige);
    }
}