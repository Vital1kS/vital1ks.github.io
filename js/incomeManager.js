function calculateIncome(){
    absoluteIncome = new Decimal(0);
    absoluteIncome = absoluteIncome.plus(level1ValueP1);
    absoluteIncome = absoluteIncome.plus(level2ValueP1);
    absoluteIncome = absoluteIncome.plus(level3ValueP1);
    absoluteIncome = absoluteIncome.plus(level4ValueP1);
    absoluteIncome = absoluteIncome.plus(level5ValueP1);
    absoluteIncome = absoluteIncome.plus(level6ValueP1);
    absoluteIncome = absoluteIncome.plus(level1ValueP2);
    absoluteIncome = absoluteIncome.plus(level2ValueP2);
    absoluteIncome = absoluteIncome.plus(level3ValueP2);
    absoluteIncome = absoluteIncome.plus(level4ValueP2);
    absoluteIncome = absoluteIncome.plus(level5ValueP2);
    absoluteIncome = absoluteIncome.plus(level6ValueP2);
    absoluteIncome = absoluteIncome.mul(multiplierValue);
    absoluteIncome = absoluteIncome.div(dividerValue);
    relativeIncome = absoluteIncome.div(interval.div(1000));
    refreshText();
}