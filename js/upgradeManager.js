function buyUpgrade(event){
    let level = event.currentTarget.level;
    let prestige = event.currentTarget.prestige;
    let costValue = getCost(level,prestige);
    if(mainValue.gte(costValue)){
        mainValue = mainValue.minus(costValue);
        increaseCount(level,prestige);
        costValue = increaseCost(level,prestige);
        increaseValue(level,prestige);
        calculateIncome();
        refreshText();
    }
}
function buyMaxUpgrade(event){
    let level = event.currentTarget.level;
    let prestige = event.currentTarget.prestige;
    let costValue = getCost(level,prestige);
    if(mainValue.gte(costValue)){
    while(mainValue.gte(costValue)){
        mainValue = mainValue.minus(costValue);
        increaseCount(level,prestige);
        costValue = increaseCost(level,prestige);
        increaseValue(level,prestige);
        
    }calculateIncome();
        refreshText();
}
}