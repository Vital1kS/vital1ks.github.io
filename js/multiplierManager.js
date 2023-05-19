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
    if(mainValue.gte(multiplierCost)){
        while(mainValue.gte(multiplierCost)){
            mainValue = mainValue.minus(multiplierCost);
            multiplierCount = multiplierCount.plus(1);
            multiplierValue = multiplierValue.plus(1);
            multiplierCost = multiplierCost.mul(10);
        }
        calculateIncome();
        refreshTicker();
        refreshText();
    }
}