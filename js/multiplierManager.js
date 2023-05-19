function buyMultiplier(){
    if(mainValue.gte(multiplierCost)){
        mainValue = mainValue.minus(multiplierCost);
        multiplierCount = multiplierCount.plus(1);
        multiplierValue = multiplierValue.mul(2);
        multiplierCost = multiplierCost.mul(10);
        calculateIncome();
        refreshTicker();
        refreshText();
    }
}
function buyMaxMultiplier(){
    while(mainValue.gte(multiplierCost)){
        mainValue = mainValue.minus(multiplierCost);
        multiplierCount = multiplierCount.plus(1);
        multiplierValue = multiplierValue.mul(2);
        multiplierCost = multiplierCost.mul(10);
        calculateIncome();
        refreshTicker();
        refreshText();
    }
}