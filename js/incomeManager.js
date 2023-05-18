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