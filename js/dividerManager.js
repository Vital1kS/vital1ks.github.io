function buyDivider(){
    if(mainValue.gte(dividerCost)){
        mainValue = mainValue.minus(dividerCost);
        dividerCount = dividerCount.plus(1);
        dividerValue = dividerValue.mul(0.8);
        dividerCost = dividerCost.mul(10);
        calculateIncome();
        refreshTicker();
        refreshText();
    }
}
function buyMaxDivider(){
    if(mainValue.gte(dividerCost)){
        while(mainValue.gte(dividerCost)){
            mainValue = mainValue.minus(dividerCost);
            dividerCount = dividerCount.plus(1);
            dividerValue = dividerValue.mul(0.8);
            dividerCost = dividerCost.mul(10);
        }
        calculateIncome();
        refreshTicker();
        refreshText();
    }
}